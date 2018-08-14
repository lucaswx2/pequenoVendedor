import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, FabButton, Content } from 'ionic-angular';
import { NovoProdutoPage } from './novo-produto/novo-produto';

/**
 * Generated class for the ProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html'
})
export class ProdutosPage {
  @ViewChild(FabButton)
  fabButton: FabButton;
  @ViewChild(Content)
  content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosPage');
  }

  newProduct(){
    this.navCtrl.push(NovoProdutoPage);
  }

  ngAfterViewInit() {
    this.content.ionScroll.subscribe(d => {
      this.fabButton.setElementClass('fab-button-out', d.directionY == 'down');
    });
  }
}
