import { Router } from "express";
import { getEvent } from "../controllers/event.controller";


const eventRouter = Router();

eventRouter.get('/:id', getEvent);

export default eventRouter;