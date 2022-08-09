import { Router } from "express";
import graphicBusiness from "../../controller/GraphicController";

export const graphicRouter = Router();

graphicRouter.post("/insert", graphicBusiness.insert);
graphicRouter.get("/select", graphicBusiness.select)
graphicRouter.put("/update/:id", graphicBusiness.update)
graphicRouter.delete("/delete/:id", graphicBusiness.delete)

