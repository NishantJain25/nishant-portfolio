import { forwardRef } from "react";
import Button from "./button";

const HomeSection = forwardRef(({}, homeRef) => {
  return (
    <section id="home" ref={homeRef}>
      <div className="h-full flex flex-col justify-end items-center">
        <div id="name" className="text-white">
          <h2 className="text-[2em] p-0">Hey!</h2>
          <h2 className="text-[6em] p-0 font-extrabold">I'M NISHANT</h2>
        </div>

        <div className="right text-white flex flex-col gap-2 text-center">
          <div id="description" className="opacity-50">
            <p className="text-[1.25em] font-medium text">
              FULL STACK WEB DEVELOPER
            </p>
          </div>
          <div id="cta" className="flex gap-2">
            <Button buttonText={"DOWNLOAD RESUME"} onClick={() => {}} />
            <Button buttonText={"CONTACT ME"} onClick={() => {}} />
          </div>
        </div>
      </div>
    </section>
  );
});

export default HomeSection;
