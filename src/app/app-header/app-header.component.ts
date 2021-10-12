import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthentificationGuard} from "../authentification.guard";

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor( private router : Router, public guard : AuthentificationGuard) { }

  ngOnInit(): void {
  }

  onLogout() : void{
    sessionStorage.removeItem( "connectedUser" ) ;
    this.router.navigate(['login'])
  }

}
