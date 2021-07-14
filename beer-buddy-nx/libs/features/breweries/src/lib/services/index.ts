import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse } from '@beer-buddy-nx/shared';
import { Brewery } from '../models';

export const beerBuddyBreweriesApi = createApi({
  reducerPath: 'beerBuddyBreweriesApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: (builder) => ({
    getBreweries: builder.query<ApiResponse<Brewery[]>, void>({
      query: () => 'breweries',
    }),
    getBrewery: builder.query<ApiResponse<Brewery>, number>({
      query: (breweryId) => `breweries/${breweryId}`,
    }),
  }),
});

export const { useGetBreweriesQuery, useGetBreweryQuery } =
  beerBuddyBreweriesApi;
