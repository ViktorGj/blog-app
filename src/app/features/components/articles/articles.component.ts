import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from 'src/app/core/services/articles.service';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'blog-articles',
  templateUrl: './articles.component.html'
})
export class ArticlesComponent implements OnInit {
  p: number = 1;
  articles: any[];
  id: string;

  constructor(
    private articlesService: ArticlesService,
    private router: Router) { }

  ngOnInit(): void {
    this.articles = this.articlesService.getAllArticles();
  }


  delete(id) {
    this.articlesService.deleteArticle(id);
    this.articles = this.articlesService.getAllArticles();
  }

  navigateTo(id) {
    this.router.navigate(['articles/create', { id: `${id}` }])
  }

}
