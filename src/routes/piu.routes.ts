import { Router } from "express";
import { CreatePiuService, DeletePiuService, GetAllPiusService } from "../services/PiuService";

const router = Router();

router.post("/pius", (req, res) => {
  const { userId, content } = req.body;
  const piu = CreatePiuService(userId, content);
  res.status(201).json(piu);
});

router.get("/pius", (req, res) => {
  const pius = GetAllPiusService();
  res.json(pius);
});

router.delete("/pius/:id", (req, res) => {
  const { id } = req.params;
  const deleted = DeletePiuService(id);
  deleted ? res.status(204).send() : res.status(404).json({ error: "Piu não encontrado" });
});

export default router;

