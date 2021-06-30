import { BeerStyle } from './shared';

export interface SearchBeerRequest {
  name?: string;
  style?: BeerStyle;
}
