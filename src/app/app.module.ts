import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import { FormsModule } from '@angular/forms'; 
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import {ROUTES} from './app.routes';

@NgModule({
	declarations: [
	  AppComponent,
	  EmailComponent,
		MenuComponent,
		SignupComponent
	],
imports: [BrowserModule,
	FormsModule,
	RouterModule.forRoot(ROUTES)
],
   
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
