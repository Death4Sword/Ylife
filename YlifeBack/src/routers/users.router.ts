import { Router } from "express";
import { checkEmailExists, getUser } from "../controllers/users.controller";

const usersRouter = Router();

usersRouter.get('/:id', getUser);
usersRouter.get('/:email', checkEmailExists);

export default usersRouter;