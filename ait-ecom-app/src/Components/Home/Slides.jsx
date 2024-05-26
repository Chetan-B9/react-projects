import { Link } from "react-router-dom";
import homeStyle from "../../CSS/HomepageStyle/Home.module.css";

function Slides({ title, desc, cover }) {
  return (
    <div className="container flex flex-col md:flex-row">
      {/* Slides left part (product details part)  */}
      <div className="left_side w-full md:w-[50%] text-center md:text-left flex flex-col gap-5 justify-center items-center md:items-start order-2 md:order-1 px-0 md:px-10">
        <h1 className="text-4xl md:text-5xl leading-[3.5rem] font-semibold">
          {title}
        </h1>
        <p>{desc}</p>
        <Link className="bg-[#f2f2f2] w-fit hover:underline">
          Visit Collections
        </Link>
      </div>

      {/* Slides right part (image part) */}
      <div
        className={`${homeStyle.right_side} w-full md:w-[50%] flex justify-center items-center order-1 md:order-2`}
      >
        <img src={cover} alt="Hero Image" />
      </div>
    </div>
  );
}

export default Slides;
