import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { ArticlesService } from './articles.service'
import { Article } from '../../models/article.model';

describe('ArticlesService', () => {
  let httpTestCtrl: HttpTestingController;
  let articlesService: ArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArticlesService]
    });
    httpTestCtrl = TestBed.inject(HttpTestingController);
    articlesService = TestBed.inject(ArticlesService);
  });

  afterEach(() => {
    httpTestCtrl.verify();
  })

  it('should retrieve all articles', () => {
    const testArticles: Article[] = [
      {
        id: '1',
        title: 'Article title 1',
        picture: 'picture url',
        description: 'article description',
        dateCreated: 'date created'
      },
      {
        id: '2',
        title: 'Article title 2',
        picture: 'picture url 2',
        description: 'article description 2',
        dateCreated: 'date created 2'
      },
      {
        id: '3',
        title: 'Article title 2',
        picture: 'picture url 3',
        description: 'article description 3',
        dateCreated: 'date created 3'
      },
    ]
    articlesService.getAllArticles().subscribe(articles => {
      expect(testArticles).toBe(articles, 'should check mocked data')
    })

    const req = httpTestCtrl.expectOne(articlesService.allArticlesUrl)
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    expect(req.request.method).toEqual('GET');
    req.flush(testArticles)
    httpTestCtrl.verify();
  });


  it('should retrieve single article', () => {
    const newArticle: Article = {
        id: '1',
        title: 'Article title 1',
        picture: 'picture url',
        description: 'article description',
        dateCreated: 'date created'
      }

      articlesService.getArticle('1').subscribe(article => {
      expect(newArticle).toBe(article, 'should return single article')
    })

    const req = httpTestCtrl.expectOne(articlesService.articleUrl + newArticle.id)
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    expect(req.request.method).toEqual('GET');
    req.flush(newArticle)
  });


  it('should add new article and return added article', () => {
    const newArticle: Article = {
        id: '1',
        title: 'Article title 1',
        picture: 'picture url',
        description: 'article description',
        dateCreated: 'date created'
      }

      articlesService.createArticle(newArticle).subscribe(article => {
      expect(newArticle).toBe(article, 'should return added article')
    })

    const req = httpTestCtrl.expectOne(articlesService.allArticlesUrl)
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    expect(req.request.method).toEqual('POST');
    req.flush(newArticle)
  });


  it('should update an article', () => {
    const newArticle: Article = {
        id: '1',
        title: 'Article title updated',
        picture: 'picture url updated',
        description: 'article description updated',
        dateCreated: 'date created updated'
      }

      articlesService.editArticle('1', newArticle).subscribe(article => {
      expect(newArticle).toBe(article, 'should return updated article')
    })

    const req = httpTestCtrl.expectOne(articlesService.articleUrl + newArticle.id)
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    expect(req.request.method).toEqual('PUT');
    req.flush(newArticle)
  });

  it('should remove an article', () => {
      articlesService.deleteArticle('1').subscribe(article => {
      expect(article).toBe('1', 'should return removed id')
    })

    const req = httpTestCtrl.expectOne(articlesService.articleUrl + '1')
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json');
    expect(req.request.method).toEqual('DELETE');
    req.flush('1')
  });


});
