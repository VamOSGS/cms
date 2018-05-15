export const logIn = ({ commit }, secret) => {
  commit('logIn', secret);
};

export const logOut = ({ commit }) => {
  commit('logOut');
};

export const setData = ({ commit }, data) => {
  commit('setData', data);
};

export const updateText = ({ commit }, data) => {
  commit('updateText', data);
};

export const removePacakge = ({ commit }, pkg) => {
  commit('removePacakge', pkg);
};
