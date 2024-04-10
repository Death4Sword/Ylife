import { RequestHandler } from "express";
import prisma from "../services/prisma.service";

export const getEvent: RequestHandler = async(req, res) => {
    const result = 
    await prisma.event.findUnique({
        where: {
            idEvent: Number(req.params.id)
        }
    });
    if (!result) {
        res.status(404).send('Evenement non trouvé');
    } else {
        res.json(result);
    }
}