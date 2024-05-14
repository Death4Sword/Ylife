import { Router } from "express";
import { getAllEvent } from "../controllers/event.controller";
import { postEvent } from "../controllers/event.controller";


const eventRouter = Router();

eventRouter.get('/', getAllEvent);
eventRouter.post('/addEvent', postEvent);


export default eventRouter;