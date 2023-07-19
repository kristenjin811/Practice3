import { Component } from '@angular/core';
import { Person } from './person.model';
import * as data from './people.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  people: Person[] = (data as any).default; // This will contain the array of people

  deletePerson(id: string) {
    this.people = this.people.filter(person => person.id !== id);
  }
}
