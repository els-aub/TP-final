import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
  query = '';
  isLoading = false;
  results: any[] = [];

  search() {
    this.isLoading = true;

    setTimeout(() => {
      this.results = [
        { id: 'abc1', title: 'Vidéo 1', thumbnail: 'https://via.placeholder.com/150' },
        { id: 'abc2', title: 'Vidéo 2', thumbnail: 'https://via.placeholder.com/150' },
        { id: 'abc3', title: 'Vidéo 3', thumbnail: 'https://via.placeholder.com/150' }
      ];
      this.isLoading = false;
    }, 1000);
  }

  addToPlaylist(video: any) {
    const session = localStorage.getItem('session');
    if (!session) return;

    const sessionData = JSON.parse(session);
    sessionData.playlist = sessionData.playlist || [];

    if (!sessionData.playlist.find((v: any) => v.id === video.id)) {
      sessionData.playlist.push(video);
      localStorage.setItem('session', JSON.stringify(sessionData));
    }
  }
}
