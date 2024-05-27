import { useStateStore } from "@/state/state";
import { Link, useRouterState } from "@tanstack/react-router";
import clsx from "clsx";

type NavLink = {
  id: number;
  href: string;
  label: string;
};

const navLinks: NavLink[] = [
  {
    id: 1,
    href: "/",
    label: "Typing Test",
  },
  {
    id: 2,
    href: "/practice",
    label: "Typing Practice",
  },
  {
    id: 4,
    href: "/freewriting",
    label: "Free Writing",
  },
  {
    id: 3,
    href: "/about",
    label: "About",
  },
];

export default function Navbar() {
  const { location } = useRouterState();

  const logout = useStateStore((state) => state.logout);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <svg
            className="h-14 w-14 mr-1 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 20a2 2 0 01-2-2H4a2 2 0 01-2-2V4a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2h-4a2 2 0 01-2 2zm-6-3h4a1 1 0 011 1 1 1 0 01-1 1H4a1 1 0 01-1-1 1 1 0 011-1zm12 0a1 1 0 011 1 1 1 0 01-1 1h-4a1 1 0 01-1-1 1 1 0 011-1h4z" />
          </svg>

          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            JhapaType
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={() => logout()}
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Logout
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navLinks.map(({ id, href, label }) => (
              <li key={id}>
                <Link
                  to={href}
                  className={clsx(
                    "block py-2 px-3 md:p-0 text-xl bg-blue-700 rounded md:bg-transparent text-blue-500",
                    { " font-semibold underline": location.pathname === href },
                  )}
                  aria-current="page"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
