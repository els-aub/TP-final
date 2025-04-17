import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) { }

  logout() {
    localStorage.removeItem('session');
    this.router.navigate(['/auth/login']);
  }

  isLogged(): boolean {
    return localStorage.getItem('session') !== null;
  }
}
