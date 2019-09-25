import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { AppCarouselComponent } from './app-carousel/app-carousel.component';
import { AppSectionComponent } from './app-section/app-section.component';
import { AppCardComponent } from './app-card/app-card.component';
import { AppFourcardsComponent } from './app-fourcards/app-fourcards.component';
import { AppSectiontwoComponent } from './app-sectiontwo/app-sectiontwo.component';
import { AppContactComponent } from './app-contact/app-contact.component';
import { SystemsComponent } from './systems/systems.component';
import { EstateComponent } from './estate/estate.component';
import { CarouselNormalComponent } from './carousel-normal/carousel-normal.component';
import { ReferencesComponent } from './references/references.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { InvestComponent } from './invest/invest.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AppCarouselComponent,
    AppSectionComponent,
    AppCardComponent,
    AppFourcardsComponent,
    AppSectiontwoComponent,
    AppContactComponent,
    SystemsComponent,
    EstateComponent,
    CarouselNormalComponent,
    ReferencesComponent,
    KontaktComponent,
    InvestComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({apiKey: 
      'AIzaSyCVpzkCXXZrZFTSloNMZuSQ-ksAKIfhirM'}
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
