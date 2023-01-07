export interface ImgesItems {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface Images {
  jpg: ImgesItems;
  webp: ImgesItems;
}

export interface Trailer {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: {
    image_url: string;
    small_image_url: string;
    medium_image_url: string;
    large_image_url: string;
    maximum_image_url: string;
  };
}

export interface TitleItem {
  type: string;
  title: string;
}

export interface DateDetails {
  day: number;
  month: number;
  year: number;
}

export interface Aired {
  from: string;
  to: string;
  prop: {
    from: DateDetails;
    to: DateDetails;
  };
  string: string;
}

export interface Broadcast {
  day: string;
  time: string;
  timezone: string;
  string: string;
}

export interface ProducersItem {
  mal_id: number;
  type: string;
  name: string;
  url: string;
}

export interface ItemType {
  mal_id: number;
  url: string;
  images: Images;
  trailer: Trailer;
  approved: true;
  titles: [TitleItem];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: [string];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: [ProducersItem];
  licensors: [ProducersItem];
  studios: [ProducersItem];
  genres: [ProducersItem];
  explicit_genres: [];
  themes: [];
  demographics: [ProducersItem];
}
