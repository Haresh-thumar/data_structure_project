import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectThreadComponent } from './subject-thread/subject-thread.component';
import { WebWorkersComponent } from './web-workers/web-workers.component';
import { BlockingUiComponent } from './blocking-ui/blocking-ui.component';

const routes: Routes = [
  {path: 'web-worker', component: WebWorkersComponent},
  {path: 'subject-thread', component: SubjectThreadComponent},
  {path: 'blocking-ui', component: BlockingUiComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreadRoutingModule { }
