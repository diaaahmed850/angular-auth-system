import { Component, OnInit } from '@angular/core';
import { AllService } from '../../services/all.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private all:AllService,private router:Router) { }

  ngOnInit() {
  }


  /*
    Function Name : submitForm(data)
    Function Args : data ==> it the NgForm Object which you saw in the console which has a lot of properties on of them is value
    Functionality : To Submit form and send its input values to the AllServices
  
   */
  submitForm(data) {
      this.all.login(data.value).subscribe(res => {
          // We check if token os true or not
          if(res.token) {
            // If true : ==> We store token by Function StoreToken() Which is Implementd in the AllService (all.service.ts)
              this.all.storeToken(res.token);
            // Then We Navigate to the dashboard
              this.router.navigate(['/dashboard']);
          }
    })

  }

}
