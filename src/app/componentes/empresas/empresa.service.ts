import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Empresa } from "./Empresa";



@Injectable()
export class EmpresaService{

    private urlEndPoint : string ='http://localhost:8080/api/empresas';

    constructor(private http:HttpClient){

    }

    getEmpresas():Observable<Empresa[]>{

        return this.http.get(this.urlEndPoint).pipe(
           map( response => response as Empresa[]));

         
    
      }

      

}