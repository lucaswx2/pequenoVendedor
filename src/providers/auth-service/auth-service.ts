import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '../../../node_modules/angularfire2/firestore';
import { UserInfo, User } from 'firebase/app';

@Injectable()
export class AuthServiceProvider {
  private user: User;
  constructor(public afAuth: AngularFireAuth,private afDb:AngularFirestore) {
    afAuth.authState.subscribe(user => {
      this.user = user;
		});
  }

  authState(){
    return this.afAuth.authState;
  }
  get authenticated():boolean{
    return this.user !== null;
  }

  signIn(email:string,password:string){
   return  this.afAuth.auth.signInWithEmailAndPassword(email,password);
  }

  signUp(user:any){
    this.afAuth.auth.createUserWithEmailAndPassword(user.email,user.password).then((user:User)=>{
      user.updateProfile({displayName:"Arroba",photoURL:'https://u.o0bc.com/avatars/stock/_no-user-image.gif'}).then((res)=>{
        console.log(res);
      })
    })
  }
  signOut(){
    this.afAuth.auth.signOut();
  }
}
