import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Explore",
    path: "/explore",
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
    title: "Details",
    path: "/details",
    icon: <FaIcons.FaCookieBite />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <FaIcons.FaAppleAlt />,
    cName: "nav-text",
  },
];
