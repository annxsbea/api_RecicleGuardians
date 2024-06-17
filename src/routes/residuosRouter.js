
import express from "express";

import residuosController from "../controllers/residuosController.js";

const router = express.Router();


router.post("/cadastrarResiduos", residuosController.cadastrarResiduos);
router.get("/listarResiduos", residuosController.listarResiduos);
router.get("/listarResiduos/:id", residuosController.listarResiduosPorUsuario);
router.delete("/deletarResiduos/:id", residuosController.deletarResiduos);

export default router