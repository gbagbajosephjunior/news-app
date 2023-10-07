import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class NewsService {
  private apiKey = '950afd7b5ec543239fb95938b78415b5'; 
  private apiUrl = 'https://newsapi.org/v2/everything';
  private apiUrl1 = `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${this.apiKey}`;
  private apiUrl2 = ' https://newsapi.org/v2/everything?q=apple&from=2023-10-05&to=2023-10-05&sortBy=popularity&apiKey=950afd7b5ec543239fb95938b78415b5';
  
  constructor(private http: HttpClient) {}

  searchNews(query: string): Observable<any> {
    const params = {
      q: query,
      apiKey: this.apiKey,
    };

    return this.http.get(this.apiUrl, { params });
  }

  getNews(): Observable<any> {
    return this.http.get(this.apiUrl1);
  };

  ivNewsData(): Observable<any> {
    return this.http.get(this.apiUrl2);
  }
}