import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicComponent } from './topic.component';

describe('block 這裡通常是描述整個 component', () => {
  let component: TopicComponent;
  let fixture: ComponentFixture<TopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicComponent ]
    })
    .compileComponents(); // 對接受測試的 component 做初始化
  });

  beforeEach(() => {
     // 在 run 每次測試前都會 call 一次
    fixture = TestBed.createComponent(TopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
