import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { DatePipe } from '@angular/common';
// Firebase
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { Router, RouteConfigLoadStart,RouteConfigLoadEnd, NavigationEnd, NavigationStart } from '@angular/router';
import { TrackingService } from './shared/services/tracking.service';
import {NgIdleModule } from '@ng-idle/core';

import { HttpClientModule } from '@angular/common/http';



import { SqlService } from './shared/services/sqldb.service';

import { HomePage } from './home/home.page';
// new

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    Ng2GoogleChartsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    NgIdleModule.forRoot(),
    HttpClientModule,
  
    
    
  ],
  providers: [
    SqlService,
    HomePage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
