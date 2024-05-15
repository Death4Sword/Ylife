import express, { NextFunction, Request, Response } from 'express';
import usersRouter from './routers/users.router';
import eventsRouter from './routers/event.router';
import tagRouter from './routers/tag.router';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/users', usersRouter)
app.use('/events', eventsRouter)
app.use('/tags', tagRouter)

// gestion des erreurs
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Quelque chose s\'est mal passé !');
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
