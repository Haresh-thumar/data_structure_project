import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreadRoutingModule } from './thread-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlockingUiComponent } from './blocking-ui/blocking-ui.component';


@NgModule({
  declarations: [
    BlockingUiComponent
  ],
  imports: [
    CommonModule,
    ThreadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ThreadModule { }
