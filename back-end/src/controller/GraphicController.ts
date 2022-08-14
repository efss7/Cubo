import { Request, Response } from "express";
import  graphicBusiness, { GraphicBusiness } from "../business/GraphicBusiness";
import { GraphicDB, GraphicDTO } from "../model/Graphic";

export class GraphicController{
    constructor( private graphicBusiness:GraphicBusiness){};
    insert = async(req:Request, res:Response):Promise<void> =>{
        const {first_name, last_name, participation} = req.body
        try {
            console.log(req.body)
            const inputs:GraphicDB = {first_name, last_name, participation}
            await this.graphicBusiness.insert(inputs)
            res.status(201).send("Registrado com sucesso");
        } catch (error:any) {
            res.status(error.statusCode || 400).send({ error: error.message });
        }
    }
    select = async (req:Request, res:Response):Promise<void> =>{
        try {
            const result = await this.graphicBusiness.select()
            res.status(200).send(result)
        } catch (error:any) {
            res.status(error.statusCode || 400).send({ error: error.message });
        }
    }
    update = async (req:Request, res:Response):Promise<void> =>{
        const { first_name, last_name, participation } = req.body;
        const id = req.params.id
        try {
            console.log(id, first_name, last_name, participation)
            const inputs:GraphicDTO={ id, first_name, last_name, participation}
            await this.graphicBusiness.update(inputs)
            res.status(201).send("Registro alterado com sucesso");
        } catch (error:any) {
            res.status(error.statusCode || 400).send({ error: error.message });
        }
    }
    delete = async(req:Request, res:Response):Promise<void> =>{
        const id = req.params.id as string
        try {
            console.log(id)
            await this.graphicBusiness.delete(id)
            res.status(200).send("Registro excluído com sucesso");
        } catch (error:any) {
            res.status(error.statusCode || 400).send({ error: error.message });
        }
    }
}
export default new GraphicController(graphicBusiness)