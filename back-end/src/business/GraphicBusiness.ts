/* eslint-disable prettier/prettier */
import { GraphicData } from "../data/GraphicData";
import { GraphicDB, GraphicDTO } from "../model/Graphic";
import IdGenerator from "../services/IdGenerator";
import { CustomError } from "./errors/CustomError";

export class GraphicBusiness {
  constructor(
    private graphicData: GraphicData,
    private idGenerator: IdGenerator
  ) { }

  insert = async (inputs: GraphicDB): Promise<void> => {
    try {
      const { first_name, last_name, participation } = inputs;
      if (!inputs.first_name || !inputs.last_name)
        throw new CustomError(422, "Nome ou Sobrenome não foram passados");
      if (!inputs.participation)
        throw new CustomError(422, "Participação não foi passada");

      const id = this.idGenerator.generateId();

      const dicesOfGraphic: GraphicDTO = {
        id,
        first_name,
        last_name,
        participation,
      };

      await this.graphicData.insert(dicesOfGraphic);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  select = async (): Promise<GraphicDB[] | undefined> => {
    try {
      return this.graphicData.select();
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  update = async (inputs: GraphicDTO): Promise<void> => {
    try {
      if (!inputs.id) {
        throw new CustomError(422, "ID inválido");
      }
      if (!inputs.first_name || !inputs.last_name)
        throw new CustomError(422, "Nome ou Sobrenome não foram passados");
      if (!inputs.participation)
        throw new CustomError(422, "Participação não foi passada");
      await this.graphicData.update(inputs);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };

  delete = async (id: string): Promise<void> => {
    try {
      if (!id) {
        throw new CustomError(422, "ID inválido");
      }
      await this.graphicData.delete(id);
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message);
    }
  };
}

export default new GraphicBusiness(new GraphicData(), new IdGenerator());
