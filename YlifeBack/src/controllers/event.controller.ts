import { RequestHandler } from "express";
import prisma from "../services/prisma.service";

export const getAllEvent: RequestHandler = async(req, res) => {
    const result = 
    await prisma.event.findMany();
    if (!result) {
        res.status(404).send('Evenement non trouvé');
    } else {
        res.json(result);
    }
}