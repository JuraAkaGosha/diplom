import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';

import { BaseAuth } from "../pages/auth/auth.model";

@Injectable()
export class SessionService{

  constructor(private _session: Storage){

  }

  public setUserData(user: BaseAuth){
    console.log('user', user);
        this._session.set('user', {...user});
  }

  public getUserData(): Promise<BaseAuth>{
   return this._session.get('user');
  }

  public clearUserData(): Promise<BaseAuth>{
    return this._session.remove('user');
  }
}
