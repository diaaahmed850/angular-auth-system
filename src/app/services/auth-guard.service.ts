import { Injectable } from '@angular/core';


/*

  -  We Import CanActivate Module Which has a mission to guard our Route
  -  We Call CanActivate  Because its Similar to the name of the canActivate in the router array   
*/ 
import { CanActivate , Router } from '@angular/router';


/* 
  - We Import AllService So we can Access the isLoggedIn Function
 */ 
import { AllService } from './all.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private all:AllService,private router:Router) { }





  /* 
    canActivate() :
                - it Returns true or false base on what I return then if False doesn't navigate to the route
                - it also apply any function or processes that we give after or before returning
  */ 
  canActivate() {

    /* Here We User isLoggedIn() Function From AllServices based on what it returns I return true or false */ 
    if(this.all.isLoggedIn()) {

      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }

  }

}
