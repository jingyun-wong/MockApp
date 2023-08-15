export class Charity {

    imageFile:File;

    constructor(
        public name?: string,
        public email?: string,
        public contact?: string,
        public address?: string,
        public description?: string,
        public photoUrl?: string,
        public dateCreated?:string,
        public status?: string,
    ){ }
}