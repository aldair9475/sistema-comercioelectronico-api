import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';

const app: Application = express();

app.get('/saludar', (req: Request, res: Response) => {
    res.json({nombre: 'Zair Alexis', apellido: 'Chavez'}); 
});

app.use(morgan('dev'));

export default app;
