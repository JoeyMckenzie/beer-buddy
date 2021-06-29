import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Beer, BeerBuddyApi, LoadingStatus, Maybe } from '@lib';

export interface BeersState {
  currentBeer: Maybe<Beer>;
  currentBeers: Beer[];
  loading: LoadingStatus;
}

const initialState: BeersState = {
  currentBeers: [],
  currentBeer: undefined,
  loading: 'Idle',
};

/**
 * Async actions
 */
export const loadBeersAsync = createAsyncThunk('beers/loadBeers', async () => {
  const beersResponse = await BeerBuddyApi.getBeers();
  return beersResponse.data;
});

export const loadBeerByIdAsync = createAsyncThunk(
  'beers/loadBeerById',
  async (beerId: number) => {
    const beerResponse = await BeerBuddyApi.getBeer(beerId);
    return beerResponse.data;
  },
);

export const beersSlice = createSlice({
  name: 'beers',
  initialState: initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadBeersAsync.pending, (state) => {
        state.loading = 'Loading';
      })
      .addCase(loadBeersAsync.fulfilled, (state, action) => {
        state.loading = 'Idle';
        state.currentBeers = action.payload;
      })
      .addCase(loadBeerByIdAsync.pending, (state) => {
        state.loading = 'Loading';
      })
      .addCase(loadBeerByIdAsync.fulfilled, (state, action) => {
        state.loading = 'Idle';
        state.currentBeer = action.payload;
      });
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectBeers = (state: BeersState) => state.currentBeers;
