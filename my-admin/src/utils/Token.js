export const setTheme = (theme) => {
  if (theme) localStorage.setItem("theme", theme);
};

export const getTheme = () => {
  return localStorage.getItem("theme");
};

export const Get_Token = () => {
  return localStorage.getItem("token");
}

export const Set_Token = (token) => {
  localStorage.setItem("token", token)
}

export const Remove_Token = () => {
  localStorage.removeItem("token")
}