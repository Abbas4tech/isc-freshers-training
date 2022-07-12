import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityitemComponent } from './universityitem.component';

describe('UniversityitemComponent', () => {
  let component: UniversityitemComponent;
  let fixture: ComponentFixture<UniversityitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
