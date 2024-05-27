import { removeUserFromLocalStorage } from "../state/actions/SetUser";
import { State } from "../state/state";

type Params = {
  set: (nextStarterUpdate: (state: State) => void) => void;
};

export const logout = ({ set }: Params) => {
  /*
     * we have to first remove the user from localstorage which didn't trigger the re-render of user State
     if we first remove the user from state this will trigger user to re-render and the useEffect will set user
     to localStorage so first remove the localStorage and then remove the user from state
    */
  removeUserFromLocalStorage();

  // removing user from state;
  set((state) => {
    state.user = null;
  });
};
