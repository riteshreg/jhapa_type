import Navbar from "@/components/Navbar";
import { Provider } from "@/lib/Provider";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <Provider>
        <Navbar />
        <Outlet />
        <TanStackRouterDevtools />
      </Provider>
    </>
  ),
});
