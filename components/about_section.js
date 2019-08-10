import { Link, animateScroll as scroll } from "react-scroll";
import { Fragment } from "react";

const aboutSection = () => (
  <Fragment>
    <main
      id="about"
      className="flex flex-row max-w-4xl mx-auto p-4 md:px-8 md:py-16 md:my-40 w-full"
    >
      <div className="w-1/2 flex flex-col align-center justify-center">
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          quia ut placeat velit pariatur minus. Voluptatem aspernatur incidunt
          dolore. Modi blanditiis nihil, voluptatum saepe veniam nesciunt
          perferendis quas provident magnam.
        </p>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          quia ut placeat velit pariatur minus. Voluptatem aspernatur incidunt
          dolore. Modi blanditiis nihil, voluptatum saepe veniam nesciunt
          perferendis quas provident magnam.
        </p>
        <p>
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          quia ut placeat velit pariatur minus. Voluptatem aspernatur incidunt
          dolore. Modi blanditiis nihil, voluptatum saepe veniam nesciunt
          perferendis quas provident magnam.
        </p>
      </div>
    </main>
  </Fragment>
);

export default aboutSection;
