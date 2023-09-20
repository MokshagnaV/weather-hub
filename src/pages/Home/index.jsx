import React from "react";
import Search from "../../components/search";
// import Weather from "../../components/weather";
// import Footer from "../../components/footer";
export default function Home() {
  return (
    <React.Fragment>
      <div className="flex-grow flex items-center">
        <div
          className="flex flex-col justify-center items-center
        md:max-w-2xl max-w-sm text-center gap-5 bg-slate-50 bg-opacity-50 dark:bg-black dark:bg-opacity-50  backdrop-blur-sm rounded-xl
        p-8 min-h-[50vh]"
        >
          <h1 className="text-5xl mb-6 font-extrabold text-cyan-900 dark:text-cyan-700">
            Weather Hub
          </h1>
          <div className="flex flex-col gap-2 text-lg text-cyan-600 dark:text-cyan-500">
            <p>
              A Weather App to show all the information about weather in your
              location
            </p>
            <p>Get your current location's weather information</p>
            <p>else, search in below search bar for any location</p>
          </div>
          <div className="w-full">
            <Search />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
