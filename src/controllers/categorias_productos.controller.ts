import { Request, Response } from 'express';

export const insertarCategoriaProducto = async (req: Request, res: Response) => {
    res.json({ accion: `insertarCategoriaProducto` });
};

export const listarCategoriaProducto = async (req: Request, res: Response) => {
    res.json({ accion: `listarCategoriaProducto` });
};

export const obtenerCategoriaProducto = async (req: Request, res: Response) => {
    res.json({ accion: `obtenerCategoriaProducto` });
};

export const actualizarCategoriaProducto = async (req: Request, res: Response) => {
    res.json({ accion: `actualizarCategoriaProducto` });
};

export const darBajaCategoriaProducto = async (req: Request, res: Response) => {
    res.json({ accion: `darBajaCategoriaProducto` });
};

