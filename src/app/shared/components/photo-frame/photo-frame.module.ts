import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoFrameRoutingModule } from './photo-frame-routing.module';
import { PhotoFrameComponent } from './photo-frame/photo-frame.component';
import { LikeWidgetModule } from '../like-widget/like-widget.module';


@NgModule({
  declarations: [PhotoFrameComponent],
  imports: [
    CommonModule,
    PhotoFrameRoutingModule,
    LikeWidgetModule
  ],
  exports: [PhotoFrameComponent],
})
export class PhotoFrameModule { }
