
export type AppState = {
  isAuthenticated: boolean;
  username: string | null;
};

export const initialState: AppState = {
  isAuthenticated: false,
  username: null,
};
