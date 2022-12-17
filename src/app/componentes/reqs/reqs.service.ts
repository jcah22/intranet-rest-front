import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import Swal from 'sweetalert2'
import { Reqs } from "./Reqs";

@Injectable()
export class ReqsService{

    private urlEndPoint : string ='http://localhost:8080/api/reqs';

    constructor(private http:HttpClient){}

    getReqs():Observable<Reqs[]>{

        return this.http.get(this.urlEndPoint).pipe(
           map( response => response as Reqs[]));

           Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })
    
      }

}