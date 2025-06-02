import { Piu } from "../models/Piu";
import { v4 as uuidv4 } from "uuid";

const pius: Piu[] = [];

export const createPiu = (userId: string, content: string): Piu => {
  const now = new Date();
  const piu: Piu = { id: uuidv4(), userId, content, createdAt: now, lastEdited: now };
  pius.push(piu);
  return piu;
};

export const getAllPius = (): Piu[] => pius;

export const deletePiu = (id: string): boolean => {
  const index = pius.findIndex(p => p.id === id);
  if (index !== -1) {
    pius.splice(index, 1);
    return true;
  }
  return false;
};

