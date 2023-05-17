import { Company, School } from ".";

export interface UserProps {
  username: string,
  email: string,
  fullName: string,
  major?: string,
  company?: Company[],
  school?: School[],
  avatar?: string,
  password: string,
  id?: string
}

export class User {
  public username: string;
  public email: string;
  public fullName: string;
  public major?: string;
  public company?: Company[];
  public school?: School[];
  public avatar?: string;
  public password: string;
  public id? : string

  constructor(props: UserProps) {
    this.username = props.username;
    this.email = props.email;
    this.fullName = props.fullName;
    this.major = props.major;
    this.company = props.company;
    this.school = props.school;
    this.avatar = props.avatar;
    this.password = props.password;
    this.id = props.id;
  }

  public getProps(): UserProps {
    return {
      username: this.username,
      email: this.email,
      fullName: this.fullName,
      major: this.major,
      company: this.company,
      school: this.school,
      avatar: this.avatar,
      password: this.password,
      id: this.id
    }
  }
}
