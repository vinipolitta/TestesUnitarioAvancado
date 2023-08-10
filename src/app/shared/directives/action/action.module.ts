import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActionDirectiveDirective } from './action-directive.directive';


@NgModule({
  declarations: [ActionDirectiveDirective],
  imports: [
    CommonModule,
  ],
  exports: [ActionDirectiveDirective],
})
export class ActionModule { }
