export const logIn = ({ commit }, secret) => {
  commit('logIn', secret);
};

export const logOut = ({ commit }) => {
  commit('logOut');
};
