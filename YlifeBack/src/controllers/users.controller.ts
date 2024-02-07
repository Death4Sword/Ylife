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

export const checkEmailExists: RequestHandler = async (req, res) => {
    const mail = req.body.email;
    try{
        const compte = await prisma.compte.findFirst({
            where: {
                mail: mail
            }
        });
        if (compte) {
            res.status(200).json({ exists: true });
        } else {
            res.status(200).json({ exists: false });
        }
    } catch (error) {
        console.error('Error checking Email ', error);
        res.status(500).send('Erreur interne');
    }
};