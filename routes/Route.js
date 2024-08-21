import { Router } from "express";
import { almacenController } from "../controllers/AlmacenController.js";

const router = new Router();


router.get('/almacen/', almacenController.getAll);
router.get('/almacen/:id', almacenController.getAlmacenById);
router.post('/almacen/', almacenController.createAlmacen);
router.put('/almacen/:id', almacenController.updateAlmacen);
router.delete('/almacen/:id', almacenController.deleteAlmacen);


export default router;

