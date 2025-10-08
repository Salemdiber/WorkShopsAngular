import { Component } from '@angular/core';
import { EventDataService } from '../data-access/event-data.service';

@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.css']
})
export class ListEventsComponent {
  events: any[] = [];
  constructor(private eventData: EventDataService) {
    this.events = this.eventData.getEvents();
  }
}
