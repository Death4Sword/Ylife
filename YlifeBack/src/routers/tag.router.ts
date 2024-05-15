import { Router } from 'express';
import { getAllTag } from '../controllers/tag.controller';

const tagRouter = Router();

tagRouter.get('/', getAllTag);

export default tagRouter;