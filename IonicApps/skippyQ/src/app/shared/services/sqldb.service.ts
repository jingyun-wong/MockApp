import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {trading} from '../models/trading'
import {investment} from '../models/investment'

import { Observable } from 'rxjs';
import { tradingIdea } from '../models/trading-idea';
import { userStories } from '../models/user-stories';
@Injectable()
export class SqlService {
  private headers: HttpHeaders;


constructor(private http: HttpClient) {
    console.log("Starting...");
    const headers = { 'content-type': 'application/json'}  
}

    // get userStories
    getUserStories() {
        return this.http.get<userStories>('http://localhost:2345/get/userstories')
    }

    // get investmentideas
    getInvestmentIdeas() {
        localStorage.setItem("dbLoadTime",JSON.stringify(window.performance.now()))
        
        return this.http.get<investment[]>('http://localhost:2345/get/investmentIdeas')
    }

    // get investmentideasById
    getInvestmentIdeasById(id){
        return this.http.get<investment[]>(`http://localhost:2345/get/investmentIdeas/${id}`)
    }

    // get tradingIdeaById
    getTradingIdeaById(id){
        return this.http.get<tradingIdea>(`http://localhost:2345/get/tradingIdeas/main/${id}`)
    }

    // get all tradingIdea
    getTradingIdeas(category){
        return this.http.get<tradingIdea[]>(`http://localhost:2345/get/tradingIdeas/all/${category}`)
    }
    
    // get trading
    getTrading():Observable<trading[]>{
        localStorage.setItem("dbLoadTime",JSON.stringify(window.performance.now()))
        return this.http.get<trading[]>('http://localhost:2345/get/trading')
    }
    
    // post order
    postTrading(jsonbody){
        return this.http.post('http://localhost:2345/get/trading',jsonbody)     
    }

    // post trackingMetrics
    postTrackingMetrics(jsonbody){
        return this.http.post('http://localhost:2345/add/trackingMetrics',jsonbody).subscribe(
            data => console.log('Success',data), 
            error => console.log('Error',error))
    }

    // post Journey trackingMetrcis
    postJourneyTrackingMetrics(jsonbody){
        return this.http.post('http://localhost:2345/add/journeytrackingMetrics',jsonbody).subscribe(
            data => console.log('JOURNEY Success',data), 
            error => console.log('Error',error))
    }

    // post General trackingMetrcis
    postGeneralTrackingMetrics(jsonbody){
        return this.http.post('http://localhost:2345/add/generaltrackingMetrics',jsonbody).subscribe(
            data => console.log('Success',data), 
            error => console.log('Error',error))
    }

    // post CTR trackingMetrics
    postCTRTrackingMetrics(jsonbody){
        console.log("CTR", jsonbody)
        return this.http.post('http://localhost:2345/add/ctrTrackingMetrics',jsonbody).subscribe(
            data => console.log('Success',data), 
            error => console.log('Error',error))
    }
}
