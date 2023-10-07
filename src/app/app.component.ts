import { Component } from '@angular/core';
import { NewsService } from './news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news-web';

  query = '';
  newsData: any[] = [];

  constructor(private newsService: NewsService) {}

  searchNews() {
    if (this.query!== '') {
      this.newsService.searchNews(this.query).subscribe((data: any) => {
        this.newsData = data.articles;
      });
    }
  }
}
