import { NgModule } from '@angular/core';
import { Firebase } from "@ionic-native/firebase";
import { FirebaseService } from "./firebase.service";
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzBNbNwp8rjp8_QpW84pAOH7g_ghnm1NI",
  authDomain: "bank-374f0.firebaseapp.com",
  databaseURL: "https://bank-374f0.firebaseio.com",
  projectId: "bank-374f0",
  storageBucket: "bank-374f0.appspot.com",
  messagingSenderId: "93750570874"
};

@NgModule({
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    FirebaseService,
    Firebase
  ]
})
export class FirebaseModule {}
