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

  constructor(
    private articlesService: ArticlesService,
    private router: Router) { }

  ngOnInit(): void {
    this.articles = this.articlesService.getAllArticles();
  }


  add() {
    let article = {
      title: 'first article',
      picture: 'https://eslpapers.com/wp-content/uploads/edd/2019/08/writing-guide.jpg',
      description: 'description of the article'
    }
    this.articlesService.createArticle(article)
    this.articles = this.articlesService.getAllArticles();
  }

  delete(id) {
    this.articlesService.deleteArticle(id);
    this.articles = this.articlesService.getAllArticles();
  }

  // update(id) {
  //   let newArticle = {
  //     title: 'updated title',
  //     picture: 'updated picture',
  //     description: 'updated description'
  //   }
  //   this.articlesService.editArticle(id, newArticle)
  //   this.articles = this.articlesService.getAllArticles();
  // }

  navigateTo(id) {
    this.router.navigate(['articles/create', { id: `${id}` }])
  }

}
