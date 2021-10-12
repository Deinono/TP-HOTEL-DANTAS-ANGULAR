import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../classes/client";
import {environment} from "../../environments/environment";
import {httpOptions} from "../variables";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor( private http : HttpClient ) { }

  loadClients( search?: String ): Observable<Client[]> {
    let searchCondition = ""

    if( search != undefined && search.length > 0 ){
      searchCondition = "?search="+search;
    }

    console.log("chargement des Clients " + environment.apiUrl  + "clients"+searchCondition );
    return this.http.get<Client[]>( environment.apiUrl  + "clients"+searchCondition , httpOptions );
  }

  getClient( id? : number ) : Observable<Client> {
    return this.http.get<Client>( environment.apiUrl  + "clients/"+id , httpOptions );
  }

  addClient( client : Client ) : Observable<Client> {
    return this.http.post<Client>( environment.apiUrl + "clients" , client , httpOptions )
  }

  editClient( client : Client ) : Observable<Client> {
    console.log("Objet appelé vers le backend")
    console.log(client);
    return this.http.put<Client>( environment.apiUrl + "clients/"+client.id, client , httpOptions )
  }

  deleteClient( id? : number ) : Observable<any> {
    return this.http.delete( environment.apiUrl + "clients/"+id , httpOptions )
  }

}
