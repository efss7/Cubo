import { CustomError } from "../business/errors/CustomError";
import { GraphicDB } from "../model/Graphic";
import BaseDatabase from "./BaseDatabase";

export class GraphicData extends BaseDatabase {
  insert = async (input: GraphicDB): Promise<void> => {
    try {
      await BaseDatabase.connection("cubo").insert(input);
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };
  select = async ():Promise<GraphicDB[]> => {
    try {
        return BaseDatabase.connection("cubo")
        .select("*")
    } catch (error:any) {
        throw new CustomError(500, error.sqlMessage);
    }
  }
  update = async (input:GraphicDB):Promise<void> => {
    try {
        await BaseDatabase.connection("cubo")
        .update({
          first_name: input.first_name,
          last_name: input.last_name,
          participation:input.participation,
        }).where({
            first_name:input.first_name,
            last_name:input.last_name
        });
    } catch (error:any) {
        throw new CustomError(500, error.sqlMessage);
    }
  }
  delete = async (input:GraphicDB):Promise<void> => {
    try {
        await BaseDatabase.connection("cubo")
        .where({
            first_name:input.first_name,
            last_name:input.last_name
        })
        .delete()
    } catch (error:any) {
        throw new CustomError(500, error.sqlMessage);
    }
  }
}
