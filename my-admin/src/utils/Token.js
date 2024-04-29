export const setTheme = (theme) => {
  if (theme) localStorage.setItem("theme", theme);
};

export const getTheme = () => {
  return localStorage.getItem("theme");
};

// export const removeToken = () => {
//   localStorage.removeItem("theme");
// };