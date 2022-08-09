export default class Graphic{
    constructor(
        private id:string,
        private first_name:string,
        private last_name:string,
        private participation:number
    ){}
}

export interface GraphicDTO{
  id: string;
  first_name: string;
  last_name: string;
  participation: number;
}
export interface GraphicDB{
    first_name: string;
    last_name: string;
    participation: number;
}