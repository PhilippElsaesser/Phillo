import { Week } from "../../../shared/models/agenda.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-agenda-week",
  templateUrl: "./agenda-week.component.html",
  styleUrls: ["./agenda-week.component.css"]
})
export class AgendaWeekComponent implements OnInit {
  week: Week;

  constructor() {}

  ngOnInit() {
    this.week = {
      objectives: [],
      days: [
        {
          date: "14.08.",
          weekday: "Wednesday",
          sessions: [
            {
              type: "Harmonics",
              title: "Reststrokes",
              duration: 30,
              done: true,
              description: "some desc",
              comment: ""
            },
            {
              type: "Harmonics",
              title: "Reststrokes",
              duration: 30,
              done: false,
              description: "some desc",
              comment: ""
            },
            {
              type: "Plucking Hand",
              title: "with Drums",
              duration: 50,
              done: false,
              description: "some desc",
              comment: ""
            }
          ]
        },
        { date: "14.08.", weekday: "Wednesday", sessions: [] },
        { date: "14.08.", weekday: "Wednesday", sessions: [] },
        { date: "14.08.", weekday: "Wednesday", sessions: [] },
        { date: "14.08.", weekday: "Wednesday", sessions: [] },
        { date: "14.08.", weekday: "Wednesday", sessions: [] },
        { date: "14.08.", weekday: "Wednesday", sessions: [] }
      ]
    };
  }
}
