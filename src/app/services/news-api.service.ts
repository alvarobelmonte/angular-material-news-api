import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  constructor(private http: HttpClient) {}

  searchTopNews(params: any): Observable<any> {
    const URL =
      'https://newsapi.org/v2/top-headlines?country=' +
      params.country +
      '&category=' +
      params.category +
      '&apiKey=78505de479de4bda9045ed4269b6c1fa';
    return this.http.get(URL);
  }

  searchEverything(params: any): Observable<any> {
    const URL =
      'https://newsapi.org/v2/everything?q=' +
      params.query +
      '&language=' +
      params.language +
      '&apiKey=78505de479de4bda9045ed4269b6c1fa';
    return this.http.get(URL);
  }
}
