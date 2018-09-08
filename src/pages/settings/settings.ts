import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public navParams: NavParams) {
  }

  tabsPage = TabsPage;

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

 
}
