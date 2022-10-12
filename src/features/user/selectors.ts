import { RootState } from 'store/store';

export const selectIsLoggedIn = (state: RootState) => state.auth;

export const selectMessage = (state: RootState) => state.message;
