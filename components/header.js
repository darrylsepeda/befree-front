import { useState } from "react";
import Link from "next/link";

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="bg-white top-0 fixed w-full">
      <div className="flex flex-wrap md:flex-no-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
        <div className="flex flex-row items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
            <defs>
              <linearGradient
                x1="0"
                y1="-21.333"
                y2="85.333"
                id="A"
                x2="64"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fc8181" offset="0%" />
                <stop stop-color="#e53e3e" offset="100%" />
              </linearGradient>
            </defs>
            <path
              d="M16 25.6c2.133-8.533 7.467-12.8 16-12.8 12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8C61.867 27.733 56.533 32 48 32c-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8zM0 44.8C2.133 36.267 7.467 32 16 32c12.8 0 14.4 9.6 20.8 11.2 4.267 1.067 8-.533 11.2-4.8-2.133 8.533-7.467 12.8-16 12.8-12.8 0-14.4-9.6-20.8-11.2-4.267-1.067-8 .533-11.2 4.8z"
              fill="url(#A)"
              fill-rule="evenodd"
            />
          </svg>
          <p className="font-bold text-red-500 text-xl uppercase italic">
            befree
          </p>
        </div>

        <button
          className="block md:hidden border border-red-500 flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-red h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul
          className={`${
            isExpanded ? `block` : `hidden`
          } md:flex flex flex-col md:flex-row items-center justify-center text-sm w-full md:w-auto`}
        >
          {[
            { title: "Sign In", route: "/auth/signin" },
            { title: "Sign Up", route: "/auth/signup" }
          ].map(navigationItem => (
            <li className="mt-3 md:mt-0 md:ml-6" key={navigationItem.title}>
              <Link href={navigationItem.route}>
                <a className="block text-red-500 md:px-5 md:py-2 hover:bg-red-500 hover:text-white md:border-red-500 md:border md:rounded-full">
                  {navigationItem.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
