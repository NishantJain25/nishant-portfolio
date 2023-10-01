import { forwardRef } from "react"
import Button from "./button"

const HomeSection = forwardRef(({}, homeRef) => {
    return <section id="home" ref={homeRef}>
    <div className="grid h-full">
        <div className="left text-orange-200 font-extrabold flex flex-col justify-end ">
            <div id="name">
                <h2 className="text-[2em]">Hey!</h2>
                <h2 className="text-[6em] p-0">I'M NISHANT</h2>
            </div>
        </div>
        <div className="right text-white flex flex-col gap-2 items-end justify-end ">
            <div id="description">
                <p className="text-[1.5em]">I'M A WEB DEVELOPER</p>
            </div>
            <div id="cta" className="flex gap-1">
                <Button buttonText={"DOWNLOAD RESUME"} onClick={()=>{}} />
                <Button buttonText={"CONTACT ME"} onClick={()=>{}} />
            </div>
        </div>
    </div>
</section>
})

export default HomeSection