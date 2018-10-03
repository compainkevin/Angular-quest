import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import { FormsModule } from '@angular/forms'; 

@NgModule({
	declarations: [
	  AppComponent,
	  EmailComponent
	],
imports: [BrowserModule,FormsModule],
   
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
