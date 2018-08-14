import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AuthServiceProvider } from './../providers/auth-service/auth-service';
import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = undefined;
  pages:Array<{title:string,icon:string,component:any}>;
  user:any;
  placeholderImage:string = "https://u.o0bc.com/avatars/stock/_no-user-image.gif";
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private authServiceProvider: AuthServiceProvider,
  ) {
    this.pages = [
      {title:"Início",icon:"ios-home-outline",component:HomePage},
      {title:"Meus produtos",icon:"ios-archive-outline",component:'ProdutosPage'},
    ]
    this.authServiceProvider.authState().subscribe(user=>{
      this.user = user;
      console.log(user);
      if(user){
        this.rootPage = HomePage;
      }else{
        this.rootPage = LoginPage
      }
    },()=>this.rootPage = LoginPage);

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  };

  signOut(){
    this.authServiceProvider.signOut();
    this.nav.setRoot(LoginPage);
  }
}
