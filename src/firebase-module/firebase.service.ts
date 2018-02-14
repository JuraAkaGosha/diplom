import { Injectable } from "@angular/core";
import { Firebase } from "@ionic-native/firebase";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { AngularFireDatabase, AngularFireList, AngularFireObject, QueryFn } from "angularfire2/database";
import * as firebase from 'firebase/app';
import { BaseAuth, SignUpModel } from "../pages/auth/auth.model";

@Injectable()
export class FirebaseService{

  user: Observable<any>;
  items: Observable<any>;
  authState: any = null;
  msgVal: string = '';

  constructor(private _firebase: Firebase,private afAuth: AngularFireAuth, public af: AngularFireDatabase){
    this.afAuth.authState.subscribe((auth) => {
      this.authState = auth
    });
  }

  get isUserAnonymousLoggedIn(): boolean {
    return (this.authState !== null) ? this.authState.isAnonymous : false
  }

  public getToken(){
    console.log('here');
    this.items = this.af.list('users').valueChanges();
    this.items.subscribe(res => console.log(res));
  }

  get currentUserId(): string {
    return (this.authState !== null) ? this.authState.uid : ''
  }

  get currentUserName(): string {
    return this.authState['email']
  }

  get currentUser(): any {
    return (this.authState !== null) ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) {
      return true
    } else {
      return false
    }
  }
  public loginWithEmail(user: BaseAuth) {
    console.log('login', user);
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then((user) => {
        this.authState = user
      });
  }

 public signUpWithEmail(user: BaseAuth) {
    console.log(11, user);
    return this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((user) => {
        console.log('ssss');
        this.authState = {...user}
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  public signOut(): Promise<void> {
    return this.afAuth.auth.signOut();
  }

  public setUserData(user: SignUpModel){
    const newUser: SignUpModel = {...user}
    delete newUser.password;
    console.log(this.currentUserId, 'uid');
    return this.af.list('users').update(this.currentUserId, newUser);
  }

  public getUserData(): AngularFireObject<SignUpModel>{
    console.log(`/users/${this.currentUserId}`);
    
    return this.af.object(`/users/${this.currentUserId}`);
  }
}
