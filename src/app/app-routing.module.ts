import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {ClientComponent} from "./client/client.component";
import {AuthentificationGuard} from "./authentification.guard";
import { HotelComponent } from './hotel/hotel.component';
import {ReservationComponent} from "./services/reservation.component";

const routes: Routes = [
  { path : 'client' , component : ClientComponent , canActivate : [AuthentificationGuard] },
  { path : 'hotel' , component : HotelComponent , canActivate : [AuthentificationGuard] },
  { path : 'reservation' , component : ReservationComponent , canActivate : [AuthentificationGuard] },
  { path : 'login' , component : LoginComponent },
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
