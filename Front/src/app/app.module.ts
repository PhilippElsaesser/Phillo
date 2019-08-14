import { SharedModule } from "./shared/shared.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NavbarComponent } from "./navbar/navbar.component";
import { MainComponent } from "./main/main.component";
import { SidenavComponent } from "./main/sidenav/sidenav.component";
import { ContentLayoutComponent } from "./main/content-layout/content-layout.component";
import { AgendaWeekComponent } from "./main/content-layout/agenda-week/agenda-week.component";
import { AgendaDayComponent } from './main/content-layout/agenda-day/agenda-day.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    SidenavComponent,
    ContentLayoutComponent,
    AgendaWeekComponent,
    AgendaDayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
