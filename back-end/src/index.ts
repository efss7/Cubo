import { app } from "./controller/app";
import express from "express";
import cors from "cors";
import { graphicRouter } from "./business/routes/GraphicRouter";


app.use(express.json());
app.use(cors());

app.use("/graphic", graphicRouter);

