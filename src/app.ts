import express, { Application } from 'express';
import morgan from 'morgan';
import categoriaProductoRouter from './routes/categorias_productos.route';

const app: Application = express();

app.use(morgan('dev'));
app.use('/api/v1/categorias_productos', categoriaProductoRouter);

export default app;



