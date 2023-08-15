import { Time } from '@angular/common';

export class donationRecord {
    campaign:string;
    organization: string;
    amount: number;
    date:string;
    time:string;
    transactionID:string;
    img:string;
    datetime:string;

    constructor(campaign:string,organization: string, amount: number, date:string,time:string,transactionID:string,img?:string,datetime?:string) {
        this.campaign = campaign;
        this.organization = organization;
        this.amount = amount;  
        this.date = date;
        this.time = time;
        this.transactionID = transactionID;
        this.img = img;
        this.datetime = datetime;
    }    
}