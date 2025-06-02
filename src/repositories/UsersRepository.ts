import { isThisISOWeek } from "date-fns";
import Users from "../models/Users"


interface ICreateUserDTO{
  id: string;
  name: string;
  email: string;
  cpf: string;
}

class usersRepository{
  private users: Users[];

  constructor(){
    this.users = [];
  }

  public findUserByCPF(cpf: String): Users | undefined {
    return this.users.find((user: Users) => user.cpf == cpf);
  }
  public findUserByEmail(email: String): Users | undefined {
    return this.users.find((user: Users) => user.email == email);
  }
  public findUserByID(id: String): Users | undefined {
    return this.users.find((user: Users) => user.id == id);
  }

  public create(data: ICreateUserDTO): Users{
    const user = new Users(data);

    this.users.push(user);

    return user;
  }
}

export default usersRepository;
