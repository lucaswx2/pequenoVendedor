import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthServiceProvider } from './../../../providers/auth-service/auth-service';

@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})
export class RegisterPage {

    @Input() data: any;
    @Input() events: any;
    public newUser : FormGroup;
 
    constructor(private navCtrl: NavController,public authProvider:AuthServiceProvider) {
        this.newUser = new FormGroup({
            email: new FormControl('',[Validators.email,Validators.required]),
            name: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(255)]),
            password: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(32)])
        })
     }

    onEvent = (event: string): void => {

    }

    onLogin = (): void => {
        this.navCtrl.pop()
    }

    onRegister():void{
        this.authProvider.signUp(this.newUser.value);
    }
}
