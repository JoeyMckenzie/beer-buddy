import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse } from '@beer-buddy-nx/shared';
import { Beer, SearchBeerRequest } from '../models';

export const beerBuddyBeersApi = createApi({
  reducerPath: 'beerBuddyBeersApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
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

export const { useGetBeersQuery, useGetBeerQuery } = beerBuddyBeersApi;
