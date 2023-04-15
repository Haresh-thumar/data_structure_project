import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetComponent } from './set/set.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MapComponent } from './map/map.component';
import { ArrayComponent } from './array/array.component';
import { ThreadComponent } from './thread/thread.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebWorkersComponent } from './thread/web-workers/web-workers.component';
import { SubjectThreadComponent } from './thread/subject-thread/subject-thread.component';


@NgModule({
  declarations: [
    AppComponent,
    SetComponent,
    MapComponent,
    ArrayComponent,
    ThreadComponent,
    WebWorkersComponent,
    SubjectThreadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
