/// <reference lib="webworker" />

import { PrimeCalculator } from '../../app.prime';
import { calculate } from "./calculate";

addEventListener('message', ({ data }) => {
   // const response = `worker response to ${data}`;
   const response = PrimeCalculator.findNthPrimeNumber(parseInt(data));
   postMessage(response);
});



addEventListener('message', ({ data }) => {
   const response = { result: calculate(data.value) };
   postMessage(response);
});