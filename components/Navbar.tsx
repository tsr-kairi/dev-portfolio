import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, FunctionComponent } from "react";

function Navbar() {
  const [activeItem, setActiveItem] = useState<string>("");
  const { pathname } = useRouter();

  const NavItem: FunctionComponent<{
    activeItem: string;
    setActiveItem: Function;
    name: string;
    route: string;
  }> = ({ activeItem, name, route, setActiveItem }) => {
    return activeItem !== name ? (
      <Link href={route}>
        <a>
          <span onClick={() => setActiveItem(name)} className="hover:text-green">
            {name}
          </span>
        </a>
      </Link>
    ) : null;
  };

  useEffect(() => {
    if (pathname === "/") {
      setActiveItem("About");
    }
    if (pathname === "/projects") {
      setActiveItem("Projects");
    }
    if (pathname === "/resume") {
      setActiveItem("Resume");
    }
  }, [pathname]);

  return (
    <div className="flex justify-between px-5 py-3 my-3">
      <span className="text-xl font-bold md:text-2xl">
        {activeItem}
        <hr className="h-1 w-auto bg-gradient-to-r from-green to-blue-400" />
      </span>
      <div className="flex space-x-5 text-lg">
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="About"
          route="/"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Projects"
          route="/projects"
        />
        <NavItem
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          name="Resume"
          route="/resume"
        />
      </div>
    </div>
  );
}

export default Navbar;
