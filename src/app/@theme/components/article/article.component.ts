import { Component, OnInit, Input } from '@angular/core';
import { NewsPost } from '../../../@core/data/news';
import { Language } from '../../../@core/data/languages';

@Component({
  selector: 'ngx-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  @Input() post: NewsPost;
  @Input() language: Map<string, Language>;

  constructor() { }

  ngOnInit(): void {
  }

}
