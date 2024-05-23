import { Router } from "express";
import { getAllEvent, postEvent, getEventsByAccount } from "../controllers/event.controller";


const eventRouter = Router();

eventRouter.get('/', getAllEvent);
eventRouter.post('/addEvent', postEvent);
eventRouter.get('/getEventbyAccount', getEventsByAccount);


export default eventRouter;