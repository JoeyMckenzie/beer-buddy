import { ApiResponse, Beer, BeerStyle } from '../models';

// eslint-disable-next-line no-undef
const API_BASE_URL = process.env.API_BASE_URL;

export const BeerBuddyApi = {
  getBeers: async (): Promise<ApiResponse<Beer[]>> => {
    return {
      data: [],
      message: 'Success',
      success: true,
    };
  },
  getBeer: async (id: number): Promise<ApiResponse<Beer>> => {
    return {
      data: {
        name: 'Hexagenia',
        abv: 7.4,
        ibu: 110,
        breweryId: 1,
        style: BeerStyle.PALEALE,
      },
      message: 'Success',
      success: true,
    };
  },
};
