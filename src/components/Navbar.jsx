import React from "react";

export default function Navbar() {
  const handleTheme = () => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <nav
      className="sticky top-10 z-10 w-[90%] flex justify-between my-10
     dark:bg-black dark:bg-opacity-50 dark:border-black dark:text-cyan-200
     bg-white bg-opacity-50 border-white border-2 text-cyan-900
     text-xl backdrop-blur-lg font-bold p-5 rounded-full"
    >
      <div>
        <h1 className="text-2xl">Weather Hub</h1>
      </div>
      <div>
        <button onClick={handleTheme}>light</button>
      </div>
    </nav>
  );
}
