import { RequestHandler } from 'express';
import prisma from '../services/prisma.service';

export const signupController: RequestHandler = async(req, res) => {
    const result =
    await prisma.compte.findUnique({
        where: {
            idCompte: Number(req.params.idCompte),
            login: String(req.params.login),
            mail: String(req.params.email)
        }
    });
    if (result) {
        res.status(409).send('Utilisateur déjà existant');
    } else {
        res.json(result);
    }
};
