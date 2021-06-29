import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './';

export interface SharedState {
  darkModeEnabled: boolean;
  loading: boolean;
}

const initialSharedState: SharedState = {
  darkModeEnabled: false,
  loading: false,
};

export const sharedSlice = createSlice({
  name: 'shared',
  initialState: initialSharedState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkModeEnabled = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setDarkMode, setLoading } = sharedSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectDarkMode = (state: RootState) =>
  state.shared.darkModeEnabled;
export const selectLoading = (state: RootState) => state.shared.loading;

export default sharedSlice.reducer;
