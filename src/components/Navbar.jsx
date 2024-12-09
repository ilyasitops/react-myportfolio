import logo from "../assets/Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 mb-20">
      <div className="flex items-center flex-shrink-0">
        <img className="w-10 mx-2" src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-center gap-4 m-8 text-2xl">
        <a
          href="https://www.linkedin.com/in/ilyasbld/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-white" />
        </a>
        <a
          href="https://github.com/ilyasitops"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-white" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
