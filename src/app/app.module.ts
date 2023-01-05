import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { footer } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    footer,
  
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule // Modulo para fazer requisições HTTP dentro do Angular
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

