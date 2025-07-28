import { createSlice } from "@reduxjs/toolkit";

interface AuthenticatorState {
  token: string | null;
  username: string | null;
  validity: boolean;
}

export const authenticatorSlice = createSlice({
  name: "authenticator",
  initialState: {
    token: null,
    username: null,
    validity: false,
  } as AuthenticatorState,
  reducers: {
    setAuthenticator: (state, action) => {
      const { token, username, validity } = action.payload;
      state.token = token;
      state.username = username;
      state.validity = validity;
    },
    doLogout: (state) => {
      state.token = null;
      state.username = null;
      state.validity = false;
    },
  },
});

export const { setAuthenticator, doLogout } = authenticatorSlice.actions;
export default authenticatorSlice.reducer;
