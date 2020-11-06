import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/core/services/articles.service';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'blog-home-page',
  templateUrl: './home-page.component.html'
})
export class HomePageComponent implements OnInit {

  constructor(private articlesService: ArticlesService) { }
  articles: Article[];

  ngOnInit(): void {
    this.articlesService.getAllArticles()
      .subscribe(list => this.articles = list);
  }

}
