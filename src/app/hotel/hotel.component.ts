import {Component, OnInit, ViewChild} from '@angular/core';
import {Client} from "../classes/client";
import {ClientService} from "../services/client.service";
import {Hotel} from "../classes/hotel";
import {HotelService} from "../services/hotel.service";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  h : Hotel = new Hotel();
  hotels : Array<Hotel> = [];
  @ViewChild( 'closebutton' ) closebuttonelement: any;
  success : boolean = false;
  error : boolean = false;
  search : String  = "" ;

  constructor(public hs : HotelService) { }

  ngOnInit(): void {
    this.loadHotels();
  }

  public loadHotels() : void {
    this.hs.loadHotels(this.search).subscribe(
      data => {
        this.hotels = data;
      }
    )
  }

  public delete(id?: number) : void {
    if(confirm("Êtes-vous sur ?")){
      this.hs.deleteHotel(id).subscribe(
        data => {
          this.loadHotels();
          this.success = true;
        }
      );
    }
  }

  resetForm(){
    this.error = false;
    this.success = false;
    this.h = new Hotel();
  }

  edit( id? : number ): void{
    this.hs.getHotel( id ).subscribe(
      data => {
        this.h = data;
        console.log(data);
      } ,
      error => {
        console.log( error )
        this.error = true;
      }
    );
  }

  submitForm() : void {

    if( this.h.id == undefined ){
      this.hs.addHotel(this.h).subscribe(
        data => {
          console.log( data );
          this.closebuttonelement.nativeElement.click();
          this.loadHotels();
          this.success = true;
        }
      )
    } else {
      this.hs.editHotel( this.h ).subscribe(
        data => {
          //console.log( data );
          this.closebuttonelement.nativeElement.click();
          this.loadHotels();
          this.success = true;
        },
        error => {
          //console.log( error )
          this.error = true;
        }
      )
    }
    console.log( this.h );
  }
}
