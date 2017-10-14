import { Component, OnInit } from '@angular/core';
import { AllService } from '../../services/all.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private all:AllService) { }

  ngOnInit() {
  }


  logout() {

    this.all.removeToken();

  }

}
