import { configureStore } from '@reduxjs/toolkit';
import { beerBuddyBeersApi } from '@beer-buddy-nx/features/beers';
import { beerBuddyBreweriesApi } from '@beer-buddy-nx/features/breweries';

export const store = configureStore({
  reducer: {
    [beerBuddyBeersApi.reducerPath]: beerBuddyBeersApi.reducer,
    [beerBuddyBreweriesApi.reducerPath]: beerBuddyBreweriesApi.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(
      beerBuddyBeersApi.middleware,
      beerBuddyBreweriesApi.middleware
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
