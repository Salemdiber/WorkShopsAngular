import { Component } from '@angular/core';
import { Event } from '../../../../models/event';
import { Router } from '@angular/router';
import { EventService } from '../../../../data-acess/event.service';
@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrl: './list-events.component.css'
})
export class ListEventsComponent {

searchTerm!:string;

  Eventlist:Event[]=[];

constructor(private R: Router, private eventS: EventService){}

ngOnInit(){
  this.Eventlist= this.eventS.liste
}
  increment_likes(event:Event){
    event.nbLikes+=1;
  }
  campare(event:Event) {
    return event.date < (new Date());
  }

  toggleAdd(){
    
  }

  showDetails(id:number){
      this.R.navigate(["events/details",id]);
  }
}
