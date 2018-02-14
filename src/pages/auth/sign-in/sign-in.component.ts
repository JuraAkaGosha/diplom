import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BaseAuth } from "../auth.model";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from "../../../firebase-module/firebase.service";
import { TabsPage } from "../../tabs/tabs";
import { SessionService } from "../../../session/session.service";

@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html'
})
export class SignInComponent implements OnInit{

  public signInModel: BaseAuth = {
    email: '',
    password: ''
};
  public signInForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    private _formGroup: FormBuilder,
    private _firebaseService: FirebaseService,
    private _sessionService: SessionService
  ) {

  }

  public ngOnInit(): void{
    this.signInForm = this._formGroup.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
    // return this._firebaseService.signOut();
}
  public onSignIn(): void {
    console.log('login')
      this._firebaseService.loginWithEmail(this.signInModel)
        .then(() => this._sessionService.setUserData(this.signInModel))
        .then(() => this.navCtrl.setRoot(TabsPage))
    // if (this.validateForm(this.email, this.password)) {
    //   this.authService.signUpWithEmail(this.email, this.password)
    //     .then(() => {
    //       this.router.navigate(['/user'])
    //     }).catch(_error => {
    //     this.error = _error
    //     this.router.navigate(['/'])
    //   })
    // }
  }
}
