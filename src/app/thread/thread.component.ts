import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.scss']
})
export class ThreadComponent implements OnInit {

  thread$ = new Subject<string>();
  thread: string[] = [];
  message: string = '';

  constructor(){console.clear()}

  sendMessage() {
    this.thread$.next(this.message);
    this.thread.push(this.message);
    this.message = '';
  }

  ngOnInit() {
    this.thread$.subscribe(message => {
      this.thread.push(message);
    });
  }





}
