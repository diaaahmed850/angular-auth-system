import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/* Components */ 
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';

/* Routes */ 
/*
 Note :
   - When You add a Router File to the app.module.ts , You Must Add it to the Imports array at the bottom
 */ 

import { routes } from './routing/app.router'; 




/* Services */ 
/* 
  Note : 
    - When You add a new Service , You must add it to the Providers array at the bottom too 
    - Also the Guards is considered as a Service so You must add too to Providers Array at the bottom
*/ 

// Services
import { AllService } from './services/all.service'

// Guards
import { AuthGuardService } from './services/auth-guard.service'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes

  ],
  providers: [
    AllService,
    AuthGuardService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
