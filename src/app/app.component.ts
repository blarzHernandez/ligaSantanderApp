import { Component, OnInit } from '@angular/core';
import {RankingServiceService} from './ranking-service.service';

@Component({
  selector: 'lista-equipos',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[RankingServiceService]
})
export class AppComponent implements OnInit {
  equipos =[];
  title = 'Liga de Futbol Santander';


 constructor (private ranking:RankingServiceService){


 }

 ngOnInit(){
   this.ranking.getEquipos().subscribe(response=>{
     this.equipos = response
   });
    console.log(this.ranking.getEquipos().subscribe(response=>this.equipos = response));
 }


}
