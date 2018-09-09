import { BookAndCdServices } from './../../sevices/collection.service';
import { Collection } from './../../models/Collection';
import { Component, OnInit } from '@angular/core';
import { NavParams, NavController, ToastController } from 'ionic-angular';

/**
 * Generated class for the LendBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit {

  name: string;
  index: number;
  book: Collection;

  constructor(public navParams: NavParams, public navCtrl: NavController, public bookService: BookAndCdServices, public toastCtrl: ToastController) { }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.bookService.bookList[this.index]
  }

  close() {
    this.navCtrl.pop();
  }

  onToggleAppareil(position: string) {
    this.book.isLend = !this.book.isLend;
    let bookIsLend = this.book.isLend === true ? 'prêté' : 'rendu'
    let toast = this.toastCtrl.create({
      message: `Le livre \"${this.book.name}\" est ${bookIsLend}`,
      duration: 2000,
      position: position
    });

    toast.present(toast);
  }

}
