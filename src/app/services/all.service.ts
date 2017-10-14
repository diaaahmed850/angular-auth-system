import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
export class AllService {

  constructor(private http:Http) { }





  /* 
    Function Name : login(data)
    Function Args : data ==> Data the User Enters Like Username & Password
    Functionality : We make this Function to make a Post Request to the api to give this data and wait for its reponse to
                    see if he has acount or not
  
  */ 
  
  login(data) {

    /* 
      this.http.post() ==> Its a Function which takes two args ( Body , Headers )
      Args : 
          - Body : Must Be A Json , You have the choice to take every input and put it into array or pass an json object
                   like we did when we Pass ==> data.value
                    
    */ 

    return this.http.post('http://192.168.1.16:8000/token/',data).map(res => res.json());

  }


  /* 
    Function Name : storeToken(token)
    Function Args : token ==> the Response from server when the user is right ==> encrypted string we usually use JWT Tokens
    Functionality : We make this Function to Store Our token to our localStorage in the Browser so we can call it any Where
  
  */ 
  storeToken(token) {
      localStorage.setItem('token',token);
  }


  /* 
    Function Name : removeToken()
    Function Args :No Args
    Functionality : We make this Function to Remove Our token From our localStorage in the Browser To Logout User
  
  */ 

  removeToken() {
    localStorage.removeItem('token');
  }


  /* 
    Function Name : isLoggedIn()
    Function Args : No Args
    Functionality : We make this Function to Check if User logged in or not By checking the localStorage 
                  Note : 
                    - We Use This Function Mainly in Guards and in the Navbar Like we Did
  
  */ 
  isLoggedIn() {
    if(localStorage.getItem('token')) {

      return true;
    } else {
      return false;
    }

  }







}
