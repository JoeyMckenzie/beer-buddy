import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse } from '@beer-buddy-nx/shared';
import { Beer, SearchBeerRequest } from '../models';

// eslint-disable-next-line no-undef
const API_BASE_URL = process.env.API_BASE_URL;

export const beerBuddyApi = createApi({
  reducerPath: 'beerBuddyApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  endpoints: (builder) => ({
    getBeers: builder.query<ApiResponse<Beer[]>, void>({
      query: () => 'beers',
    }),
    searchBeers: builder.query<ApiResponse<Beer[]>, SearchBeerRequest>({
      query: (searchRequest) => ({
        url: 'beers',
        params: {
          name: searchRequest.name,
          style: searchRequest.style,
        },
      }),
    }),
    getBeer: builder.query<ApiResponse<Beer>, number>({
      query: (beerId) => `beers/${beerId}`,
    }),
  }),
});

export const { useGetBeersQuery, useGetBeerQuery } = beerBuddyApi;
