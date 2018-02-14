import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FirebaseService } from "../../../firebase-module/firebase.service";
import { SessionService } from "../../../session/session.service";
import { WelcomeComponent } from "../../auth/welcome/welcome.component";
import { NavController } from "ionic-angular";

@Component({
  selector: 'general-header',
  templateUrl: 'general-header.html'
})
export class GeneralHeaderComponent {

  @Input() public title: string;
  @Output() public onLogOut: EventEmitter<string>;

  constructor(public navCtrl: NavController,
              private _firebaseService: FirebaseService, private _sessionService: SessionService) {

  }

  public logOut() {
    this.onLogOut.emit('exit');
    this._firebaseService.signOut()
      .then(() => this._sessionService.clearUserData())
      .then(() => this.navCtrl.push(WelcomeComponent));
  }
}
