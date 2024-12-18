export const insertarCategoriaProducto = (data: any) => {
    return {accion: 'insertarCategoriaProducto'};
}

export const listarCategoriaProducto = () => { 
    return { accion: 'listarCategoriaProducto' };
}

export const obtenerCategoriaProducto = (idCategoriaProducto: number) => {
    return {accion: `obtenerCategoriaProducto:${idCategoriaProducto}`};
}

export const actualizarCategoriaProducto = (idCategoriaProducto: number, data: any) => {
    return {accion: `actualizarCategoriaProducto:${idCategoriaProducto}`};
}

export const darBajaCategoriaProducto = (idCategoriaProducto: number) => {
    return {accion: `darBajaCategoriaProducto:${idCategoriaProducto}`};
}
