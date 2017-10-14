
/* We Import these Modules Because its mission to make some operation to the routeing process */ 
import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';



/* Importing Components */ 
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

/* Importing Guards From Services Folder To Use in the Route that We Want ot Guard */
import { AuthGuardService } from '../services/auth-guard.service';

export const router = [
    { path:''  , redirectTo:'home' , pathMatch:'full'},
    { path:'home', component:HomeComponent },
    { path:'login', component:LoginComponent },
    // Here We Use canActivate Property Array ==> It's Array because it can take many Guards , like check if logged in and check if he is an admin or not 
    { path:'dashboard', component:DashboardComponent, canActivate:[AuthGuardService] },
    /* Wild Card Route ==> If User Enter anything else that we don't handle in the router array in paths then it goes to the compoents we put its path in the redirectTo */ 
    { path:'**', redirectTo:'home'}
    ]


/* Exporting routes variable so we can use in the app.module.ts */ 
export const routes:ModuleWithProviders = RouterModule.forRoot(router);