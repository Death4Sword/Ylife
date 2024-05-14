import { RequestHandler } from "express";
import prisma from "../services/prisma.service";

export const getAllTag: RequestHandler = async(req, res) => {
    const result = 
    await prisma.tags.findMany();
    if (!result) {
        res.status(404).send('Tag non trouvé');
    } else {
        res.json(result);
    }
}
