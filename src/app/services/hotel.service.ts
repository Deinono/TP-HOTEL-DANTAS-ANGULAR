import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {httpOptions} from "../variables";
import {HttpClient} from "@angular/common/http";
import {Hotel} from "../classes/hotel";

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor( private http : HttpClient) { }

  loadHotels( search?: String ): Observable<Hotel[]> {
    let searchCondition = ""

    if( search != undefined && search.length > 0 ){
      searchCondition = "?search="+search;
    }

    console.log("chargement des Hotels " + environment.apiUrl  + "hotels"+searchCondition );
    return this.http.get<Hotel[]>( environment.apiUrl  + "hotels"+searchCondition , httpOptions );
  }

  getHotel( id? : number ) : Observable<Hotel> {
    return this.http.get<Hotel>( environment.apiUrl  + "hotels/"+id , httpOptions );
  }

  addHotel( hotel : Hotel ) : Observable<Hotel> {
    return this.http.post<Hotel>( environment.apiUrl + "hotels" , hotel , httpOptions )
  }

  editHotel( hotel : Hotel ) : Observable<Hotel> {
    console.log("Objet appelé vers le backend")
    console.log(hotel);
    return this.http.put<Hotel>( environment.apiUrl + "hotels/"+hotel.id, hotel , httpOptions )
  }

  deleteHotel( id? : number ) : Observable<any> {
    return this.http.delete( environment.apiUrl + "hotels/"+id , httpOptions )
  }
}
