import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article.model';
import { ArticlesService } from 'src/app/core/services/articles.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'blog-article-details',
  templateUrl: './article-details.component.html'
})
export class ArticleDetailsComponent implements OnInit {

  article$: Observable<Article>;
  id;

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.article$ = this.articlesService.getArticle(this.route.snapshot.paramMap.get('id'))
  }

  delete(id) {
    this.articlesService.deleteArticle(id);
    this.router.navigate(['articles']);
  }

}
