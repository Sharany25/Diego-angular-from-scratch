import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  imports: [],
  templateUrl: './counter-page.component.html',
})
export class CounterPageComponent {
  counter= signal(10);

  increaseBy(value: number = 1) {
    this.counter.update(current => current + value);
  }

  decreaseBy(value: number = 1) {
    this.counter.update(current => current - value);
  }

  constructor() {
    
    const savedaValue = localStorage.getItem('counter-value');
    if (savedaValue) {
      this.counter.set(+savedaValue);
    }

    effect(() => {
      console.log('Counter changed: ', this.counter());
      localStorage.setItem('counter-value', this.counter().toString());
    });
  }
}