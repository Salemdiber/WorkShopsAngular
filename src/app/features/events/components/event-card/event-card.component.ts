import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '../../../../models/event';
import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css'
})
export class EventCardComponent {
  @Input() eventC!:Event
  @Input() dateTest!:Boolean;
 
  @Output() likes = new EventEmitter<Event>();



  likes_from_child(event: Event){
     this.likes.emit(event);
  }
}
