export interface Session {
  duration: number;
  done: boolean;
  type: exerciseType;
  title: string;
  description: string;
  comment: string;
}

export interface Objective {
  accomplished: boolean;
  title: string;
}

export type exerciseType =
  | "Harmonics"
  | "Plucking Hand"
  | "Bassline"
  | "Improvisation"
  | "Theory"
  | "Jam"
  | "Left Hand";
