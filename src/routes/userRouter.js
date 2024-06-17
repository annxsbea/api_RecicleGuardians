import express from "express";

import UserController from "../controllers/userController.js";


const router = express.Router();


router.post("/cadastrarUser", UserController.cadastrarUser);
router.get("/listarUser", UserController.listarUser);   
router.post('/login', UserController.loginUser);
router.get('/buscarUser/:id', UserController.buscarUserPorId);
router.delete('/deletarUser/:id', UserController.deletarUser);
router.put('/atualizarUser/:id', UserController.atualizarUser);
router.get('/buscarUser', UserController.buscarUser);




export default router