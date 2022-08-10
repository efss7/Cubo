import { GraphicDB, GraphicDTO } from "../../src/model/Graphic";
import { userMock } from "./GraphicMock";

export class GraphicDataMock {
  insert = async (input: GraphicDB): Promise<void> => {};
  select = async (): Promise<GraphicDB[]> => [userMock];
  update = async (input: GraphicDTO): Promise<void> => {};
  delete = async (id: string): Promise<void> => {}
}
