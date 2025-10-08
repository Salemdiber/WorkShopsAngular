import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EventDataService {
  private events = [
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
      description: 'description event2',
      date: '2025-12-10',
      lieu: 'Tunis',
      prix: 500,
      organisateurId: 2,
      imageUrl: 'https://event2.com/event2.jpg',
      nbplaces: 10,
      nbrLike: 2
    }
  ];

  getEvents() {
    return this.events;
  }

  getEventById(id: number) {
    return this.events.find(e => e.id === id);
  }
}
