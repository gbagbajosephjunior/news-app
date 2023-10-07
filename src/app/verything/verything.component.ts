import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';


@Component({
  selector: 'app-verything',
  templateUrl: './verything.component.html',
  styleUrls: ['./verything.component.scss']
})
export class VerythingComponent implements OnInit {
  newsData: any[] = [];
  ivNewsData: any[] = []

constructor(private newsService: NewsService){}

  ngOnInit(): void {
    this.newsService.getNews().subscribe((data: any) => {
      this.newsData = data.articles; 
    });

    this.newsService.getNews().subscribe((data: any) => {
      this.ivNewsData = data.articles; 
    });
  }

}
  
  
  


  

  



