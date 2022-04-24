import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogRelationnalComponent } from './log-relationnal.component';

describe('LogRelationnalComponent', () => {
  let component: LogRelationnalComponent;
  let fixture: ComponentFixture<LogRelationnalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogRelationnalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogRelationnalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
