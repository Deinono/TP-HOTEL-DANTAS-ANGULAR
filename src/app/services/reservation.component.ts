import {Component, OnInit, ViewChild} from '@angular/core';
import {Client} from "../classes/client";
import { Reservation } from '../classes/reservation';
import {ClientService} from "./client.service";
import {ReservationService} from "./reservation.service";
import {Hotel} from "../classes/hotel";
import {HotelService} from "./hotel.service";

@Component({
  selector: 'app-reservation',
  templateUrl: '../reservation/reservation.component.html',
  styleUrls: ['../reservation/reservation.component.css']
})
export class ReservationComponent implements OnInit {

  r : Reservation = new Reservation();
  reservations : Array<Reservation> = [];
  clients : Array<Client> = [];
  hotels : Array<Hotel> = [];
  @ViewChild( 'closebutton' ) closebuttonelement: any;
  success : boolean = false;
  error : boolean = false;
  search : String  = "" ;

  constructor(public rs : ReservationService, private hs : HotelService, private cs : ClientService) { }

  ngOnInit(): void {
    this.loadReservations();
    this.hs.loadHotels().subscribe(data => {
      this.hotels = data;
    });
    this.cs.loadClients().subscribe(data => {
      this.clients = data;
    });;
  }

  public loadReservations() : void {
    this.rs.loadReservations(this.search).subscribe(
      data => {
        this.reservations = data;
      }
    )
  }

  public delete(id?: number) : void {
    if(confirm("Êtes-vous sur ?")){
      this.rs.deleteReservation(id).subscribe(
        data => {
          this.loadReservations();
          this.success = true;
        }
      );
    }
  }

  resetForm(){
    this.error = false;
    this.success = false;
    this.r = new Reservation();
  }

  edit( id? : number ): void{
    this.rs.getReservation( id ).subscribe(
      data => {
        this.r = data;
        console.log(data);
      } ,
      error => {
        console.log( error )
        this.error = true;
      }
    );
  }

  submitForm() : void {

    if( this.r.id == undefined ){
      this.rs.addReservation( this.r ).subscribe(
        data => {
          console.log( data );
          this.closebuttonelement.nativeElement.click();
          this.loadReservations();
          this.success = true;
        }
      )
    } else {
      this.rs.editReservation( this.r ).subscribe(
        data => {
          //console.log( data );
          this.closebuttonelement.nativeElement.click();
          this.loadReservations();
          this.success = true;
        },
        error => {
          //console.log( error )
          this.error = true;
        }
      )
    }
    console.log( this.r );
  }

  checkClient( c1 : Client , c2 : Client ): boolean{
    return c1 != undefined && c2 != undefined && c1.id == c2.id;
  }

  checkHotel( h1 : Hotel , h2 : Hotel ): boolean{
    return h1 != undefined && h2 != undefined && h1.id == h2.id;
  }

}
