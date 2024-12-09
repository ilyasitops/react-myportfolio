import { RiReactjsLine } from "react-icons/ri";
import {
  FaNodeJs,
  FaFigma,
  FaPython,
  FaGit,
  FaPhp,
  FaWindows,
  FaLinux,
  FaC,
  FaHtml5,
  FaCss3,
  FaJs,
  FaTrello,
} from "react-icons/fa6";
import { BiLogoPostgresql, BiLogoBlender } from "react-icons/bi";
import {
  SiAdobephotoshop,
  SiVite,
  SiDbeaver,
  SiIntellijidea,
  SiDatagrip,
  SiPhpstorm,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiMysql,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { RiTailwindCssFill } from "react-icons/ri";

const Technologies = () => {
  return (
    <div className="pb-24 border-b border-neutral-800">
      <h2 className="my-20 text-4xl text-center">Technologies</h2>

      <h3 className="my-10 text-3xl text-center">Frontend</h3>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://reactjs.org/docs/getting-started.html"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <FaHtml5 className="text-orange-600 text-7xl" />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <FaCss3 className="text-blue-600 text-7xl" />
        </a>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <FaJs className="text-yellow-400 text-7xl" />
        </a>
        <a
          href="https://vitejs.dev/guide/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiVite className="text-purple-600 text-7xl" />
        </a>
        <a
          href="https://tailwindcss.com/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <RiTailwindCssFill className="text-blue-400 text-7xl" />
        </a>
      </div>

      <h3 className="my-10 text-3xl text-center">Backend</h3>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://nodejs.org/en/docs/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <FaNodeJs className="text-green-400 text-7xl" />
        </a>
        <a
          href="https://www.postgresql.org/docs/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <BiLogoPostgresql className="text-blue-400 text-7xl" />
        </a>
        <a
          href="https://www.php.net/docs.php"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <FaPhp className="text-7xl text-neutral-700" />
        </a>
        <a
          href="https://docs.python.org/3/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <FaPython className="text-yellow-400 text-7xl" />
        </a>
        <a
          href="https://en.cppreference.com/w/c"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <FaC className="text-blue-400 text-7xl" />
        </a>
        <a
          href="https://dev.mysql.com/doc/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiMysql className="text-blue-500 text-7xl" />
        </a>
      </div>

      <h3 className="my-10 text-3xl text-center">Outils</h3>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://git-scm.com/doc"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <FaGit className="text-red-400 text-7xl" />
        </a>
        <a
          href="https://www.figma.com/resources/learn-design/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <FaFigma className="text-white text-7xl" />
        </a>
        <a
          href="https://trello.com/en-US/guide"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <FaTrello className="text-blue-600 text-7xl" />
        </a>
        <a
          href="https://dbeaver.io/docs/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiDbeaver className="text-green-500 text-7xl" />
        </a>
        <a
          href="https://code.visualstudio.com/docs"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <VscVscode className="text-blue-600 text-7xl" />
        </a>
        <a
          href="https://www.jetbrains.com/idea/documentation/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiIntellijidea className="text-blue-600 text-7xl" />
        </a>
        <a
          href="https://www.jetbrains.com/datagrip/documentation/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiDatagrip className="text-green-500 text-7xl" />
        </a>
        <a
          href="https://www.jetbrains.com/phpstorm/documentation/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiPhpstorm className="text-purple-500 text-7xl" />
        </a>
      </div>

      <h3 className="my-10 text-3xl text-center">Autres</h3>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://www.microsoft.com/en-us/windows"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <FaWindows className="text-blue-600 text-7xl" />
        </a>
        <a
          href="https://www.linux.org/pages/download/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <FaLinux className="text-yellow-400 text-7xl" />
        </a>
        <a
          href="https://www.blender.org/support/tutorials/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <BiLogoBlender className="text-orange-600 text-7xl" />
        </a>
        <a
          href="https://helpx.adobe.com/photoshop/tutorials.html"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiAdobephotoshop className="text-blue-400 text-7xl" />
        </a>
        <a
          href="https://helpx.adobe.com/premiere-pro/user-guide.html"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiAdobepremierepro className="text-blue-600 text-7xl" />
        </a>
        <a
          href="https://helpx.adobe.com/after-effects/user-guide.html"
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 border-4 rounded-2xl border-neutral-800"
        >
          <SiAdobeaftereffects className="text-purple-600 text-7xl" />
        </a>
      </div>
    </div>
  );
};

export default Technologies;
