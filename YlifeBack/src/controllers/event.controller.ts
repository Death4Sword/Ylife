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

export const postEvent: RequestHandler = async(req, res) => {
    const { title, description, date, lieux, photo_video, nbrParticipant, price, lienPriceURL, tags } = req.body;
    try{

        if (!date) {
            throw new Error('dateEvent is required');
        }

        // Vérifier si la date est valide
        const parsedDateEvent = new Date(date);
        if (isNaN(parsedDateEvent.getTime())) {
            throw new Error('Invalid dateEvent');
        }

        const result = await prisma.event.create({
            data: {
                title: String(title),
                description: String(description),
                dateEvent: parsedDateEvent,
                photo_video: String(photo_video),
                lieux: String(lieux),
                nbrParticipant: Number(nbrParticipant),
                price: Number(price),
                lienPriceURL: String(lienPriceURL),
                idTag: Number(tags),
                tag: { connect: { idTag: Number(tags) }}
            }
        });
        res.send(result);
    } catch (error) {
        console.error('Error creating event ', error);
        res.status(500).send('Erreur interne');
    }
}