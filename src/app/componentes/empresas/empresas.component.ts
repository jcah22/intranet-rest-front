import { Component, OnInit } from '@angular/core';
import { Empresa } from './Empresa';
import { EmpresaService } from './empresa.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  empresa: Empresa[] | undefined;



  constructor(private es : EmpresaService) { }


  ngOnInit(): void {

    this.es.getEmpresas().subscribe(
      empresa => this.empresa = empresa

      
    )

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Registros cargados correctamente!',
      showConfirmButton: false,
      timer: 2000
    })
   
  }

 

  

}
