import { useEffect, useState } from "react";
import { useStateStore } from "../state/state";
import Login from "@/components/Login";
import { getUserFromLocalStorage, setUserInLocalStorage } from "../state/actions/SetUser";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  const { user, setUser } = useStateStore((state) => state);
  const [openLoginDialog, setOpenLoginDialog] = useState<boolean>(false);

  useEffect(() => {
    const local_storage_user = getUserFromLocalStorage();

    // if both exist then closing the dialog and returning
    if (local_storage_user && user) {
      setOpenLoginDialog(false);
      return;
    }

    // this usally happen when user reload the page;
    if (local_storage_user && !user) {
      setUser(local_storage_user);
      setOpenLoginDialog(false);
      return;
    }

    // this ususally happen when user first login so we are setting the user in state but not in localstorage
    if (user && !local_storage_user) {
      setUserInLocalStorage(user);
      setOpenLoginDialog(false);
      return;
    }

    // here both user and local_storage don't have user so opening the modal
    setOpenLoginDialog(true);
  }, [user]);

  return (
    <>
      <Login open={openLoginDialog} />
      {children}
    </>
  );
};
