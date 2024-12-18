import { Router } from 'express';
import { actualizarCategoriaProducto, darBajaCategoriaProducto, insertarCategoriaProducto, listarCategoriaProducto, obtenerCategoriaProducto } from '../controllers/categorias_productos.controller';

const router: Router = Router();

router.post('/', insertarCategoriaProducto);
router.get('/', listarCategoriaProducto);
router.get('/:idCategoriaProducto', obtenerCategoriaProducto);
router.put('/:idCategoriaProducto', actualizarCategoriaProducto);
router.delete('/:idCategoriaProducto', darBajaCategoriaProducto);

export default router;


