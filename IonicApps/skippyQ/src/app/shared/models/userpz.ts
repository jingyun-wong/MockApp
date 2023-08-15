export class Userpz {

    email: string;
    name: string;
    contactNo: string;
    status: string;
    dateCreated: string;
    description: string;
    image: string;
    imageFile: File;
    address: string;

    constructor(email: string, name: string, contactNo: string,
         status: string, dateCreated: string, description: string,
         image: string, address: string) {
        
        this.email = email;
        this.name = name;
        this.contactNo = contactNo;
        this.status = status;
        this.dateCreated = dateCreated;
        this.description = description;
        this.image = image;
        this.address = address;
        
     }
}