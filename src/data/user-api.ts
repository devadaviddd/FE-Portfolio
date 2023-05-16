export interface UserAPIprops {
  viewUsers: string;
  createUser: string;
  updateUser: string;
  getUserByEmail: string;
  signin: string;
}

export class UserAPI {
  private readonly viewUsers: string;
  private readonly createUser: string;
  private readonly updateUser: string;
  private readonly getUserByEmail: string;
  private readonly signin: string;

  constructor(props: UserAPIprops) {
    this.viewUsers = props.viewUsers;
    this.createUser = props.createUser;
    this.updateUser = props.updateUser;
    this.getUserByEmail = props.getUserByEmail;
    this.signin = props.signin;
  }
  
  public get ViewUsers(): string {
    return this.viewUsers;
  }
  public get CreateUser(): string {
    return this.createUser;
  }
  public get UpdateUser(): string {
    return this.updateUser;
  }
  public get GetUserByEmail(): string {
    return this.getUserByEmail;
  }
  public get Signin(): string {
    return this.signin;
  }
}