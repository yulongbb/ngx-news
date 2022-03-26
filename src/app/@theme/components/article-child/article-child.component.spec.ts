import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleChildComponent } from './article-child.component';

describe('ArticleChildComponent', () => {
  let component: ArticleChildComponent;
  let fixture: ComponentFixture<ArticleChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
