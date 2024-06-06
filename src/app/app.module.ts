import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ListComponent } from './ejercicioLista/list/list.component';
import { TaskComponent } from './ejercicioLista/task/task.component';
import { FormComponent } from './ejercicioLista/form/form.component';
import { FormsModule } from '@angular/forms';
import { FrutaComponentFruta } from './ejercicoFrutas/fruta/fruta.component';
import { ListaComponentFruta } from './ejercicoFrutas/lista/lista.component';
import { FormComponentFruta } from './ejercicoFrutas/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TaskComponent,
    FormComponent,
    FormComponentFruta,
    FrutaComponentFruta,
    ListaComponentFruta
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
