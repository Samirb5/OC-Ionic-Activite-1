import { BookAndCdServices } from './../../sevices/collection.service';
import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Collection } from '../../models/Collection';

/**
 * Generated class for the LendCdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage implements OnInit {

  name: string;
  index: number;
  cd: Collection;

  constructor(public navCtrl: NavController, public navParams: NavParams, public cdService: BookAndCdServices, public toastCtrl: ToastController) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd = this.cdService.cdList[this.index] 
  }

  close() {
    this.navCtrl.pop();
  }

  onToggleAppareil(position:string) {
    this.cd.isLend = !this.cd.isLend;
    let cdIsLend = this.cd.isLend === true ? 'prêté' : 'rendu'
    let toast = this.toastCtrl.create({
      message:`Le Cd \"${this.cd.name}\" est ${cdIsLend}`,
      duration: 2000,
      position: position
    });
  
    toast.present(toast);
  }

}
