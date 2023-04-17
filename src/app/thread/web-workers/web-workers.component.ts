import { Component } from '@angular/core';
import { PrimeCalculator } from 'src/app/app.prime';
import { calculate } from './calculate';

@Component({
  selector: 'app-web-workers',
  templateUrl: './web-workers.component.html',
  styleUrls: ['./web-workers.component.scss']
})
export class WebWorkersComponent {

  prime10: number = 0;
  prime10000: number = 0;
  currentWorker: Worker | undefined;

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





  /*------------------------------- Multi-Thread ----------------------------*/
  // result1: number = 0;
  // result2: number = 0;
  // result3: number = 0;

  // calculate() {
  //   this.calculate1();
  //   this.calculate2();
  //   this.calculate3();
  //   this.calculate4();
  // }

  // calculate1() {
  //   const worker1 = new Worker(new URL('./multi-thread.worker.ts', import.meta.url));
  //   worker1.postMessage([1000]);
  //   worker1.onmessage = (event) => {
  //     this.result1 = event.data;
  //   };
  // }

  // calculate2() {
  //   const worker2 = new Worker(new URL('./multi-thread.worker.ts', import.meta.url));
  //   worker2.postMessage([1000]);
  //   worker2.onmessage = (event) => {
  //     this.result2 = event.data;
  //   };
  // }

  // calculate3() {
  //   const worker3 = new Worker(new URL('./multi-thread.worker.ts', import.meta.url));
  //   worker3.postMessage([1000]);
  //   worker3.onmessage = (event) => {
  //     this.result3 = event.data;
  //   };
  // }

  // calculate4() {
  //   const worker4 = new Worker(new URL('./multi-thread.worker.ts', import.meta.url));
  //   worker4.postMessage([1000]);
  //   worker4.onmessage = (event) => {
  //     this.result3 = event.data;
  //   };
  // }



  // finalResult1: number = 0;
  // finalResult2: number = 0;
  // finalResult3: number = 0;
  // finalResult4: number = 0;
  // finalResult5: number = 0;
  // finalResult6: number = 0;

  // calculateFinal() {
  //   const worker1 = new Worker(new URL('./multi-thread.worker.ts', import.meta.url));
  //   worker1.postMessage([500]);
  //   worker1.onmessage = (event) => {
  //     this.finalResult1 = event.data;
  //   };
  //   const worker2 = new Worker(new URL('./multi-thread.worker.ts', import.meta.url));
  //   worker2.postMessage([300]);
  //   worker2.onmessage = (event) => {
  //     this.finalResult2 = event.data;
  //   };
  //   const worker3 = new Worker(new URL('./multi-thread.worker.ts', import.meta.url));
  //   worker3.postMessage([700]);
  //   worker3.onmessage = (event) => {
  //     this.finalResult3 = event.data;
  //   };
  //   const worker4 = new Worker(new URL('./multi-thread.worker.ts', import.meta.url));
  //   worker4.postMessage([400]);
  //   worker4.onmessage = (event) => {
  //     this.finalResult4 = event.data;
  //   };
  //   const worker5 = new Worker(new URL('./multi-thread.worker.ts', import.meta.url));
  //   worker5.postMessage([600]);
  //   worker5.onmessage = (event) => {
  //     this.finalResult5 = event.data;
  //   };
  //   const worker6 = new Worker(new URL('./multi-thread.worker.ts', import.meta.url));
  //   worker6.postMessage([200]);
  //   worker6.onmessage = (event) => {
  //     this.finalResult6 = event.data;
  //   };
  // }



  public value!: number;
  public result!: string | null;
  public isCalculating: boolean = false;

  ngOnDestroy(): void {
    this.terminateRunningWorker();
  }

  public modelChange(newValue: number): void {
    this.value = newValue;
    this.result = null;
    if (newValue <= 0) {
      this.terminateRunningWorker();
      return;
    }
    const start = performance.now();
    this.runCalculation();
    console.log(`Non-Blocking UI for ${performance.now() - start} ms`);
  }

  private runCalculation(): void {
    if (typeof Worker !== undefined) {
      this.terminateRunningWorker();
      this.invokeNewWorker(this.value);
    } else {
      console.error('Web workers not supported! Calling on main thread...');
      this.result = calculate(this.value);
    }
  }

  private invokeNewWorker(value: number): void {
    this.currentWorker = new Worker(new URL('./multi-thread.worker.ts', import.meta.url)
    );
    this.isCalculating = true;
    this.currentWorker.onmessage = ({ data }) => {
      this.result = data.result;
      this.isCalculating = false;
    };
    this.currentWorker.postMessage({ value });
  }

  private terminateRunningWorker(): void {
    this.currentWorker?.terminate();
    this.isCalculating = false;
  }




}


