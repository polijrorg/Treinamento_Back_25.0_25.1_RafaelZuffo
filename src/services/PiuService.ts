import { createPiu, deletePiu, getAllPius } from "../repositories/PiuRepository";

export const CreatePiuService = (userId: string, content: string) => {
  return createPiu(userId, content);
};

export const GetAllPiusService = () => {
  return getAllPius();
};

export const DeletePiuService = (id: string) => {
  return deletePiu(id);
};

