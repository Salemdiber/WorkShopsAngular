import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Event } from '../../../../models/event';
import { EventService } from '../../../../data-acess/event.service';
import { Router } from '@angular/router';
import { futurDateValidator } from '../../../../Shared/Validators/futur-date.validator';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {
  newevent!: any;
  eventForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern('^[a-zA-Z]*$')]),
    description: new FormControl('', [Validators.required, Validators.minLength(30)]),
    date: new FormControl('', [Validators.required, futurDateValidator(7)]),
    price: new FormControl(0, [Validators.required, Validators.pattern('^\\d+(\\.\\d+)?$')]),
    nbPlaces: new FormControl(1, [Validators.required, Validators.pattern('^[1-9][0-9]?$|^100$'), Validators.max(100)]),
    place: new FormControl('', Validators.required),
    imageUrl: new FormControl(''),
  });

  constructor(private eventS: EventService, private router: Router) {}

  get description() { return this.eventForm.get('description'); }
  get title() { return this.eventForm.get('title'); }
  get price() { return this.eventForm.get('price'); }
  get nbPlaces() { return this.eventForm.get('nbPlaces'); }

  add() {
    if (this.eventForm.invalid) {
      this.eventForm.markAllAsTouched();
      return;
    }

    const raw = this.eventForm.getRawValue();
    const newId = this.eventS.liste.length ? Math.max(...this.eventS.liste.map(e => e.id)) + 1 : 1;
    
    // Map form values to the project's Event model (which uses French property names in this repo)
    const eventToAdd: Event = {
      id: newId,
      titre: String(raw.title),
      description: String(raw.description),
      date: new Date(String(raw.date)),
      lieu: String(raw.place),
      prix: Number(raw.price),
      organisateurId: 1,
      imageUrl: String(raw.imageUrl || 'assets/images/event.png'),
      nbPlaces: Number(raw.nbPlaces),
      nbLikes: 0
    };
    this.eventS.liste.push(eventToAdd);
    this.newevent = eventToAdd;
    this.eventForm.reset({ price: 0, nbPlaces: 1 });
    console.log('Événement ajouté', eventToAdd);
    this.router.navigate(['/events']);
  }
}
