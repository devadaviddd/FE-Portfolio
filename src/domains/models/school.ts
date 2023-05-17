export interface SchoolProps {
  name: string;
}

export class School {
  public name: string;
  constructor(props: SchoolProps) {
    this.name = props.name;
  }
  public getProps(): SchoolProps {
    return {
      name: this.name,
    };
  } 
}


