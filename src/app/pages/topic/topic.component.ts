import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs/operators';

import { NewsData } from '../../@core/data/news';
import { CategoryData } from '../../@core/data/category';

@Component({
  selector: 'ngx-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit {

  category;

  language = {
    zh: {
      name: "Chinese",
      native: "中文"
    }
  }

  firstCard;

  pageSize = 10;

  constructor(private newsService: NewsData,private categoryService: CategoryData, private route: ActivatedRoute,) {
      this.route.params.subscribe(params => {
       this.firstCard = {
          news: [],
          placeholders: [],
          loading: false,
          pageToLoadNext: 1,
        };
       this.category = this.categoryService.getById(params['category']).pipe(map(category => category[0]))
       this.category.subscribe(cate => {this.loadNext(this.firstCard, cate); });
     });
  }

  ngOnInit(): void {
   
  }

  loadNext(cardData, category) {
    if (cardData.loading) { return; }
    cardData.loading = true;
    cardData.placeholders = new Array(this.pageSize);
    category.subscribe(cate => {
       this.newsService.load(cardData.pageToLoadNext, this.pageSize, cate)
      .subscribe(nextNews => {
        cardData.placeholders = [];
        cardData.news.push(...nextNews);
        cardData.loading = false;
        cardData.pageToLoadNext++;
      });
    })
  }

}
