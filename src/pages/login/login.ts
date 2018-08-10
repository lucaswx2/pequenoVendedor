import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from './register/register';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from './../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @Input() data: any;
  @Input() events: any;

  public email: string;
  public password: string;

  constructor(private navCtrl:NavController,public authService:AuthServiceProvider) {}

  onEvent = (event: string): void => {

  }

  onRegister = ():void =>{
    this.navCtrl.push(RegisterPage)
  }

  onLogin = ():void =>{
    this.authService.signIn(this.email,this.password).then((res)=>{
      this.navCtrl.setRoot(HomePage);
    }).catch(err=>console.log(err.message));
  }
}
