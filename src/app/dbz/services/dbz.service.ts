import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[]=[
    {
      id:uuid(),
      name:'vue',
      level:5
    },
    {
      id:uuid(),
      name:'blazor',
      level:8
    },
    {
      id:uuid(),
      name:'sql server',
      level:9
    }
  ]

  addCharacter(character:Character):void{
    const {id,...resto}=character
    const newCharacter:Character={id:uuid(),...resto}
    console.log(newCharacter)
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(id:number):void{
  //   this.characters.splice(id,1)
  // }
  deleteCharacterById(id:string):void{
    this.characters=this.characters.filter(c=>c.id!==id)
  }
}
