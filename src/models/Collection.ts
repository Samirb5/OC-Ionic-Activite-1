export class Collection {
    isLend: boolean;
    description:string;
  
    constructor(public name: string) {
      this.isLend = false;
    }
}