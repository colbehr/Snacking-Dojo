import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SnackingdojoComponent } from './snackingdojo/snackingdojo.component';
import { DetailsComponent } from './snackingdojo/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SnackingdojoComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
