export const secret = ({ secret }) => secret;
export const jsonStorage = ({ jsonStorage }) => jsonStorage;

export const loggedIn = ({ loggedIn }) => loggedIn;

export const textData = ({ data }) => ({
  mail: data.mail,
  title: data.title,
  work: data.work,
  name: data.name,
});

export const packages = ({ data }) => data.packages;

export const projects = ({ data }) => data.projects;

export const data = ({ data }) => data;
