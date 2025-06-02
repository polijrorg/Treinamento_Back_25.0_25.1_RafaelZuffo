import { Router, Request, Response } from 'express';
import { uuid } from 'uuidv4';
import CreateUserService from '../services/CreateUserService';
import usersRepository from '../repositories/UsersRepository';

const usersRouter = Router();
export const userRespository = new usersRepository();

usersRouter.post('/', (request: Request, response: Response) => {
  try {
    const { name, email, cpf } = request.body;

    if( !name || !email || !cpf ){
      return response.status(400).json({error: 'Por favor, envie todas as informações'});
    }

    const createUser = new CreateUserService(userRespository);

    const user = createUser.execute({
      id: uuid(),
      name,
      email,
      cpf
    });

    return response.json(user);

  } catch(e: any) {
      return response.status(400).json({ error: e.message });
  }
});

usersRouter.get('/getAll', (request: Request, response: Response) => {
  const users = userRespository.getAll();

  return response.json(users)
})

export default usersRouter;
