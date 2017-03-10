import { Component, OnInit } from '@angular/core';
import {RankingServiceService} from './ranking-service.service';
import * as io from 'socket.io-client';
@Component({
  selector: 'lista-equipos',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[RankingServiceService]
})
export class AppComponent implements OnInit {
  equipos =[];
  title = 'Liga de Futbol Santander';
  socket = null;

 constructor (private ranking:RankingServiceService){}

 ngOnInit(){

   this.socket = io('http://localhost:3000');
   this.socket.on('message',function(msg){
     var msj = msg;
   document.getElementById('mensaje').innerHTML = msj;
   });
   this.ranking.getEquipos().subscribe(response=>{
     this.equipos = response
   });
    console.log(this.ranking.getEquipos().subscribe(response=>this.equipos = response));
 }


}
