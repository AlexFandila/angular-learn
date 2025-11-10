import { Component, computed, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from '../../components/dragonball/dragonball-character-add/dragonball-character-add';

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterList, CharacterAddComponent],
  templateUrl: './dragonball-super.template.html',
})
export class DragonballSuper {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
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

  addCharacter(newCharacter: Character) {
    this.characters.update((value) => {
      return [...value, newCharacter];
    });
  }
}
