// Fake Online REST API for Testing and Prototyping
// https://jsonplaceholder.typicode.com/

import { Observable, Subscription, interval, timer, from, of, throwError } from "rxjs";
import { map, retryWhen, delayWhen, tap, catchError } from 'rxjs/operators';
// fetch is the default function in node-fetch. Needed since node doesn't support fetch api.
import fetch from 'node-fetch'

// RxJS offers a number of functions that can be used to create new observables. 
// These functions can simplify the process of creating observables from things such as 
// - events
// - timers
// - promises, and so on.

// Demo 7-1 - Create an observable from a promise
// "from" and "of" are examples of creation functions which create an observable. 
// const data = from(fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()));
// // Subscribe to begin listening for async result
// data.subscribe({
//   next(response) { console.log(response) },
//   error(err) { console.error('Error: ' + err); },
//   complete() { console.log('Completed'); }
// });

// Demo 7-2 - 'of' creation funtion emits each of its arguments into the stream
// If we don't use the spread operator then the whole array will be treated as a single input
// It  calls the complete method automatically when done
// of(...[20, 30, 40])
//   .pipe(
//     tap(number => console.log(`Value before doubling ${number}`)),
//     map(number => number * 2)
//   )
//   .subscribe(
//     number => console.log(`Result from 'of' method:${number}`)
//   )

// Demo 7-3 - 'from' creation funtion takes each element and emits it to the stream
// It  calls the complete method automatically when done
// from([20, 30, 40]).subscribe(
//   number => console.log(`Result from 'from' method:${number}`),
//   err => console.log(err),
//   () => console.log('complete')
// )

// Demo 7-4 - 'interval' creation funtion emits a value every 1 second
// Operators are functions that take an input stream and create an output stream
// const source = interval(1000).pipe(
//   map(val => {
//     if (val > 5) {
//       //error will be picked up by retryWhen
//       throw val;
//     }
//     return val;
//   }),
//   retryWhen(errors => errors
//     //log error message
//     .pipe(
//       tap(val => console.log(`Value ${val} was too high!`)),
//       //restart in 5 seconds
//       delayWhen(val => timer(val * 1000))
//     ))
// );

// let subscribe: Subscription = source.subscribe(
//   {
//     next: (val: number) => {
//       console.log(val)
//     },
//     error: (err: any) => {
//       console.log(err)
//     },
//     complete: () => {
//       console.log('complete');
//     }
//   }
// );