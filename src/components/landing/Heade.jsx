import { Link, NavLink } from "react-router-dom";

const header = () => {
  return (
    <div className="md:flex md:justify-between items-center  py-10 ">
      <div className="logo w-full md:w-fit  text-center mb-5 text-lg md:text-2xl font-bold text-white ">
        Kamet
      </div>
      <div className="navbar">
        <ul className="flex space-x-5 justify-center md:space-x-15 *:font-semibold *:text- md:*:text-lg *:text-white">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/premium">Premium</NavLink>
          </li>
          <li>
            <NavLink to="/blogs">Blogs</NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={" border-white border  rounded-lg px-5 py-2"}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default header;
