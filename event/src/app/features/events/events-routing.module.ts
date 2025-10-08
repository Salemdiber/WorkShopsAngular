import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEventsComponent } from './pages/list-events.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';

const routes: Routes = [
  { path: '', component: ListEventsComponent },
  { path: ':id', component: EventDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
