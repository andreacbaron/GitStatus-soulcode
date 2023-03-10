import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './views/login/conf/login.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './views/home/config/home.module';
import { PdfModule } from './views/pdf/config/pdf.module';
import { DetalhesModule } from './views/detalhes/config/detalhes.module';





@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    HomeModule,
    PdfModule,
    DetalhesModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
