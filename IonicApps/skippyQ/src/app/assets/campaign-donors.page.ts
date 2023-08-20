import { Component, OnInit } from '@angular/core';
import { Campaign } from '../shared/models/campaign';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-campaign-donors',
  templateUrl: './campaign-donors.page.html',
  styleUrls: ['./campaign-donors.page.scss'],
})
export class CampaignDonorsPage implements OnInit {


  handlerMessage = '';
  roleMessage = '';

  constructor(private alertController: AlertController) { }

  ngOnInit() {
    
  }

   async presentAlert() {
      // const alert = await this.alertController.create({
      //   header: '',
      //   buttons: [
      //     {
      //       text: 'Cancel',
      //       role: 'cancel',
      //       handler: () => {
      //         this.handlerMessage = 'Alert canceled';
      //       },
      //     },
      //     {
      //       text: 'OK',
      //       role: 'confirm',
      //       handler: () => {
      //         this.handlerMessage = 'Alert confirmed';
      //       },
      //     },
      //   ],
      // });

      // await alert.present();

      // const { role } = await alert.onDidDismiss();
      // this.roleMessage = `Dismissed with role: ${role}`;
    }
  }




