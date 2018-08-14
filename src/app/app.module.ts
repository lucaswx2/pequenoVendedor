import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPageModule } from '../pages/login/login.module';

import { AngularFireAuthModule, AngularFireAuthProvider } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { UserProvider } from '../providers/user/user';
import { ProdutosPageModule } from '../pages/produtos/produtos.module';
export const firebaseConfig = {
  apiKey: "AIzaSyDJJXPAyOaRiqQ6WkXrKf-AAYYrDYftvR4",
  authDomain: "pequeno-vendedor.firebaseapp.com",
  databaseURL: "https://pequeno-vendedor.firebaseio.com",
  projectId: "pequeno-vendedor",
  storageBucket: "pequeno-vendedor.appspot.com",
  messagingSenderId: "700516159999",
};


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ProdutosPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuthProvider,
    UserProvider
  ]
})
export class AppModule {
  constructor(private afs: AngularFirestore) {
    afs.firestore.settings({
      timestampsInSnapshots: true,
    });
    afs.firestore.enablePersistence();
  }
}
