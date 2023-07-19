import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input() person!: Person;
  @Output() deleteMe = new EventEmitter<string>();

  deletePerson() {
    this.deleteMe.emit(this.person.id);
  }
}
