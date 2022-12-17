import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresasComponent } from './componentes/empresas/empresas.component';
import { EmpresaService } from './componentes/empresas/empresa.service';
import { HeaderComponent } from './componentes/header/header.component';
import { ReqsComponent } from './componentes/reqs/reqs.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ReqsService } from './componentes/reqs/reqs.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpresasComponent,
    HeaderComponent,
    ReqsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmpresaService,ReqsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
