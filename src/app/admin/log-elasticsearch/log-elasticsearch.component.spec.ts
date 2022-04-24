import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogElasticsearchComponent } from './log-elasticsearch.component';

describe('LogElasticsearchComponent', () => {
  let component: LogElasticsearchComponent;
  let fixture: ComponentFixture<LogElasticsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogElasticsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogElasticsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
