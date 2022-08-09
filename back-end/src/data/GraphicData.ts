import { CustomError } from "../business/errors/CustomError";
import Graphic, { GraphicDB, GraphicDTO } from "../model/Graphic";
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
  update = async (input:GraphicDTO):Promise<void> => {
    try {
        await BaseDatabase.connection("cubo")
        .update({
          first_name: input.first_name,
          last_name: input.last_name,
          participation:input.participation,
        }).where({
            id:input.id
        });
    } catch (error:any) {
        throw new CustomError(500, error.sqlMessage);
    }
  }
  delete = async (id:string):Promise<void> => {
    try {
        await BaseDatabase.connection("cubo")
        .where({
            id
        })
        .delete()
    } catch (error:any) {
        throw new CustomError(500, error.sqlMessage);
    }
  }
}
