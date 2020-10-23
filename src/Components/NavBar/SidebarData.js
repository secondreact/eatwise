import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Explore",
    path: "/",
    icon: <AiIcons.AiOutlineSearch />,
    cName: "nav-text",
  },
  {
    title: "Results",
    path: "/results",
    icon: <AiIcons.AiOutlineUnorderedList />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <FaIcons.FaAppleAlt />,
    cName: "nav-text",
  },
];
