import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-logout',
  templateUrl: './page-logout.component.html'
})
export class PageLogoutComponent implements OnInit {
  constructor(private authService:AuthService) {}
  
  ngOnInit(): void {
    this.authService.logout()
  }

  

}
