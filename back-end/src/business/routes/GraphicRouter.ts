import { Router } from "express";
import graphicBusiness from "../../controller/GraphicController";

export const graphicRouter = Router();

graphicRouter.post("/register", graphicBusiness.insert);

