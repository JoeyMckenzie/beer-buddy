export interface ApiResponse<T> {
  message: string;
  success: boolean;
  data: T;
}

export interface Brewery {
  name: string;
  address: Address;
}

export interface Beer {
  name: string;
  abv: number;
  ibu: number;
  style: BeerStyle;
  breweryId: number;
}

interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export enum BeerStyle {
  LAGER,
  IPA,
  DIPA,
  TIPA,
  STOUT,
  PALEALE,
}
