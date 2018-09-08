import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

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

  cdList = [
    {
      name: 'Le Bruit et la Fureur2'
    },
    {
      name: 'Madame Bovary2'
    },
    {
      name: 'Éducation2'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

}
