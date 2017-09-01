import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBatteryComponent } from './single-battery.component';

describe('SingleBatteryComponent', () => {
  let component: SingleBatteryComponent;
  let fixture: ComponentFixture<SingleBatteryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBatteryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBatteryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
