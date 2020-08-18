import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDestinosComponent } from './lista-destinos/lista-destinos.component';
import { DestinoViajeComponent } from './destino-viaje/destino-viaje.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDestinosComponent,
    DestinoViajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
