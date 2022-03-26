import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'ngx-article-placeholder',
  templateUrl: './article-placeholder.component.html',
  styleUrls: ['./article-placeholder.component.scss']
})
export class ArticlePlaceholderComponent implements OnInit {

  
  @HostBinding('attr.aria-label')
  label = 'Loading';

  constructor() { }

  ngOnInit(): void {
  }

}
