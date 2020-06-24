import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonAddComponent } from './components/boton-add/boton-add.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { VisorComponent } from './components/visor/visor.component';
import { DelComponent } from './components/del/del.component';
import { BotonDelComponent } from './components/boton-del/boton-del.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonAddComponent,
    FormularioComponent,
    VisorComponent,
    DelComponent,
    BotonDelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
