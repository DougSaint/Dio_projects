import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCoinsComponent } from './components/coins/list-coins/list-coins.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CoinsComponent } from './components/coins/coins.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { FilterPipe } from './components/coins/pipes/filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    ListCoinsComponent,
    HeaderComponent,
    FooterComponent,
    CoinsComponent,

],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule,
	Ng2SearchPipeModule
  ],
  providers: [CurrencyPipe,],
  bootstrap: [AppComponent]
})
export class AppModule { }
