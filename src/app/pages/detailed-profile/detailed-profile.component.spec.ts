import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedProfileComponent } from './detailed-profile.component';

describe('DetailedProfileComponent', () => {
  let component: DetailedProfileComponent;
  let fixture: ComponentFixture<DetailedProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
