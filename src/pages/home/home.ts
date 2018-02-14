import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseService } from "../../firebase-module/firebase.service";
import { SessionService } from "../../session/session.service";
import { WelcomeComponent } from "../auth/welcome/welcome.component";
import { AngularFireList } from "angularfire2/database";
import { SignUpModel } from "../auth/auth.model";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit, OnDestroy{

  private _subscr: Subscription;
  public user: SignUpModel;
  constructor(public navCtrl: NavController, private _firebaseService: FirebaseService, private _sessionService: SessionService) {

  }

  public ngOnDestroy(){
    console.log('destroy');
    this._subscr.unsubscribe();
  }
  public ngAfterViewInit() {
  console.log('init')
    // this._subscr = this._firebaseService.getUserData().valueChanges().subscribe((user: SignUpModel) => {
    //   this.user = user;
    // });
        console.log(this.user, 111);
        // this.user.subscribe(res => console.log(1222, res));
  }
  public ionViewWillEnter(){
    console.log('view')
  this._subscr = this._firebaseService.getUserData().valueChanges().subscribe((user: SignUpModel) => {
    this.user = user;
  });
}
  public logOut(){
    this._subscr.unsubscribe();
  }
}
