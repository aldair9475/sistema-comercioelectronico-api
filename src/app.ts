import express, { Application, Request, Response } from 'express';
import morgan from 'morgan';

const app: Application = express();

app.get('/saludar', (req: Request, res: Response) => {
    console.log('Hola estoy saludando');
    res.json({nombre: 'Zair'}); 
});

app.use(morgan('dev'));

export default app;
