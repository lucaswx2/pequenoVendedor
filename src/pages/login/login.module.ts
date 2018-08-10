import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { RegisterPage } from './register/register';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    LoginPage,
    RegisterPage
  ],
  imports: [
    IonicPageModule.forChild(LoginPage)
  ],
  entryComponents: [
    RegisterPage
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], providers: [AuthServiceProvider]
})
export class LoginPageModule { }
