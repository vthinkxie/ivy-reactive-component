import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { scan, startWith } from 'rxjs/operators';
import { ReactiveComponent } from './reactive/reactive.component';

interface State {
  count: number;
}

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : ['./app.component.css']
})
export class AppComponent extends ReactiveComponent {
  value$ = new Subject<number>();
  state: State;

  constructor() {
    super();
    this.state = this.connect({
      count: this.value$.pipe(
        startWith(0),
        scan((count, next) => count + next, 0)
      )
    });
  }
}
