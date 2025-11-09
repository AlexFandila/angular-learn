import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  templateUrl: 'counter-page.template.html',
  styles: `
  button {
    padding: 5px;
    margin: 5px 10px;
    width: 75px;
  }
`,
  changeDetection: ChangeDetectionStrategy.OnPush, // Le decimos que no use Zone.js, sino que use zoneless (Mejor para trabajar con señales)
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(10);

  constructor() {
    setInterval(() => {
      this.counter +=1; // Esto NO va a actualizarse porque NO es una señal y estamos tabajando con zoneless
      this.counterSignal.update((v) => v += 1); // Esto SÍ va a funcinar
      console.log('Tick');
    }, 2000);
  }

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update(current => current + value) // Cuando dependemos del valor anterior
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
