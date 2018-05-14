export const logIn = (state, secret) => {
  state.secret = secret;
  state.loggedIn = true;
};

export const logOut = (state) => {
  state.secret = '';
  state.loggedIn = false;
};
