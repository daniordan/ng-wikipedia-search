import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  // set up child -> parent communication using generic annotation syntax (check Typescript overview section)
  // use EventEmitter to trigger events that get sent back up to the parent component
  @Output() submitted = new EventEmitter<string>();
  term = '';

  onInput(event: Event) {
    this.term = (event.target as HTMLInputElement).value;
  }

  onFormSubmit(event: any) {
    // preventDefault() means prevent the browser from submitting the form
    event.preventDefault();
    // send the term back up to the parent component using the method.emit() on the EventEmitter object
    // this.submitted.emit(this.term);
    // send data up to a parent component without the back arrow,
    // when the constructor takes an instance of EventEmitter and its.emit() method is called in the children component (submit, autocomplete)

    this.submitted.emit(this.term);
  }
}
