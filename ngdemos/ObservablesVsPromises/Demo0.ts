import { Observable, Subscription, from } from "rxjs";
import { catchError } from "rxjs/operators";

// Demo 0: Understanding Observables Basics

//Creating an observable
const simpleObservable$ = new Observable<number>((observer) => {
  // observable execution
   observer.next(Math.random()*100)

  // Uncomment to throw an error
  //observer.error('Some error got thrown')

  // observable complete
  observer.complete()
})



// subscribe to the observable
let subscriptionOne: Subscription = simpleObservable$
  .pipe(
    // catchError(err => of(["intercepted the error message and returned an observable which lead to calling the "]))
    catchError(err => from(["Modified error message"]))
  )
  .subscribe(
    {
      next: (num: number) => {
        console.log(`Your lucky number is ${num}`)
      },
      error: (err: any) => {
        console.log(`Well no luck for you today Master!!! Instead you got ${err}`)
      },
      complete: () => {
        console.log('complete');
      }
    }
  );

// dispose the observable
subscriptionOne.unsubscribe()