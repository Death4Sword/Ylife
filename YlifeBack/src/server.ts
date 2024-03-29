import express, { Request, Response } from 'express';
import usersRouter from './routers/users.router';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

app.use('/users', usersRouter)

// gestion des erreurs
app.use((err: Error, req: Request, res: Response) => {
    console.error(err.stack);
    res.status(500).send('Quelque chose s\'est mal passé !');
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
