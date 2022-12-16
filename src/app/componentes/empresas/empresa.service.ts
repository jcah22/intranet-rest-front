import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Empresa } from "./Empresa";
import Swal from 'sweetalert2'


@Injectable()
export class EmpresaService{

    private urlEndPoint : string ='http://localhost:8080/api/empresas/';

    constructor(private http:HttpClient){

    }

    getEmpresas():Observable<Empresa[]>{

        return this.http.get(this.urlEndPoint).pipe(
           map( response => response as Empresa[]));

           Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    
      }

      

}