
export class topDonation {
    organization: string;
    amount: number;
    campaignImg:string;
    
;

    constructor(organization: string, amount: number,campaignImg?:string) {
        this.organization = organization;
        this.amount = amount;  
        this.campaignImg = campaignImg;
    }    
}