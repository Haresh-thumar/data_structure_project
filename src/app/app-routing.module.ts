import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetComponent } from './set/set.component';
import { MapComponent } from './map/map.component';
import { ArrayComponent } from './array/array.component';
import { ThreadComponent } from './thread/thread.component';
import { SingleClickEventComponent } from './single-click-event/single-click-event.component';
import { GetImageComponent } from './get-image/get-image.component';

const routes: Routes = [
  {
    path: 'set',
    component: SetComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'array',
    component: ArrayComponent,
  },
  { path: 'thread', component: ThreadComponent, loadChildren: () => import('./thread/thread.module').then(m => m.ThreadModule) },
  { path: 'singleClickEvent', component: SingleClickEventComponent, loadChildren: () => import('./single-click-event/single-click-event.module').then(m => m.SingleClickEventModule) },
  {
    path: 'getImage',
    component: GetImageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
