import AboutImg from "../assets/About.jpg";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="pb-4 border-b border-neutral-900">
      <h1 className="my-20 text-4xl text-center">
        À propos de
        <span className="text-neutral-500"> moi</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={AboutImg} alt="À propos de moi" />
          </div>
        </div>
        <div className="lg:w1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="max-w-xl py-6 my-2 font-light">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
