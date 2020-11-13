import { DatePipe, Location } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { ArticlesService } from 'src/app/core/services/articles.service';
import { Article } from 'src/app/models/article.model';
import { EditCreateArticleComponent } from './edit-create-article.component';
import { ActionTypeEnum } from 'src/app/models/action-type.enum';


fdescribe('EditCreateArticleComponent', () => {
  let component: EditCreateArticleComponent;
  let fixture: ComponentFixture<EditCreateArticleComponent>;
  let articleService: ArticlesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        EditCreateArticleComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        ArticlesService,
        DatePipe
      ]
    })
      .compileComponents();
    articleService = TestBed.inject(ArticlesService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCreateArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should be navigated to ""', () => {
    const URLpath = TestBed.inject(Location);
    expect(URLpath.path()).toBe('');
  })

  it('should create h3 element with title: Update Article', () => {
    component.action = ActionTypeEnum.Update;
    fixture.detectChanges();
    const h3El = fixture.debugElement.query(By.css('h3'));
    expect(h3El.nativeElement.textContent).toBe(ActionTypeEnum.Update);
  })

  it('should call editArticle service method', () => {
  const articlesServiceSpy = spyOn(articleService, 'editArticle').and.callThrough();
  const componentSpy = spyOn(component, 'saveOrUpdate').and.callThrough();

  expect(articlesServiceSpy).not.toHaveBeenCalled();
  expect(componentSpy).not.toHaveBeenCalled();

  const article: Article = {
    id: '1',
    title: 'Test update',
    picture: 'Test picture URL',
    description: 'Test description',
    dateCreated: '13-11-2020'
  }
  component.saveOrUpdate(article, article.id);

  expect(articlesServiceSpy).toHaveBeenCalledTimes(1);
  expect(componentSpy).toHaveBeenCalledTimes(1);
  })


});
