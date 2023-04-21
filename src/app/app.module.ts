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
import { HttpClientModule } from '@angular/common/http';
import { GetImageComponent } from './get-image/get-image.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    AppComponent,
    SetComponent,
    MapComponent,
    ArrayComponent,
    ThreadComponent,
    WebWorkersComponent,
    SubjectThreadComponent,
    GetImageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
