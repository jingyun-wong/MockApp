export class Fcampaign {

    id:string;
    cOrg: string;
    title: string;
    category: string;
    image: string;
    user: string;
    camId:string;

    constructor(id: string, cOrg: string, title: string, category: string, image: string, user: string,camId:string) {
        
        this.id = id;
        this.cOrg = cOrg;
        this.title = title;
        this.category = category;
        this.image = image;
        this.user = user;
        this.camId = camId;
        
    }

}