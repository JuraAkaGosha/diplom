import { NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';
import { SessionService } from "./session.service";



@NgModule({
  imports: [
    IonicStorageModule.forRoot()
  ],
  providers: [
    SessionService
  ]
})
export class SessionModule {}
