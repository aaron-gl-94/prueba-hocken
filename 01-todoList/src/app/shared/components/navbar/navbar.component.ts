import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  constructor(private authService: AuthService) {
  }

  public btnLogout: boolean | null = false;

  ngOnInit(): void {
    this.btnLogout = this.authService.isLoggedIn;
  }
}
