import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './';

/**
 * Shared state model, used for layout events, common loading, etc.S
 */
export interface SharedState {
  darkModeEnabled: boolean;
  loading: boolean;
}

const initialSharedState: SharedState = {
  darkModeEnabled: false,
  loading: false,
};

/**
 * Shared state slice
 */
export const sharedSlice = createSlice({
  name: 'shared',
  initialState: initialSharedState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkModeEnabled = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

/**
 * Dispatchable actions
 */
export const { setDarkMode, setLoading } = sharedSlice.actions;

/**
 * Shared state selectors
 */
export const selectDarkMode = (state: RootState) =>
  state.shared.darkModeEnabled;
export const selectLoading = (state: RootState) => state.shared.loading;

export default sharedSlice.reducer;
