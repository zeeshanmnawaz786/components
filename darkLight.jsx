import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <nav
        className={
          "bg-white " + (darkMode ? "dark:bg-gray-800 " : "") + "shadow"
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <button
                className={
                  "text-gray-800 " +
                  (darkMode ? "dark:text-white " : "") +
                  "hover:text-gray-500 " +
                  (darkMode ? "dark:hover:text-gray-400 " : "") +
                  "px-3 py-2 rounded-md text-sm font-medium"
                }
              >
                Home
              </button>
              <button
                className={
                  "text-gray-800 " +
                  (darkMode ? "dark:text-white " : "") +
                  "hover:text-gray-500 " +
                  (darkMode ? "dark:hover:text-gray-400 " : "") +
                  "px-3 py-2 rounded-md text-sm font-medium"
                }
              >
                About
              </button>
              <button
                className={
                  "text-gray-800 " +
                  (darkMode ? "dark:text-white " : "") +
                  "hover:text-gray-500 " +
                  (darkMode ? "dark:hover:text-gray-400 " : "") +
                  "px-3 py-2 rounded-md text-sm font-medium"
                }
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <button
            onClick={toggleDarkMode}
            className={
              "rounded-full p-2 " +
              (darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800")
            }
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
