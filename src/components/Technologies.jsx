import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaFigma, FaPython, FaGit, FaPhp } from "react-icons/fa6";

const Technologies = () => {
  return (
    <div className="pb-24 border-b border-neutral-800">
      <h2 className="my-20 text-4xl text-center">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
          <FaNodeJs className="text-green-400 text-7xl" />
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
          <BiLogoPostgresql className="text-blue-400 text-7xl" />
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
          <FaFigma className="text-white text-7xl" />
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
          <FaGit className="text-red-400 text-7xl" />
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
          <FaPhp className="text-7xl text-neutral-700" />
        </div>
        <div className="p-4 border-4 rounded-2xl border-neutral-800">
          <FaPython className="text-yellow-400 text-7xl" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
