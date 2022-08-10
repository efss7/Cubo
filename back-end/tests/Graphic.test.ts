import { GraphicBusiness } from "../src/business/GraphicBusiness";
import { GraphicDataMock } from "./mock/GraphicDataMock";
import IdGeneratorMock from "./mock/IdGeneratorMock";

const GraphicBusinessMock = new GraphicBusiness(
  new GraphicDataMock(),
  new IdGeneratorMock()
);

const inputs = {
  id: "user1",
  first_name: "Eric Felipe",
  last_name: "Silva e Silva",
  participation: 30,
};

describe("test GraphicBusiness class", () => {
  describe("test insert", () => {
    test("test missing first_name", async () => {
      inputs.first_name = "";
      try {
        await GraphicBusinessMock.insert(inputs);
      } catch (error: any) {
        inputs.first_name = "Eric Felipe";
        expect(error.message).toEqual("Nome ou Sobrenome não foram passados");
        expect(error.statusCode).toStrictEqual(422);
      } finally {
        expect.assertions(2);
      }
    });
    test("test missing last_name", async () => {
      inputs.last_name = "";
      try {
        await GraphicBusinessMock.insert(inputs);
      } catch (error: any) {
        inputs.last_name = "Silva e Silva";
        expect(error.message).toEqual("Nome ou Sobrenome não foram passados");
        expect(error.statusCode).toStrictEqual(422);
      } finally {
        expect.assertions(2);
      }
    });
    test("test missing participation", async () => {
      inputs.participation = 0;
      try {
        await GraphicBusinessMock.insert(inputs);
      } catch (error: any) {
        inputs.participation = 30;
        expect(error.message).toEqual("Participação não foi passada");
        expect(error.statusCode).toStrictEqual(422);
      } finally {
        expect.assertions(2);
      }
    });
    test("test current inputs", async () => {
      try {
        const insert = jest.fn((inputs: any) => {
          GraphicBusinessMock.insert(inputs);
        });
        const result = insert(inputs);
        expect(insert).toBeCalled();
        expect(insert).toBeCalledWith(inputs);
        expect(result).toBeUndefined();
        expect(insert).toHaveReturned();
      } catch (error: any) {
      } finally {
        expect.assertions(4);
      }
    });
  });
  describe("test select", () => {
    test("test response", async () => {
      const result = await GraphicBusinessMock.select();
      expect(result).toEqual([inputs]);
    });
  });
  describe("test update", () => {
    test("test missing id", async () => {
      inputs.id = "";
      try {
        await GraphicBusinessMock.update(inputs);
      } catch (error: any) {
        inputs.id = "user1";
        expect(error.message).toEqual("ID inválido");
        expect(error.statusCode).toStrictEqual(422);
      } finally {
        expect.assertions(2);
      }
    });
    test("test missing first_name", async () => {
      inputs.first_name = "";
      try {
        await GraphicBusinessMock.update(inputs);
      } catch (error: any) {
        inputs.first_name = "Eric Felipe";
        expect(error.message).toEqual("Nome ou Sobrenome não foram passados");
        expect(error.statusCode).toStrictEqual(422);
      } finally {
        expect.assertions(2);
      }
    });
    test("test missing last_name", async () => {
      inputs.last_name = "";
      try {
        await GraphicBusinessMock.update(inputs);
      } catch (error: any) {
        inputs.last_name = "Silva e Silva";
        expect(error.message).toEqual("Nome ou Sobrenome não foram passados");
        expect(error.statusCode).toStrictEqual(422);
      } finally {
        expect.assertions(2);
      }
    });
    test("test missing participation", async () => {
      inputs.participation = 0;
      try {
        await GraphicBusinessMock.update(inputs);
      } catch (error: any) {
        inputs.participation = 30;
        expect(error.message).toEqual("Participação não foi passada");
        expect(error.statusCode).toStrictEqual(422);
      } finally {
        expect.assertions(2);
      }
    });
    test("test current inputs", async () => {
      try {
        const insert = jest.fn((inputs: any) => {
          GraphicBusinessMock.update(inputs);
        });
        const result = insert(inputs);
        expect(insert).toBeCalled();
        expect(insert).toBeCalledWith(inputs);
        expect(result).toBeUndefined();
        expect(insert).toHaveReturned();
      } catch (error: any) {
      } finally {
        expect.assertions(4);
      }
    });
  });
  describe("test delete", () => {
    test("test missing id", async () => {
      inputs.id = "";
      try {
        await GraphicBusinessMock.delete(inputs.id);
      } catch (error: any) {
        inputs.id = "user1";
        expect(error.message).toEqual("ID inválido");
        expect(error.statusCode).toStrictEqual(422);
      } finally {
        expect.assertions(2);
      }
    });
  });
});
