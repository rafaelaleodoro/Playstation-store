import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarraComponent } from './components/menu-barra/menu-barra.component';
import { CardRotuloComponent } from './components/card/card-rotulo/card-rotulo.component';
import { CardPrecoComponent } from './components/card/card-preco/card-preco.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MenuBarraComponent,
    CardRotuloComponent,
    CardPrecoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
