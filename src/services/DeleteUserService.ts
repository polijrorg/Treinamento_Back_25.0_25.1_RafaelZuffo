import Users from "../models/Users";
import usersRepository from "../repositories/UsersRepository";

interface IRequest{
  id: string;
}

class DeleteUserService {
  private usersRepository: usersRepository;

  constructor(usersRepository: usersRepository){
    this.usersRepository = usersRepository;
  }

  public execute(data: IRequest){
    const userwithID = this.usersRepository.getById(data.id);

    if(!userwithID){ throw Error('Esse usuário não existe');}

    const index = this.usersRepository.findIndexById(data.id);

    this.usersRepository.delete(index);

    return userwithID;
  }
}

export default DeleteUserService;
