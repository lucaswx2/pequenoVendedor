import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NovoProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-novo-produto',
  templateUrl: 'novo-produto.html'
})
export class NovoProdutoPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad NovoProdutoPage');
  }
}
