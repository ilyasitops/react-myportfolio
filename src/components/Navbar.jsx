import logo from "../assets/kevinRushLogo.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 mb-20 bg-blue-300 bg">
      <img src={logo} alt="logo" />
      <div className="flex items-center flex-shrink-0"></div>
    </nav>
  );
};

export default Navbar;
