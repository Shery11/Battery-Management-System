import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryModelComponent } from './battery-model.component';

describe('BatteryModelComponent', () => {
  let component: BatteryModelComponent;
  let fixture: ComponentFixture<BatteryModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatteryModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatteryModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
