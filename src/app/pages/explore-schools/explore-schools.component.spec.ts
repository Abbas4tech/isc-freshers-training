import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreSchoolComponent } from './explore-schools.component';

describe('ExploreSchoolComponent', () => {
  let component: ExploreSchoolComponent;
  let fixture: ComponentFixture<ExploreSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExploreSchoolComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
