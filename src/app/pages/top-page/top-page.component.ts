import { Component } from '@angular/core';
import { NewsApiService } from '../../services/news-api.service';

@Component({
  selector: 'app-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./top-page.component.css'],
})
export class TopPageComponent {
  results: any;
  loading: boolean = false;
  constructor(private apiService: NewsApiService) {}

  getNews(params: any) {
    this.loading = true;
    this.apiService.searchTopNews(params).subscribe(
      ({ articles }) => (this.results = articles),
      (err) => console.error('Observer got an error: ' + err),
      () => (this.loading = false)
    );
  }
}
