import { Component, OnInit } from '@angular/core';
import {Vocabulary} from "../../../model/Vocabulary";
import {VocabularyService} from "../../../service/vocabulary/vocabulary.service";

@Component({
  selector: 'app-vocabulary',
  templateUrl: './vocabulary.component.html',
  styleUrls: ['./vocabulary.component.css']
})
export class VocabularyComponent implements OnInit {
  vocabularies: Vocabulary[] = [];
  constructor(private vocabularyService: VocabularyService) {
    this.vocabularies = this.vocabularyService.findAll();
  }

  ngOnInit(): void {
  }

}
