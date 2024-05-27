import { State } from "../state";

type Params = {
  set: (nextStarterUpdate: (state: State) => void) => void;
  user: User;
};

export const setUser = ({ set, user }: Params) => {
  set((state) => {
    state.user = user;
  });
};

export const getUserFromLocalStorage = (): User | null => {
  // getting user or null from localstorage
  const user = localStorage.getItem("user");
  // return null if user not available
  if (!user) return null;
  // finally convering string to object
  return JSON.parse(user);
};

export const setUserInLocalStorage = (user: User) =>
  localStorage.setItem("user", JSON.stringify(user));

export const removeUserFromLocalStorage = () => localStorage.removeItem("user");
