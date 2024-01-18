import express from 'express';
import { paginaInicio,paginaNosotros,paginaContacto,paginaPost ,paginaDetallePost } from '../controllers/paginasController.js';

const router = express.Router();

router.get('/inicio', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/contacto', paginaContacto);

router.get('/posts', paginaPost);

router.get('/posts/:slug', paginaDetallePost)

export default router;