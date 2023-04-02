import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Vocabulary} from "../../../model/Vocabulary";
import {VocabularyService} from "../../../service/vocabulary/vocabulary.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  vocabulary: Vocabulary;

  constructor(private activatedRoute: ActivatedRoute, private vocabularyService: VocabularyService) {
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      if (id != null) {
        this.vocabulary = this.vocabularyService.findById(parseInt(id));
      }
    })
  }

  ngOnInit(): void {
  }

}
