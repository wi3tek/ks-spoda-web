export interface SimpleMatchDay {
  id: number;
  matchDayNo: number;
  date: Date;
  isFinished: boolean;
}

export interface NewMatchDay {
  seasonId: number;
  matchDayDate: Date;
  location: string;
}
