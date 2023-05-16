export class School {
  public name: string;
  get getName(): string {
    return this.name;
  }  
  constructor(name: string) {
    this.name = name;
  }
}


