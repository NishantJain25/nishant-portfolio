import { forwardRef, useState } from "react";
import Button from "./button";
import CustomInput from "./CustomInput";

const ContactSection = forwardRef(({}, homeRef) => {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const handleFormData = (e) => {
    setFormData((currentData) => ({
      ...currentData,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <section id="home" ref={homeRef}>
      <div className="grid h-full">
        <div className="left text-orange-200 font-extrabold flex flex-col justify-end ">
          <div id="text">
            <h2 className="text-[6em] p-0">CONTACT ME</h2>
          </div>
        </div>
        <div className="right text-white flex flex-col gap-2 items-end justify-end ">
          <div id="form" className="w-[75%]">
            <form className="w-[100%] flex flex-col items-end mb-4">
              <h2 className="text-[3em] pb-4 w-full">SEND AN EMAIL</h2>
              <CustomInput
                name="name"
                type="text"
                label={"NAME"}
                value={formData.name}
                placeholder="Eg. John Doe"
                onChange={handleFormData}
              />
              <CustomInput
                name="message"
                type="textarea"
                label={"MESSAGE"}
                value={formData.message}
                placeholder="Eg. John Doe"
                onChange={handleFormData}
              />
              <Button buttonText={"SEND EMAIL"} onClick={() => {}} />
            </form>
          </div>
          <div className="w-[75%] h-[1px] bg-gray-500 mb-4"></div>
          <div id="cta" className="flex gap-1 w-[75%] justify-between">
            <span className="text-[3em]">SOCIAL</span>
            <div className="flex gap-2">
              <Button buttonText={"Twitter"} onClick={() => {}} />
              <Button buttonText={"Github"} onClick={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;
