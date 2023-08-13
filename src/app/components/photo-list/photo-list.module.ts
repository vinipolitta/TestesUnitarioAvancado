import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListRoutingModule } from './photo-list-routing.module';
import { PhotoBoardModule } from 'src/app/shared/components/photo-board/photo-board.module';
import { PhotoListComponent } from './photo-list/photo-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [PhotoListComponent],
  imports: [
    CommonModule,
    PhotoListRoutingModule,
    PhotoBoardModule,
    FontAwesomeModule
  ]
})
export class PhotoListModule { }
