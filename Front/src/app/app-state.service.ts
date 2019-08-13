import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AppStateService {
  private selectedDate: string;

  public sidenavToggled$ = new Subject();

  public setSelectedDate(date: string) {
    this.selectedDate = date;
  }

  public getSelectedDate() {
    return this.selectedDate;
  }
}
