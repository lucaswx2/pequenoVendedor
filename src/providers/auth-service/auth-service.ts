import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from './user.model';

@Injectable()
export class AuthServiceProvider {
  private user: firebase.User;
  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => {
			this.user = user;
		});
  }

  signIn(email:string,password:string){
   return  this.afAuth.auth.signInWithEmailAndPassword(email,password);
  }
  signUp(user:User){
    this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password).then((res:any)=>{
      console.log(res);
    })
  }
}
