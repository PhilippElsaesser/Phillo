import { AppStateService } from "./../../app-state.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"]
})
export class SidenavComponent implements OnInit {
  constructor(private state: AppStateService) {}

  ngOnInit() {}

  onDateSelected(date: string) {
    this.state.setSelectedDate(date);
  }
}
