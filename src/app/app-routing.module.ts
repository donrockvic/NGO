import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../app/home/home.component'
import {VolunteeringProgramComponent} from '../app/volunteering-program/volunteering-program.component'
import {InternsComponent} from '../app/interns/interns.component';
import {AboutUsComponent} from '../app/about-us/about-us.component'
import {DonationComponent} from '../app/donation/donation.component'
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'volunteers',component:VolunteeringProgramComponent},
  {path:'interns',component:InternsComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'donate-now',component:DonationComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
