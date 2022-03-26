import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePlaceholderComponent } from './article-placeholder.component';

describe('ArticlePlaceholderComponent', () => {
  let component: ArticlePlaceholderComponent;
  let fixture: ComponentFixture<ArticlePlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlePlaceholderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlePlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
