import { Router } from "express";
import { getUser } from "../controllers/users.controller";

const usersRouter = Router();

usersRouter.get('/:id', getUser);

export default usersRouter;