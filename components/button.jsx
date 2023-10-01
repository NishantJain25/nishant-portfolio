import { useState } from "react";

export default function Button({ buttonText, onClick }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      className={`p-2 relative ${
        hover ? "text-white" : "text-black"
      } overflow-hidden border-white z-[1] duration-500 bg-white  border-[2px] rounded-full before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0 before:bg-black hover:before:h-full before:transition-all before:[cubic-bezier(0.75,-0.03, 0.2, 1)] before:duration-500 before:z-[-1]`}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {buttonText}
    </button>
  );
}
