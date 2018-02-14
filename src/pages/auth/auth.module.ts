
import { ErrorHandler, NgModule } from "@angular/core";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { IonicModule } from "ionic-angular";
import { ReactiveFormsModule } from "@angular/forms";
import { SignInComponent } from "./sign-in/sign-in.component";
import { WelcomeComponent } from "./welcome/welcome.component";


@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    WelcomeComponent
  ],
  imports: [
    IonicModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    SignUpComponent,
    SignInComponent,
    WelcomeComponent
  ],
  providers: [

  ]
})
export class AuthModule {}
