import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopstoriesComponent } from './topstories.component';

describe('TopstoriesComponent', () => {
  let component: TopstoriesComponent;
  let fixture: ComponentFixture<TopstoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopstoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopstoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
