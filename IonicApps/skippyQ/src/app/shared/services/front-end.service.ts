import { Injectable } from '@angular/core';
import { FrontEnd } from '../models/front-end';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class FrontEndService {

  allInfo: FrontEnd[] = [];

  constructor(private storage: Storage) { }


  add(FrontEnd: FrontEnd) {
    const promise = new Promise<string> ((resolve, reject) => {
      const db = firebase.firestore();
      const campaignsRef = db.collection('clicks/');

      //add to database
      campaignsRef.add({
        clicks: FrontEnd.clicks,
        loadtimes:FrontEnd.load_time
      }).then(docRef=> {
        console.log('New Clicks, success ID:' + docRef.id );
        console.log('Load times, success ID:' + docRef.id );
        this.storage.create();
        this.storage.set('id', docRef.id );
        console.log('New info ID:' + docRef.id );
        resolve(docRef.id);
      });
    });
    return promise;
   }

   update() {

    const db = firebase.firestore();
    // this.storage.get('id').then((val) => {
    //   console.log('Your id is', val);
      const ref = db.collection('clicks/').doc('dWwnKkjuQPtjew2GgPiI');
      ref.update({
        clicks: firebase.firestore.FieldValue.increment(1)

    });
    // });

  }


}

