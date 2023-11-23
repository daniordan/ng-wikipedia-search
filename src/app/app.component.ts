import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  pages: any = [];

  // This code defines a TypeScript class called AppComponent. It has a constructor that takes an instance of the WikipediaService class as a parameter. The onTerm method receives a string parameter called term and it calls the search method of the wikipedia object to perform a search based on the provided term.
  // constructor gets called automatically whenever an instance of AppComponent is created
  // We don't have anything to write in the body of the constructor, so empty braces
  // 'wikipedia' will be added as a 'private' property automatically to the instance of the App component
  // 'wikipedia' will be of type 'Instance of WikipediaService'
  constructor(private wikipedia: WikipediaService) {}

  // communicate term from child to parent component
  // This code snippet defines a function called onTerm that takes a string parameter called term. Inside the function, it performs a search operation using the term as a parameter for the search method of the wikipedia object.
  onTerm(term: string) {
    // console.log('I am the app and here is the term: ' + term);
    // const results = this.wikipedia.search(term);
    // console.log(results);

    // This code snippet calls the search method of the wikipedia object with the term parameter. It then subscribes to the response and logs it to the console.
    // This is an RxJs example
    this.wikipedia.search(term).subscribe((pages) => {
      // console.log(response);
      this.pages = pages;
    }); // wikipidia search retrieves an Observable which will emit events as soon as it retrieves some date from wikipedia API and subscribe () passes the Observer and the function subscribe() will be called every time the Observable emits any value (in our case the value is the entire response from wiki API) (check RxJs section and examples)
  }
}
