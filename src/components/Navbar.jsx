import { IoMdMenu } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import Modal from "./Modal";

const NavbarRoutes = () => {
  return (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/publications">Publications</NavLink>
      </li>
      <li>
        <a href="/#experience">Experience</a>
      </li>
      <li>
        <a href="/#talks">Talks</a>
      </li>
      <li>
        <NavLink to="/news">News</NavLink>
      </li>
      <li>
        <a href="/#projects">Projects</a>
      </li>
      <li>
        <a href="/#contact">Contact</a>
      </li>
      <li>
        <a
          href="https://drive.google.com/file/d/1RRfkuKp0i-p4XWjSBWS9woNcugVdPNGG/view"
          target="_blank"
        >
          CV
        </a>
      </li>
    </>
  );
};

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 max-w-7xl mx-auto">
      <div className="navbar-start w-auto pr-5">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <IoMdMenu />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavbarRoutes />
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl">
          Mahim Ahmed
        </NavLink>
      </div>
      <div className="navbar-start hidden lg:flex w-full mx-10">
        <ul className="menu menu-horizontal px-1">
          <NavbarRoutes />
        </ul>
      </div>
      <div className="navbar-end gap-2 w-auto">
        <button
          className=""
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <FaSearch className="w-5 h-5" />
        </button>
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            className="theme-controller"
            value="wireframe"
          />

          {/* sun icon */}
          <FaSun className="swap-on fill-current w-5 h-5" />
          {/* moon icon */}
          <FaMoon className="swap-off fill-current w-5 h-5" />
        </label>
      </div>
      <Modal />
    </nav>
  );
};

export default Navbar;
