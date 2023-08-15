export class trading{

    foreignBrokerage?: number;
    marketValue?: number;
    orderNumber?:number;
    orderStatus?:string;
    orderType?:string;
    portfolioId?:number;
    portfolioType?: string;
    priceLimit?:number;
    quantity?:number;
    settlementCurrency?:string;
    tradingPlace?:string;
    triggerLimit?:number;
    units?:number;
    validity?:string;
    enteredOn?:string;
    executedStocks?:string[];

    constructor(
        foreignBrokerage?: number,
        marketValue?: number,
        orderNumber?:number,
        orderStatus?:string,
        orderType?:string,
        portfolioId?:number,
        portfolioType?: string,
        priceLimit?:number,
        quantity?:number,
        settlementCurrency?:string,
        tradingPlace?:string,
        triggerLimit?:number,
        units?:number,
        validity?:string,
        enteredOn?:string,
        executedStocks?:string[]
        ){
            this.foreignBrokerage=foreignBrokerage;
            this.marketValue = marketValue;
            this.orderNumber = orderNumber;
            this.orderStatus = orderStatus;
            this.orderType = orderType;
            this.portfolioId = portfolioId;
            this.portfolioType = portfolioType;
            this.priceLimit = priceLimit;
            this.quantity = quantity;
            this.settlementCurrency = settlementCurrency;
            this.tradingPlace = tradingPlace;
            this.triggerLimit = triggerLimit;
            this.units = units;
            this.validity = validity; 
            this.enteredOn = enteredOn;
            this.executedStocks = executedStocks;
        }
}