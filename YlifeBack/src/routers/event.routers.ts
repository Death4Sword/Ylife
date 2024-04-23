import { Router } from "express";
import { getAllEvent } from "../controllers/event.controller";


const eventRouter = Router();

eventRouter.get('/', getAllEvent);

export default eventRouter;