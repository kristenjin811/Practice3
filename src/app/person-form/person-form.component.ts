import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Person } from '../person.model';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit{
  @Output() addPersonEvent = new EventEmitter<Person>();

  personForm = new FormGroup({
    id: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  addPerson() {
    const newPerson = new Person(
      this.personForm.get('id')?.value || '',
      this.personForm.get('firstName')?.value || '',
      this.personForm.get('lastName')?.value || '',
    );
    // Here you need to implement how the newPerson is added to the people array
    this.addPersonEvent.emit(newPerson);
    this.personForm.reset();
  }

  ngOnInit(): void { }
}
