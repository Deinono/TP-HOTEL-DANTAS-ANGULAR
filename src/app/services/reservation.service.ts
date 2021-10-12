import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Hotel} from "../classes/hotel";
import {environment} from "../../environments/environment";
import {httpOptions} from "../variables";
import {Reservation} from "../classes/reservation";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor( private http : HttpClient) { }

  loadReservations( search?: String ): Observable<Reservation[]> {
    let searchCondition = ""

    if( search != undefined && search.length > 0 ){
      searchCondition = "?search="+search;
    }

    console.log("chargement des Reservations " + environment.apiUrl  + "reservations"+searchCondition );
    return this.http.get<Reservation[]>( environment.apiUrl  + "reservations"+searchCondition , httpOptions );
  }

  getReservation( id? : number ) : Observable<Reservation> {
    return this.http.get<Reservation>( environment.apiUrl  + "reservations/"+id , httpOptions );
  }

  addReservation( reservation : Reservation ) : Observable<Reservation> {
    return this.http.post<Reservation>( environment.apiUrl + "reservations" , reservation , httpOptions )
  }

  editReservation( reservation : Reservation ) : Observable<Reservation> {
    console.log("Objet appelé vers le backend")
    console.log(reservation);
    return this.http.put<Reservation>( environment.apiUrl + "reservations/"+reservation.id, reservation , httpOptions )
  }

  deleteReservation( id? : number ) : Observable<any> {
    return this.http.delete( environment.apiUrl + "reservations/"+id , httpOptions )
  }
}
