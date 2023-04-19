import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetComponent } from './set/set.component';
import { MapComponent } from './map/map.component';
import { ArrayComponent } from './array/array.component';
import { ThreadComponent } from './thread/thread.component';
import { UserDataComponent } from './user-data/user-data.component';

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
  {
    path: 'userData',
    component: UserDataComponent,
  },
  { path: 'thread', component: ThreadComponent, loadChildren: () => import('./thread/thread.module').then(m => m.ThreadModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
