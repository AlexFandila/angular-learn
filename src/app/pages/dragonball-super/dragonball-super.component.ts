import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super',
  imports: [],
  templateUrl: './dragonball-super.template.html',
})
export class DragonballSuper {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 }
  ]);

  powerClasses = computed(() => {
    return {
      'text-danger': true,
    };
  });

  hasGreatPower(character: Character): boolean {
    if (character.power > 1000) {
      return true;
    }

    return false;
  }

  addCharacter(name: string, power: number) {
    if (!this.name() || !this.power() || this.power() <= 0) return;

    const char: Character = {
      id: this.characters().length + 1,
      name: name,
      power: power
    };

    this.characters.update((value) => {
      return [...value, char];
    });
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }

}
