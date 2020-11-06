import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  allArticlesUrl = 'https://api.webbytechexpert.com/devTest/api.php';
  articleUrl = 'https://api.webbytechexpert.com/devTest/api.php?id=';

  constructor(public http: HttpClient) { }

  getArticle(id): Observable<Article> {
    return this.http.get<Article>(this.articleUrl + id);
  }

  getAllArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.allArticlesUrl);
  }

  createArticle(article): Observable<Article> {
    return this.http.post<Article>(this.articleUrl, article);
  }

  editArticle(id, article): Observable<Article> {
    return this.http.put<Article>(this.articleUrl + id, article)
  }

  deleteArticle(id) {
    return this.http.delete(this.articleUrl);
  }

}
