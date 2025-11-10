import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './dragonball-character-add.html',
})
export class CharacterAddComponent {
  power = signal(0);
  name = signal('');
  
  newCharacter = output<Character>();

  addCharacter(name: string, power: number) {
    if (!this.name() || !this.power() || this.power() <= 0) return;

    const char: Character = {
      id: Math.floor(Math.random() * 1000),
      name: name,
      power: power,
    };

    console.log(char);
    
    this.newCharacter.emit(char);
    this.resetFields();
  }

  resetFields() {
    this.power.set(0);
    this.name.set('');
  }
}
