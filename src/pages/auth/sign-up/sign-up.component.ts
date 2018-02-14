import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BaseAuth, SignUpModel } from "../auth.model";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from "../../../firebase-module/firebase.service";
import { TabsPage } from "../../tabs/tabs";
import { SessionService } from "../../../session/session.service";

@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpComponent implements OnInit{

  public signUpModel: SignUpModel = {
    email: '',
    password: '',
    name: '',
    surname: '',
    phone: ''
};
  public asyncWait: boolean;

  public signUpForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    private _formGroup: FormBuilder,
    private _firebaseService: FirebaseService,
    private _sessionService: SessionService
  ) {

  }

  public ngOnInit(): void{
    this.asyncWait = false;
    this.signUpForm = this._formGroup.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      phone: ['', Validators.required],
    });
    this.asyncWait = true;
    // return this._firebaseService.signOut();
}
  onSignUp(): void {
    console.log('work')
      this._firebaseService.signUpWithEmail(this.signUpModel)
        .then(() => this._sessionService.setUserData(this.signUpModel))
        .then(() =>this._firebaseService.setUserData(this.signUpModel))
        .then(() => console.log(this._firebaseService.currentUserId))
        .then(() => this.navCtrl.setRoot(TabsPage))
  }
}
