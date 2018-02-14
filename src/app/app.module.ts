import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FirebaseModule } from "../firebase-module/firebase.module";
import { AuthModule } from "../pages/auth/auth.module";
import { SessionModule } from "../session/session.module";
import { GeneralHeaderComponent } from "../pages/tabs/general-header/general-header.component";

@NgModule({
  declarations: [
    MyApp,
    GeneralHeaderComponent,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    AuthModule,
    SessionModule,
    IonicModule.forRoot(MyApp),
    FirebaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GeneralHeaderComponent,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  exports:[
    GeneralHeaderComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
