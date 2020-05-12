import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularJasperModule, ReportComponent } from 'angularjasper2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const jasperConfig = {
  server: 'Server Name',
  login: 'username',
  password: 'password'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularJasperModule.initializeApp(jasperConfig)
  ],
  providers: [ReportComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
