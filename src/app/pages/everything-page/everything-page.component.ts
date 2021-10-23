import { Component } from '@angular/core';
import { NewsApiService } from 'src/app/services/news-api.service';

@Component({
  selector: 'app-everything-page',
  templateUrl: './everything-page.component.html',
  styleUrls: ['./everything-page.component.css'],
})
export class EverythingPageComponent {
  results: any;
  loading: boolean = false;

  constructor(private apiService: NewsApiService) {}

  getNews(params: any) {
    this.loading = true;
    this.apiService.searchEverything(params).subscribe(
      ({ articles }) => (this.results = articles),
      (err) => console.error('Observer got an error: ' + err),
      () => (this.loading = false)
    );
  }
}
