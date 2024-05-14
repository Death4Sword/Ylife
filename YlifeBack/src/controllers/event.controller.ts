import { RequestHandler } from "express";
import prisma from "../services/prisma.service";
import { connect } from "http2";

export const getAllEvent: RequestHandler = async(req, res) => {
    const result = 
    await prisma.event.findMany();
    if (!result) {
        res.status(404).send('Evenement non trouvé');
    } else {
        res.json(result);
    }
}

export const postEvent: RequestHandler = async(req, res) => {
    const { title, description, dateEvent, lieux, photo_video, nbrParticipant, price, lienPriceURL, tag, idCompte } = req.body;
    try{
        const result = await prisma.event.create({
            data: {
                title: String(title),
                description: String(description),
                dateEvent: new Date(dateEvent).toISOString().slice(0, 19).replace('T', ' '),
                photo_video: String(photo_video),
                lieux: String(lieux),
                nbrParticipant: Number(nbrParticipant),
                price: Number(price),
                lienPriceURL: String(lienPriceURL),
                idTag: Number(tag),
                idCompte: Number(idCompte)
            }
        });
        res.send(result);
    } catch (error) {
        console.error('Error creating event ', error);
        res.status(500).send('Erreur interne');
    }
}