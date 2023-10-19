import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from 'react-icons/ai';
import logo from "../../../assets/logo (2).png";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
          <div className="navbar-start">
          <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <AiOutlineMenu className="text-2xl"></AiOutlineMenu>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-4 font-medium"
          >
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-[#E02C6D] underline"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              <li className="text-[16px]">Home</li>
            </NavLink>

            <NavLink
              to="/addProduct"
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-[#E02C6D] underline"
                  : isPending
                  ? "pending"
                  : ""
              }
            >
              <li>Add Product</li>
            </NavLink>

            <NavLink
            to="/myCart"
            className={({ isActive, isPending }) =>
              isActive
                ? "text-[#E02C6D] underline"
                : isPending
                ? "pending"
                : ""
            }
          >
            <li>My Cart</li>
          </NavLink>
          </ul>
        </div>

        <Link to='/'><a className="cursor-pointer"> <img  className="w-[120px]" src={logo} alt="logo image" /> </a></Link>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isActive
                ? "text-[#E02C6D] underline"
                : isPending
                ? "pending"
                : ""
            }
          >
            <li className="text-[16px]">Home</li>
          </NavLink>
          <NavLink
            to="/addProduct"
            className={({ isActive, isPending }) =>
              isActive
                ? "text-[#E02C6D] underline"
                : isPending
                ? "pending"
                : ""
            }
          >
            <li className="text-[16px] ml-4">Add Product</li>
          </NavLink>

          <NavLink
            to="/myCart"
            className={({ isActive, isPending }) =>
              isActive
                ? "text-[#E02C6D] underline"
                : isPending
                ? "pending"
                : ""
            }
          >
            <li className="text-[16px] ml-4">My Cart</li>
          </NavLink>
        </ul>
      </div>


      <div className="navbar-end">
        <Link to='/signIn'><a className=" px-4 py-1 md:py-2 lg:py-2  rounded-md bg-[#E02C6D] text-white text-[16px] font-medium">Sign In</a></Link>
      </div>
    </div>
    );
};

export default Navbar;