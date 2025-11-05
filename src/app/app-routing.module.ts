import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Layout/home/home.component';
import { NotFoundComponent } from './Layout/not-found/not-found.component';
import { EventdetailsComponent } from './features/events/pages/eventdetails/eventdetails.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [

  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
 {path:"testUser", component:UserlistComponent},


   {path:'events', loadChildren:()=>import('./features/events/events.module').then(m=>m.EventsModule)},
   {path:'tickets', loadChildren:()=>import('./features/tickets/tickets.module').then(m=>m.TicketsModule)},
   {path:"users", loadChildren:()=>import('./features/users/users.module').then(m=>m.UsersModule)},
   {path:"feedback", loadChildren:()=>import('./features/feedback/feedback.module').then(m=>m.FeedbackModule)},
  { path: "**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
