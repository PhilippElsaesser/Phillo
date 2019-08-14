import { Component, OnInit, Input } from "@angular/core";
import { Day } from "src/app/shared/models/agenda.model";

@Component({
  selector: "app-agenda-day",
  templateUrl: "./agenda-day.component.html",
  styleUrls: ["./agenda-day.component.css"]
})
export class AgendaDayComponent implements OnInit {
  @Input() day: Day;

  constructor() {}

  ngOnInit() {}
}
