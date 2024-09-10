"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to control the hamburger menu
  const [activePage, setActivePage] = useState("Home"); // State to track the active page
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to control dropdown visibility

  const handleToggle = () => {
    setIsOpen(!isOpen); // Toggle the menu on mobile
  };

  const handlePageChange = (page) => {
    setActivePage(page); // Set the active page when a link is clicked
    setIsOpen(false); // Close the menu after clicking (on mobile)
    if (page !== "Result") {
      setDropdownOpen(false); // Close the dropdown if a page other than "Result" is clicked
    }
  };

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen); // Toggle the dropdown on click
  };

  const handleClickOutside = (event) => {
    // Close dropdown if clicking outside of it
    if (dropdownOpen && !event.target.closest(".dropdown-menu")) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside of dropdown
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="" className="h-8" alt="" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            VTU2021 {"N<"}<p>Calculator</p>
          </span>
        </Link>
        <button
          onClick={handleToggle}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
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
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {[
              { name: "Home", href: "/" },
              {
                name: "Results",
                 href: "https://results.vtu.ac.in/index.php",
                // dropdown: [
                //   { name: "SEM1", href: "/sem1" },
                //   { name: "SEM3", href: "/sem3" },
                //   { name: "SEM4", href: "/sem4" },
                //   { name: "SEM5", href: "https://results.vtu.ac.in/DJcbcs24" },
                //   { name: "SEM6", href: "https://results.vtu.ac.in/JJEcbcs24/" },
                //   // { name: "SEM7", href: "/sem7" },
                // ],
              },
              { name: "Custom Calculator", href: "/custom" },
              { name: "Calculator Working", href: "/working" },
              {
                name: "About Me",
                href: "https://nishanthkj.github.io/portfo/",
              },
            ].map((page) => (
              <li key={page.name} className="relative">
                {page.dropdown ? (
                  <div className="relative" onClick={handleDropdownClick}>
                    <button
                      className={`block py-2 px-3 rounded md:p-0 ${
                        activePage === page.name
                          ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                          : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                      }`}
                      aria-current={
                        activePage === page.name ? "page" : undefined
                      }
                    >
                      {page.name}
                    </button>
                    {dropdownOpen && (
                      <ul className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 z-10 dropdown-menu">
                        {page.dropdown.map((item) => (
                          <li key={item.name}>
                            <Link
                              href={item.href}
                              onClick={() => handlePageChange(item.name)}
                              className={`block py-2 px-4 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 ${
                                activePage === item.name
                                  ? "bg-blue-700 text-white"
                                  : ""
                              }`}
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={page.href}
                    onClick={() => handlePageChange(page.name)}
                    className={`block py-2 px-3 rounded md:p-0 ${
                      activePage === page.name
                        ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                        : "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    }`}
                    aria-current={activePage === page.name ? "page" : undefined}
                  >
                    {page.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
