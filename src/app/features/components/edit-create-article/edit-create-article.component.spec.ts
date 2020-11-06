import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCreateArticleComponent } from './edit-create-article.component';

describe('EditCreateArticleComponent', () => {
  let component: EditCreateArticleComponent;
  let fixture: ComponentFixture<EditCreateArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCreateArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCreateArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
