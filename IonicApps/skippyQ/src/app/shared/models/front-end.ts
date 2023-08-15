export class FrontEnd{

    constructor(
        public id?: number,
        public clicks?: number,
        public load_time?:number,
        public dateEntered?:string,
        public pagesViewed?:Array<any>
        ){}
}