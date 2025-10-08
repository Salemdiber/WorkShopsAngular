import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventDataService } from '../../data-access/event-data.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  event: any;
  constructor(private route: ActivatedRoute, private eventData: EventDataService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.event = this.eventData.getEventById(id);
  }
}
