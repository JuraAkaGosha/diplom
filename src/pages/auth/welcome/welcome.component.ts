import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignInComponent } from "../sign-in/sign-in.component";
import { SignUpComponent } from "../sign-up/sign-up.component";



@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomeComponent implements OnInit{

  constructor(
    public navCtrl: NavController,
  ) {

  }

  public ngOnInit(): void{

  }
  public logIn(){
    this.navCtrl.push(SignInComponent);
  }

  public signUp(){
    this.navCtrl.push(SignUpComponent);
  }

}

