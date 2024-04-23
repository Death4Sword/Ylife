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
    try{
        const {mail, password} = req.params;

        const compte = await prisma.compte.findFirst({
            where: {
                mail: String(mail),
                password: {
                    password: String(password)
                }
            }
        });
        if (compte) {
            res.status(200).json({ exists: true });
        } else {
            res.status(404).json({ exists: false });
        }
    } catch (error) {
        console.error('Error checking Email and password ', error);
        res.status(500).send('Erreur interne');
    }
};

export const postRegister: RequestHandler = async (req, res) => {
    const { filiere, mail, nom, prenom, password, typeAsso} = req.body;
    try {
        const result = await prisma.compte.create({
            data: {
                filiere: String(filiere),
                mail: String(mail),
                nom: String(nom),
                prenom: String(prenom),
                password: {
                    create: {
                        password: String(password)
                    }
                },
                typeAsso: String(typeAsso),
            }
        });
        // res.status(201).json(result);
        res.send(result);
    } catch (error) {
        console.error('Error registering user ', error);
        res.status(500).send('Erreur interne');
    }
};