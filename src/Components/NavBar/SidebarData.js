import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Results",
    path: "/",
    icon: <AiIcons.AiOutlineUnorderedList />,
    cName: "nav-text",
  },
  {
    title: "Scan",
    path: "/scan",
    icon: <AiIcons.AiOutlineScan />,
    cName: "nav-text",
  },
  {
    title: "Details",
    path: "/details",
    icon: <FaIcons.FaCookieBite />,
    cName: "nav-text-hidden",
  },
  {
    title: "Favorites",
    path: "/favorites",
    icon: <AiIcons.AiTwotoneHeart />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <FaIcons.FaAppleAlt />,
    cName: "nav-text",
  },
];
