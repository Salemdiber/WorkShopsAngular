import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../../../../data-acess/event.service';
import { Event } from '../../../../models/event';

@Component({
  selector: 'app-eventdetails',
  templateUrl: './eventdetails.component.html',
  styleUrl: './eventdetails.component.css'
})
export class EventdetailsComponent {

  constructor( private actR: ActivatedRoute, private eventS:EventService) { }
  event!:Event;
  id!:number;
 ngOnInit(): void {

   this.actR.paramMap.subscribe(
    params => this.id = Number(params.get('param')));

    this.event = this.eventS.liste.find(e => e.id == this.id)!;

  }

 

}
