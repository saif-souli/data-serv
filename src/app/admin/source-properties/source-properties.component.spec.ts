import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcePropertiesComponent } from './source-properties.component';

describe('SourcePropertiesComponent', () => {
  let component: SourcePropertiesComponent;
  let fixture: ComponentFixture<SourcePropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourcePropertiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
