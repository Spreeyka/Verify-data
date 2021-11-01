import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";

export const SIDEBAR_DATA = [
  {
    title: "When does it work?",
    path: "https://en.wikipedia.org/wiki/Benford%27s_law#Criteria_for_distributions_expected_and_not_expected_to_obey_Benford's_law",
    icon: <FaIcons.FaQuestion />,
    cName: "nav-text",
  },
  {
    title: "Definition",
    path: "https://en.wikipedia.org/wiki/Benford%27s_law#Definition",
    icon: <GiIcons.GiSpectacleLenses />,
    cName: "nav-text",
  },
  {
    title: "Applications",
    path: "https://en.wikipedia.org/wiki/Benford%27s_law#Applications",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },

  {
    title: "Explanations",
    path: "https://en.wikipedia.org/wiki/Benford%27s_law#Explanations",
    icon: <BsIcons.BsLightbulbFill />,
    cName: "nav-text",
  },
  {
    title: "About law (PL)",
    path: "https://pl.wikipedia.org/wiki/Rozk%C5%82ad_Benforda",
    icon: <AiIcons.AiFillFund />,
    cName: "nav-text",
  },
];
