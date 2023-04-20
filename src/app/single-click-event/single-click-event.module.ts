import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleClickEventRoutingModule } from './single-click-event-routing.module';
import { SingleClickEventComponent } from './single-click-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    SingleClickEventComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SingleClickEventRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
  ]
})
export class SingleClickEventModule { }
