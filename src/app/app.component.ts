import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { SignUpComponent } from "../pages/auth/sign-up/sign-up.component";
import { FirebaseService } from "../firebase-module/firebase.service";
import { SignInComponent } from "../pages/auth/sign-in/sign-in.component";
import { WelcomeComponent } from "../pages/auth/welcome/welcome.component";
import { SessionService } from "../session/session.service";
import { BaseAuth } from "../pages/auth/auth.model";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private _firebase: FirebaseService,
              private _sessionService: SessionService) {

    platform.ready()
      .then(() => this._setStartPage())
      .then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  private _setStartPage(){

    this._sessionService.getUserData()
      .then(() => this._sessionService.clearUserData())
      .then(() => this._firebase.signOut())
      .then(() =>     this._sessionService.getUserData())
      .then((user: BaseAuth) => {
        console.log(user, 'user2');
        if(user){
          console.log(user, 'user222');
          return this._firebase.loginWithEmail(user)
            .then(() => this.rootPage = TabsPage)
            .catch(() => this.rootPage = WelcomeComponent)
        } else{
          return this.rootPage = WelcomeComponent;
        }
      })

  }
}
