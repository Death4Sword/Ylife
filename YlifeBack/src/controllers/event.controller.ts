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
    const { title, description, date, location, photo_video, places, price, urlPrice, tags } = req.body;
    try{
        if (!date) {
            throw new Error('dateEvent is required');
        }

        // Vérifier si la date est valide
        const parsedDateEvent = new Date(date);
        if (isNaN(parsedDateEvent.getTime())) {
            throw new Error('Invalid dateEvent');
        }

        console.log(tags);
        // Assurez-vous que tags est un tableau
        if (!Array.isArray(tags)) {
            return res.status(400).send('tags must be an array');
        }

        
        // Vérifiez que les tags existent dans la base de données
        for (const tagId of tags) {
            const tagExists = await prisma.tags.findUnique({ where: { idTag: tagId } });
            if (!tagExists) {
                return res.status(400).send(`Tag with id ${tagId} does not exist`);
            }
        }

        const result = await prisma.event.create({
            data:{
                title: title,
                description: description,
                dateEvent: parsedDateEvent,
                photo_video: photo_video,
                lieux: location,
                nbrParticipant: places,
                price: price,
                lienPriceURL: urlPrice,
                tags: {
                    create: tags.map((tagId: number) => ({
                        tag: { connect: { idTag: tagId } }
                    }))
                }
            },
            include: {
                tags: true
            }
        });
        res.send(result);
    } catch (error) {
        res.status(500).send('Erreur interne');
    }
}