import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { beerBuddyApi } from '../api';

export const store = configureStore({
  reducer: {
    [beerBuddyApi.reducerPath]: beerBuddyApi.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(beerBuddyApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
