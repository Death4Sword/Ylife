import { Router } from 'express';
import { getAllTag } from '../controllers/tag.controller';

const tagRouter = Router();

tagRouter.get('tag/', getAllTag);

export default tagRouter;