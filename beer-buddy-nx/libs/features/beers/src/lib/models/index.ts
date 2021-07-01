export interface Beer {
  name: string;
  abv: number;
  ibu: number;
  style: BeerStyle;
  breweryId: number;
}

export enum BeerStyle {
  LAGER,
  IPA,
  DIPA,
  TIPA,
  STOUT,
  PALEALE,
}

export interface SearchBeerRequest {
  name?: string;
  style?: BeerStyle;
}
