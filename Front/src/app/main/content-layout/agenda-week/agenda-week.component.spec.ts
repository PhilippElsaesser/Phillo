import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AgendaWeekComponent } from "./agenda-week.component";

describe("AgendaWeekComponent", () => {
  let component: AgendaWeekComponent;
  let fixture: ComponentFixture<AgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AgendaWeekComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
