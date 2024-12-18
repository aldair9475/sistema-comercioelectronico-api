import { Request, Response } from 'express';
import * as categoriaProductoService from '../services/categorias_productos.service';

export const insertarCategoriaProducto = async (req: Request, res: Response) => {
    const categoriaProducto = req.body;
    const response = categoriaProductoService.insertarCategoriaProducto(categoriaProducto);
    res.json(response);
}

export const listarCategoriaProducto = async (req: Request, res: Response) => {
    const response = categoriaProductoService.listarCategoriaProducto();
    res.json(response);
}

export const obtenerCategoriaProducto = async (req: Request, res: Response) => {
    const { idCategoriaProducto } = req.params;
    const response = categoriaProductoService.obtenerCategoriaProducto(Number(idCategoriaProducto));
    res.json(response);
}

export const actualizarCategoriaProducto = async (req: Request, res: Response) => {
    const { idCategoriaProducto } = req.params;
    const categoriaProducto = req.body;
    const response = categoriaProductoService.actualizarCategoriaProducto(Number(idCategoriaProducto), categoriaProducto);
    res.json(response);
}

export const darBajaCategoriaProducto = async (req: Request, res: Response) => {
    const { idCategoriaProducto } = req.params;
    const response = categoriaProductoService.darBajaCategoriaProducto(Number(idCategoriaProducto));
    res.json(response);
}


