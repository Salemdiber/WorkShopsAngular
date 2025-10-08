import { Component } from '@angular/core';

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrl: './list-event.component.css'
})
export class ListEventComponent {
  events = [
    {
      id: 1,
      titre: 'event1',
      description: 'description event1',
      date: '2025-2-2',
      lieu: 'Ariana',
      prix: 50,
      organisateurId: 1,
      imageUrl: 'https://event1.com/event1.jpg',
      nbplaces: 100,
      nbrLike: 10
    },
    {
      id: 2,
      titre: 'event2',
      description: 'description event1',
      date: '2025-12-10',
      lieu: 'Ariana',
      prix: 500,
      organisateurId: 2,
      imageUrl: 'https://event2.com/event2.jpg',
      nbplaces: 10,
      nbrLike: 2
    },
  ];
    increment_like(event: any) {
        event.nbrLike++;
    }
    isExpired(event: any): boolean {
      const today = new Date();
      const eventDate = new Date(event.date);
      return eventDate < today;
    }
  searchTerm: string = '';
}
