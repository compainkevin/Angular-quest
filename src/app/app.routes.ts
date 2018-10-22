import {Routes} from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';

const ROUTES: Routes = [
{ path: '', component: EmailComponent},
  { path: 'sign-up', component: SignupComponent },
  { path: 'user-profil', component: EmailComponent},
];

export { ROUTES };