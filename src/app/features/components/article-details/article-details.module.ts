import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleDetailsRoutingModule } from './article-details-routing.module';
import { ArticleDetailsComponent } from './article-details.component';


@NgModule({
  declarations: [ArticleDetailsComponent],
  imports: [
    ArticleDetailsRoutingModule,
    CommonModule
  ]
})
export class ArticleDetailsModule { }
