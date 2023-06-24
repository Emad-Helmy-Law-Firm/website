import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ServiceCardComponent } from './ui-components/service-card/service-card.component';
import { PracticeAreasComponent } from './ui-components/practice-areas/practice-areas.component';
import { RoundedButtonComponent } from './ui-components/rounded-button/rounded-button.component';
import { OurClientsCarouselComponent } from './ui-components/our-clients-carousel/our-clients-carousel.component';
import { WhyChooseUsComponent } from './ui-components/why-choose-us/why-choose-us.component';
import { TestimonialsComponent } from './ui-components/testimonials/testimonials.component';
import { FaqsComponent } from './ui-components/faqs/faqs.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactUsComponent } from './ui-components/contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { OurTeamComponent } from './our-team/our-team.component';
import { EmpCardComponent } from './ui-components/emp-card/emp-card.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { EmadProfileComponent } from './emad-profile/emad-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSliderModule} from '@angular/material/slider';
import { PracitceAreasFixedComponent } from './ui-components/pracitce-areas-fixed/pracitce-areas-fixed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ServiceCardComponent,
    PracticeAreasComponent,
    RoundedButtonComponent,
    OurClientsCarouselComponent,
    WhyChooseUsComponent,
    TestimonialsComponent,
    FaqsComponent,
    ContactUsComponent,
    FooterComponent,
    OurTeamComponent,
    EmpCardComponent,
    AboutUsComponent,
    OurServicesComponent,
    EmadProfileComponent,
    PracitceAreasFixedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    MdbCollapseModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
