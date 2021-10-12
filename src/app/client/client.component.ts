import { Component, OnInit, ViewChild } from '@angular/core';
import {Client} from "../classes/client";
import {ClientService} from "../services/client.service";


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  c : Client = new Client();
  clients : Array<Client> = [];
  @ViewChild( 'closebutton' ) closebuttonelement: any;
  success : boolean = false;
  error : boolean = false;
  search : String  = "" ;

  constructor(public cs : ClientService) { }

  ngOnInit(): void {
    this.loadClients();
  }

  public loadClients() : void {
    this.cs.loadClients(this.search).subscribe(
      data => {
        this.clients = data;
      }
    )
  }

  public delete(id?: number) : void {
    if(confirm("Êtes-vous sur ?")){
      this.cs.deleteClient(id).subscribe(
        data => {
          this.loadClients();
          this.success = true;
        }
        );
    }
  }

  resetForm(){
  this.error = false;
  this.success = false;
  this.c = new Client();
  }

  edit( id? : number ): void{
    this.cs.getClient( id ).subscribe(
      data => {
        this.c = data;
        console.log(data);
      } ,
      error => {
        console.log( error )
        this.error = true;
      }
    );
  }

  submitForm() : void {

    if( this.c.id == undefined ){
    this.cs.addClient( this.c ).subscribe(
      data => {
        console.log( data );
        this.closebuttonelement.nativeElement.click();
        this.loadClients();
        this.success = true;
      }
    )
    } else {
      this.cs.editClient( this.c ).subscribe(
        data => {
          //console.log( data );
          this.closebuttonelement.nativeElement.click();
          this.loadClients();
          this.success = true;
        },
        error => {
          //console.log( error )
          this.error = true;
        }
      )
    }
    console.log( this.c );
  }
}
