import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoBoardRoutingModule } from './photo-board-routing.module';
import { PhotoBoardComponent } from './photo-board/photo-board.component';
import { PhotoFrameModule } from '../photo-frame/photo-frame.module';
import { PhotoBoardService } from '../../services/photo-board/photo-board.service';


@NgModule({
  declarations: [PhotoBoardComponent],
  imports: [
    CommonModule,
    PhotoBoardRoutingModule,
    PhotoFrameModule
  ],
  exports: [PhotoBoardComponent],
  providers: [PhotoBoardService]
})
export class PhotoBoardModule { }
