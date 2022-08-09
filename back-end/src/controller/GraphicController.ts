import { Request, Response } from "express";
import { GraphicDTO } from "../model/Graphic";

export class GraphicController{
    insert = async(req:Request, res:Response):Promise<void> =>{
        const {first_name, last_name, participation} = req.body
        try {
            const inputs:GraphicDTO = {first_name, last_name, participation}
            await GraphicBusiness.insert(inputs)
            res.status(201).send("Registrado com sucesso");
        } catch (error:any) {
            
        }
    }
    select = async (req:Request, res:Response):Promise<void> =>{
        try {
            const result = await GraphicBusiness.select()
            res.status(200).send(result)
        } catch (error:any) {
            res.status(error.statusCode || 400).send({ error: error.message });
        }
    }
    update = async (req:Request, res:Response):Promise<void> =>{
        const {first_name, last_name, participation} = req.body
        try {
            const inputs:GraphicDTO={first_name, last_name, participation}
            await GraphicBusiness.update(inputs)
            res.status(201).send("Registrado alterado com sucesso");
        } catch (error:any) {
            res.status(error.statusCode || 400).send({ error: error.message });
        }
    }
    delete = async(req:Request, res:Response):Promise<void> =>{
        const {first_name, last_name, participation} = req.body
        try {
            const inputs:GraphicDTO = {first_name, last_name, participation}
            await GraphicBusiness.delete(inputs)
            res.status(200).send("Registrado excluído com sucesso");
        } catch (error:any) {
            res.status(error.statusCode || 400).send({ error: error.message });
        }
    }
}