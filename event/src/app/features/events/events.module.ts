import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events.component';
import { EventDetailComponent } from './pages/event-detail/event-detail.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ListEventsComponent } from './pages/list-events.component';
import { EventDataService } from './data-access/event-data.service';

@NgModule({
  declarations: [
    EventsComponent,
    EventDetailComponent,
    EventCardComponent,
    SearchBarComponent,
    ListEventsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule
  ],
  providers: [EventDataService]
})
export class EventsModule { }
