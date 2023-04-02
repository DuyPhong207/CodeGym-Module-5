import { Injectable } from '@angular/core';
import {Vocabulary} from "../../model/Vocabulary";

@Injectable({
  providedIn: 'root'
})
export class VocabularyService {
  vocabularies: Vocabulary[] = [];
  constructor() {
    this.vocabularies.push({id: 1, english: 'Cat', vietnamese: 'Con mèo'});
    this.vocabularies.push({id: 2, english: 'Dog', vietnamese: 'Con chó'});
    this.vocabularies.push({id: 3, english: 'Lion', vietnamese: 'Con sư tử'});
    this.vocabularies.push({id: 4, english: 'Tiger', vietnamese: 'Con hổ'});
    this.vocabularies.push({id: 5, english: 'Monkey', vietnamese: 'Con khỉ'});
    this.vocabularies.push({id: 6, english: 'Bird', vietnamese: 'Con chim'});
    this.vocabularies.push({id: 7, english: 'Snake', vietnamese: 'Con rắn'});
  }

  findAll() {
    return this.vocabularies;
  }

  findById(id: number): Vocabulary {
    return this.vocabularies.filter(vocabulary => vocabulary.id === id)[0];
  }
}
