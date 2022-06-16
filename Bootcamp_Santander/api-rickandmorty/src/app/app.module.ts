import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CharactersComponent } from './shareds/characters/characters.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
