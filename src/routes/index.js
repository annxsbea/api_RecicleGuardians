import express from "express";
import user  from "./userRouter.js";
import residuos  from "./residuosRouter.js";

const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("API funcionando corretamente"));

  app.use(express.json(), user, residuos);
};

export default routes;