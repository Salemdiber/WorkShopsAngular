import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListEventComponent } from './layout/list-event/list-event.component';
import { HomeComponent } from './layout/home/home.component';
import { NotFoundComponent } from './layout/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'events', loadChildren: () => import('./features/events/events.module').then(m => m.EventsModule) },
  { path: 'tickets', loadChildren: () => import('./features/tickets/tickets.module').then(m => m.TicketsModule) },
  { path: 'feedback', loadChildren: () => import('./features/feedback/feedback.module').then(m => m.FeedbackModule) },
  { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
