export interface CompanyProps {
  name: string;
}

export class Company {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  public getProps(): CompanyProps {
    return {
      name: this.name,
    };
  }
}


