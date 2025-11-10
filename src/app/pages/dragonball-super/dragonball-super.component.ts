import { Component, computed, inject, signal } from '@angular/core';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { Character } from '../../interfaces/character.interface';
import { CharacterAddComponent } from '../../components/dragonball/dragonball-character-add/dragonball-character-add';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super',
  imports: [CharacterList, CharacterAddComponent],
  templateUrl: './dragonball-super.template.html',
})
export class DragonballSuper {

  public dragonballService = inject(DragonballService);


}
