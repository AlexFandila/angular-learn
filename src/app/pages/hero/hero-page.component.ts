import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core'
import {UpperCasePipe} from '@angular/common'

@Component({
  templateUrl: 'hero-page.template.html',
  imports: [UpperCasePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroPageComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {
    return `${this.name()} - ${this.age()}`;
  });

  capitalizeName = computed(() => {
    return this.name().toUpperCase();
  })

  getHeroDescription(): string {
    return `${this.name()} - ${this.age()}`;
  }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }
}
