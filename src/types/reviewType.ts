export type ReviewType = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
};

export type User = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type ReviewData = {
  comment: string;
  rating: number;
  offerId: string;
};
