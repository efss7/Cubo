export default class Graphic{
    constructor(
        private id:string,
        private first_name:string,
        private last_name:string,
        private participation:number
    ){}
}

export interface GraphicDTO extends Omit<Graphic, "id"> {

}