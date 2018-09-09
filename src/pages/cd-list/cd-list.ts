import { Collection } from './../../models/Collection';
import { BookAndCdServices } from './../../sevices/collection.service';
import { Component } from '@angular/core';
import { MenuController, ModalController } from 'ionic-angular';
import { LendCdPage } from '../lend-cd/lend-cd';

/**
 * Generated class for the CdListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {

  cdList: Collection[]

  constructor(public menuCtrl: MenuController, public cdServices: BookAndCdServices, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
    this.cdList = this.cdServices.cdList.slice();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  openModal(index: number) {
    let modal = this.modalCtrl.create(LendCdPage, { index: index });
    modal.present();
  }

}
