export const logIn = (state, secret) => {
  state.secret = secret;
  state.loggedIn = true;
};

export const logOut = (state) => {
  state.secret = '';
  state.loggedIn = false;
};

export const setData = (state, data) => {
  state.data = data;
};

export const updateText = (state, { text, field }) => {
  state.data[field] = text;
};

export const removePkg = (state, pkg) => {
  state.data.packages = state.data.packages.filter(item => item !== pkg);
};

export const addPkg = (state, pkgs) => {
  state.data.packages = [...state.data.packages, pkgs];
};
