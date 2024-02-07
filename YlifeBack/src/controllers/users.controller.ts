import { RequestHandler } from "express";
import prisma from "../services/prisma.service";

export const getUser: RequestHandler = async(req, res) => {
    const result = 
    await prisma.compte.findUnique({
        where: {
            idCompte: Number(req.params.id)
        }
    });
    if (!result) {
        res.status(404).send('Utilisateur non trouvé');
    } else {
        res.json(result);
    }
};