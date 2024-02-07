import { Router } from "express";
import { checkEmailExists } from "../controllers/users.controller";

const mailRouter = Router();

mailRouter.get('/:email', checkEmailExists);

export default mailRouter;