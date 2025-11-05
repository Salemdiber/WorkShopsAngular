import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventdetailsComponent } from './pages/eventdetails/eventdetails.component';
import { ListEventsComponent } from './pages/list-events/list-events.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEventComponent } from './components/add-event/add-event.component';


@NgModule({
  declarations: [
    EventdetailsComponent,
    ListEventsComponent,
    EventCardComponent,
    SearchBarComponent,
    AddEventComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EventsModule { }
