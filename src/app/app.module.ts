import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponentComponent } from './gallery-component/gallery-component.component';

import { VolunteeringProgramComponent } from './volunteering-program/volunteering-program.component';
import { InternsComponent } from './interns/interns.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DonationComponent } from './donation/donation.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponentComponent,
    
    VolunteeringProgramComponent,
    InternsComponent,
    AboutUsComponent,
    DonationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    RippleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
