import { BookAndCdServices } from './../../sevices/collection.service';
import { LendBookPage } from '../lend-book/lend-book';
import { Component } from '@angular/core';
import { MenuController, ModalController } from 'ionic-angular';
import { Collection } from '../../models/Collection';

/**
 * Generated class for the BookListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})


export class BookListPage {

  bookList: Collection[];

  constructor(
    public menuCtrl: MenuController,
    public modalCtrl: ModalController,
    public bookService: BookAndCdServices) {
  }

  ionViewWillEnter() {
    this.bookList = this.bookService.bookList.slice();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  openModal(index: number) {
    let modal = this.modalCtrl.create(LendBookPage, { index: index });
    modal.present();
  }

}
