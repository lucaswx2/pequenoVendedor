import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProdutosPage } from './produtos';
import { NovoProdutoPage } from './novo-produto/novo-produto';

@NgModule({
  declarations: [
    ProdutosPage,
    NovoProdutoPage
  ],
  entryComponents:[
    NovoProdutoPage
  ],
  imports: [
    IonicPageModule.forChild(ProdutosPage),
  ]
})
export class ProdutosPageModule {}
