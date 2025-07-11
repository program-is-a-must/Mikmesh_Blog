import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  TextInput,
  Button,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  return (
    <Navbar fluid className="bg-white border-b dark:bg-purple-900 px-4 py-2">
      <div className="flex w-full items-center justify-between">
        {/* Left: Logo & Toggle */}
        <div className="flex items-center gap-3">
          <NavbarBrand as={Link} to="/">
            <span className="text-xl font-bold text-blue-600 dark:text-white">
              <span className="bg-gradient-to-r from-blue-400 via-yellow-300 to-yellow-500 px-2 py-1 rounded text-white">
                Mikmesh's
              </span>{" "}
              Blog
            </span>
          </NavbarBrand>
          <div className="lg:hidden">
            <NavbarToggle />
          </div>
        </div>

        {/* Center: Search Bar (desktop only) */}
        <form className="hidden lg:flex flex-1 mx-8 max-w-md">
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="w-full"
          />
        </form>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <Button
            className="hidden sm:inline-flex w-10 h-10 p-2"
            color="gray"
            pill
          >
            <FaMoon />
          </Button>
          <Link to="/sign-in">
            <Button className="bg-gradient-to-r from-teal-200 to-lime-200 text-gray-900 hover:from-teal-300 hover:to-lime-300 focus:ring-2 focus:ring-lime-400 dark:focus:ring-teal-700 font-medium px-4 py-1">
              Sign In
            </Button>
          </Link>
          {/* Mobile Search Icon */}
          <Button className="lg:hidden w-10 h-10 p-2" color="gray" pill>
            <AiOutlineSearch />
          </Button>
        </div>
      </div>

      {/* Collapsible Navigation (mobile & desktop) */}
      <NavbarCollapse>
        <NavbarLink as={Link} to="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} to="/about">
          About
        </NavbarLink>
        <NavbarLink as={Link} to="/projects">
          Projects
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
