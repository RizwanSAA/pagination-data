import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnPaginationComponent } from './learn-pagination.component';

describe('LearnPaginationComponent', () => {
  let component: LearnPaginationComponent;
  let fixture: ComponentFixture<LearnPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
