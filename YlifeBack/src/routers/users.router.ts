import { Router } from "express";
import { getUser, checkEmailExists} from "../controllers/users.controller";

const usersRouter = Router();

usersRouter.get('/:id', getUser);
usersRouter.get('/mail/:mail', checkEmailExists);

export default usersRouter;