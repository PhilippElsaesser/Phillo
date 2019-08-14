import { Session, Objective } from "./session.model";

export interface Month {
  days: Day[];
  objectives: Objective[];
}

export interface Week {
  days: Day[];
  objectives: Objective[];
}

export interface Day {
  date: string;
  weekday: string;
  sessions: Session[];
}
