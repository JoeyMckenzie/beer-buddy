import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import sharedReducer from './shared-slice';
import { beersSlice } from '@features';

export const store = configureStore({
  reducer: {
    shared: sharedReducer,
    beers: beersSlice.reducer,
  },
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
