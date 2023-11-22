export interface Season {
  id: number | null;
  leagueId: number;
  seasonCount: number | null;
  startDate: Date;
  endDate: Date | null;
  isFinished: boolean;
  initialRating: number | null;
  pointCountingMethod: string;
  ratingType: string | null;
  hasNoActiveMatchDay: boolean;
}

export interface SeasonListResponse {
  message: string | null;
  seasons: Season[];
}
