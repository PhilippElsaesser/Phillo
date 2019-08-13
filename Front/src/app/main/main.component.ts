import { AppStateService } from "./../app-state.service";
import { MatSidenav } from "@angular/material/sidenav";
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  @ViewChild("sidenav") sidenav: MatSidenav;

  constructor(private state: AppStateService) {}

  ngOnInit() {
    this.state.sidenavToggled$.subscribe(() => this.onSidenavToggle());
  }

  onSidenavToggle() {
    this.sidenav.toggle();
  }
}
