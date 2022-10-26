import { RootState } from 'store/store';

export const selectAuth = (state: RootState) => state.auth;

export const selectMessage = (state: RootState) => state.message;
