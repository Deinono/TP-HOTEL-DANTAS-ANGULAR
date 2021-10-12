import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientComponent } from './client/client.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HotelComponent } from './hotel/hotel.component';
import { ReservationComponent } from './services/reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    FooterComponent,
    ClientComponent,
    LoginComponent,
    HotelComponent,
    ReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
