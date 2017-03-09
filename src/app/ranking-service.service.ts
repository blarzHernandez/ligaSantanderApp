import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
@Injectable()
export class RankingServiceService {
  //Array con equipos
  public equipos=[];
  private APIurl:string = 'http://localhost:3000/';

  //Definimos constructor
  constructor(private http:Http) {}
//Obtenemos los equipos
  getEquipos(){

    this.equipos = [
        {id:1,nombre:"Barcelona",puntos:56},
        {id:2,nombre: "Real Madrid", puntos: 20},
        {id:3,nombre: "Atletico Madrid", puntos: 10}
      ];

    return this.http.get( this.APIurl + 'api/ranking')
    .map(res=>res.json());





    //return this.equipos;
  }



}
