import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatabaseService } from "./database.service"
import { HttpModule } from "@angular/http"
import { FormsModule } from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SnackingdojoComponent } from './snackingdojo/snackingdojo.component';
import { DetailsComponent } from './snackingdojo/details/details.component';
import { SearchPipe } from './search.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdDatepickerModule, MdNativeDateModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SnackingdojoComponent,
    DetailsComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdDatepickerModule,
    MdNativeDateModule

  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
