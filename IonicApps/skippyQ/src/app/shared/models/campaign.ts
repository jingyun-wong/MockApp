export class Campaign {

    id: string;
    title: string;
    cOrg: string;
    sDate: string;
    eDate: string;
    category: string;
    image: string; //Image URL
    imageFile: File; //Image File
    description: string;
    status: string;
    tRelief: boolean;
    fav: string;

    constructor(title:string, cOrg:string, sDate:string, eDate:string, category:string, 
                image:string, status: string, tRelief: boolean, fav: string, description?: string, id?:string) {
        this.id = id;
        this.title = title;
        this.cOrg = cOrg;
        this.sDate = sDate;
        this.eDate = eDate;
        this.category = category;
        this.image = image;
        this.description = description;
        this.status = status;
        this.tRelief = tRelief;
        this.fav = fav;
    } 

}