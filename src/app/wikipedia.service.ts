import { Injectable } from '@angular/core';
// import needed for making http requests inside of our application available to all different services and components and so on that we are creating
import { HttpClient } from '@angular/common/http';
import { pluck } from 'rxjs/operators';

//-----------------------------------------
// Example RxJs with Typescript
// import { Observable } from 'rxjs';
// import { pluck } from 'rxjs/operators';

// Create an interface
// interface Car {
//   year: number;
//   color: string;
//   running: boolean;
//   make: {
//     name: string;
//     dateCreated: number;
//   };
// }

//  create Observable
// Observable is a generic class (see generic class and functions from Typescript section)
// const observable = new Observable<Car>((observer) => {
//   observer.next({
//     year: 2000,
//     color: 'red',
//     running: true,
//     make: {
//       name: 'Toyota',
//       dateCreated: 1980,
//     },
//   });
// }).pipe(
//   pluck('make', 'name')

// );

// create Observer
// observable.subscribe((value) => {
//   console.log(value);
// });

//-------------------------------------------

interface WikipediaResponse {
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: number;
    }[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  // use Dependency Injection (injector/container) to inject the http client into the service by automatically creating an instance of HttpClient class / object
  constructor(private http: HttpClient) {}

  // function to search for term on the Wikipedia API using Wikipedia Service service
  public search(term: string) {
    // return 'I am Wikipidia search results';

    // this is going to make a GET request to the Wikipedia API using the http of the http client, which is annotated with an HttpClient type which will be provided
    // by the injector when we create the instance of the service in the app module, return the list of string values from the Wikipedia API
    // make a GET type request out to the Wikipedia API
    // This code snippet is a TypeScript function that searches for a given term on the Wikipedia API using a service called WikipediaService.
    // It makes a GET request to the Wikipedia API using the HttpClient provided by the injector. The function returns the list of string values from the Wikipedia API.
    // This is an RxJs example
    // this function returns an Observable (check RxJs section and examples)
    // get() function is a generic function (see generic class and functions from Typescript section)
    return this.http
      .get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          srsearch: term,
          origin: '*',
        },
      })
      .pipe(pluck('query', 'search'));
  }
}

// no need to instantiate the class / service ourselves the class to create the object
// Angular is taking care of that for us
// new WikipediaService();
