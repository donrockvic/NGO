import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteeringProgramComponent } from './volunteering-program.component';

describe('VolunteeringProgramComponent', () => {
  let component: VolunteeringProgramComponent;
  let fixture: ComponentFixture<VolunteeringProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolunteeringProgramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteeringProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
