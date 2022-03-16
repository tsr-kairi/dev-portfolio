import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";
import Image from "next/image";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <Image
        src="https://media-exp1.licdn.com/dms/image/C5603AQF1p0mvoG8dmQ/profile-displayphoto-shrink_400_400/0/1628080740956?e=1652918400&v=beta&t=OsMQbqsfikDVcxhCWFK8QEwd_A9mJehVV-KuKvTuwyQ"
        alt="avatar"
        className=" mx-auto border rounded-full "
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        {" "}
        <span className="text-green">Ranjit</span> kairi
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Frontend Developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200"
        href="/resume/Ranjit-Kairi-Cv.pdf"
        download={true}
      >
        {" "}
        <GiTie className="w-6 h-6" /> Download Resume
      </a>

      {/* Social Icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="#">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="#">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="#">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* Address */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Haryana, India</span>
        </div>
        <p className="my-2">ranjitkoiri009@gmail.com</p>
        <p className="my-2">9127301592/7086469775</p>
      </div>
      {/* Email button */}
      <button
        className="w-9/12 px-5 py-2 my-2 text-base text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:ranjitkoiri009@gmail.com")}
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="w-9/12 px-5 py-2 my-2 text-base text-white rounded-full bg-gradient-to-r from-green to-blue-400"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </div>
  );
};

export default Sidebar;
