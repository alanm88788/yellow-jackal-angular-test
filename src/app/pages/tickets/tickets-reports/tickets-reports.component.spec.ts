import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsReportsComponent } from './tickets-reports.component';

describe('TicketsReportsComponent', () => {
  let component: TicketsReportsComponent;
  let fixture: ComponentFixture<TicketsReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
