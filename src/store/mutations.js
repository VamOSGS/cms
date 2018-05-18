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

export const addPkg = (state, pkg) => {
  state.data.packages = [...state.data.packages, pkg];
};

export const addProject = (state, project) => {
  state.data.projects = [...state.data.projects, project];
};

export const removeProject = (state, project) => {
  state.data.projects = state.data.projects.filter(item => item !== project);
};

export const changeProjectType = (state, type) => {
  state.data.projectsShowType = type;
  const { projects } = state.data;
  if (type === 'All') {
    if (projects.length > 1) state.projectsBackup = projects;
    state.data.projects = ['all'];
  } else if (type === 'Last N-s') {
    if (projects.length > 1) state.projectsBackup = projects;
    state.data.projects = [5];
  } else {
    state.data.projects = state.projectsBackup;
  }
};

export const changeProjectsCount = (state, count) => {
  state.data.projects = [count];
};
