import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/model/article';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  articles: Article[] = [];

  constructor() {
    this.articles.push({title: 'FaceBook', url: 'https://www.facebook.com'});
    this.articles.push({title: 'Youtube', url: 'https://www.youtube.com/'});
    this.articles.push({title: 'Google', url: 'https://www.google.com.vn/?hl=vi'});
    this.articles.push({title: 'Shopee', url: 'https://shopee.vn/'});
  }

  ngOnInit(): void {
  }

}
