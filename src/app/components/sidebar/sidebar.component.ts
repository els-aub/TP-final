import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  get username(): string | null {
    const session = localStorage.getItem('session');
    return session ? JSON.parse(session).username : null;
  }

  get playlist(): any[] {
    const session = localStorage.getItem('session');
    return session ? JSON.parse(session).playlist || [] : [];
  }
}
