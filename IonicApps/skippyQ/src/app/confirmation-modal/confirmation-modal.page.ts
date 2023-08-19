import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: 'confirmation-modal.page.html',
  styleUrls: ['confirmation-modal.page.scss']
})
export class ConfirmationModalPage {

  @Input() message: string;

  constructor(private modalController: ModalController) {}

  dismissModal(confirm: boolean) {
    this.modalController.dismiss({
      confirmed: confirm
    });
  }

}
