import { Link, animateScroll as scroll } from "react-scroll";
import { Fragment } from "react";

const mainSection = () => (
  <Fragment>
    <main className="flex flex-row max-w-4xl mx-auto p-4 md:px-8 md:py-16 w-full">
      <div className="w-1/2 flex flex-col align-center justify-center">
        <h2 className="font-bold text-red-400 text-3xl" id="subtitle">
          {" "}
          Be free of things that you doesn't care anymore{" "}
        </h2>
        <p className="text-gray-700 mt-5" id="description-home">
          {" "}
          Make happy money!{" "}
        </p>
      </div>
      <div className="w-1/2 h-full">
        <img src="static/home.png" />
      </div>
    </main>
    <div className="w-full flex justify-center">
      <Link
        activeClass=""
        className="text-red-400 px-4 py-1 border border-red-400 rounded-full cursor-pointer hover:bg-red-400 hover:text-white"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        {" "}
        About the app{" "}
      </Link>
    </div>
  </Fragment>
);

export default mainSection;
