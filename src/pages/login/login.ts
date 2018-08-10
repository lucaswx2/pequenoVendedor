import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from './register/register';

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

  public username: string;
  public password: string;

  constructor(private navCtrl:NavController) {}

  onEvent = (event: string): void => {
    if (this.events[event]) {
        this.events[event]({
            'username' : this.username,
            'password' : this.password
        });
    }
  }

  onRegister = ():void =>{
    this.navCtrl.push(RegisterPage)
  }

  onLogin = ():void =>{
    console.log('login')
  }
}
