import { Injectable } from '@angular/core';

interface User {
  username: string;
  email: string;
  password: string;
  playlist: any[];
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly storageKey = 'users';
  private readonly sessionKey = 'session';

  register(username: string, email: string, password: string): boolean {
    const users = this.getUsers();
    const exists = users.some(user => user.username === username);

    if (exists) return false;

    users.push({ username, email, password, playlist: [] });
    localStorage.setItem(this.storageKey, JSON.stringify(users));
    localStorage.setItem(this.sessionKey, JSON.stringify({ username, playlist: [] }));
    return true;
  }

  login(username: string, password: string): boolean {
    const users = this.getUsers();
    const user = users.find(u => u.username === username && u.password === password);

    if (!user) return false;

    localStorage.setItem(this.sessionKey, JSON.stringify({ username: user.username, playlist: user.playlist }));
    return true;
  }

  logout(): void {
    localStorage.removeItem(this.sessionKey);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.sessionKey) !== null;
  }

  private getUsers(): User[] {
    const stored = localStorage.getItem(this.storageKey);
    return stored ? JSON.parse(stored) : [];
  }
}
