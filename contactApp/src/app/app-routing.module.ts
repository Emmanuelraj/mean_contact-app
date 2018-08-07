import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import  {HomeComponent} from './home/home.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactCenterComponent } from './contact-center/contact-center.component';


const routes: Routes =
 [
   { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'contactList', component: ContactCenterComponent},
   {path : 'home', component: HomeComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
