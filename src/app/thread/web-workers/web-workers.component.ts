import { Component } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { PrimeCalculator } from 'src/app/app.prime';

@Component({
  selector: 'app-web-workers',
  templateUrl: './web-workers.component.html',
  styleUrls: ['./web-workers.component.scss']
})
export class WebWorkersComponent {

  prime10: number = 0;
  prime10000: number = 0;

  find10thPrimeNumber() {
    this.prime10 = PrimeCalculator.findNthPrimeNumber(28);
  }

  find10000thPrimeNumber() {
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('./multi-thread.worker.ts', import.meta.url));
      worker.onmessage = ({ data }) => {
        this.prime10000 = data;
      };
      worker.postMessage(1000);
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }




  result?: string;

  runParallel() {
    const observable1 = new Observable((observer) => {
      setTimeout(() => {
        observer.next('Result from observable 1');
        observer.complete();
      }, 1000);
    });

    const observable2 = new Observable((observer) => {
      setTimeout(() => {
        observer.next('Result from observable 2');
        observer.complete();
      }, 500);
    });

    const observable3 = new Observable((observer) => {
      setTimeout(() => {
        observer.next('Result from observable 3');
        observer.complete();
      }, 1500);
    });

    forkJoin([observable1, observable2, observable3]).subscribe((results) => {
      this.result = results.join(', ');
      console.log(this.result)
    });
  }


}
