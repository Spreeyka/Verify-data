import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { SIDEBAR_DATA } from "./SidebarData";
import { IconContext } from "react-icons";
import BenfordImage from "../images/benek2.webp";
import * as SiIcons from "react-icons/si";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  const [hiddenSidebar, setHiddenSidebar] = useState(true);

  const showSidebar = () => setHiddenSidebar(!hiddenSidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Link to="#" className={`${styles[`menu-bars`]}`}>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <nav
          className={
            hiddenSidebar
              ? `${styles[`nav-menu`]} ${styles[`hidden`]}`
              : `${styles[`nav-menu`]}`
          }
        >
          <ul className={`${styles[`nav-menu-items`]}`} onClick={showSidebar}>
            <li>
              <Link
                className={`${styles[`sidebar-link`]}`}
                to={{
                  pathname: "https://en.wikipedia.org/wiki/Frank_Benford",
                }}
                target="_blank"
                rel="noopener"
              >
                <img
                  src={BenfordImage}
                  width="140"
                  height="165"
                  alt="Benford"
                  className={`${styles[`responsive-image`]}`}
                />
              </Link>
            </li>
            {SIDEBAR_DATA.map((item, index) => {
              return (
                <li key={index} className={`${styles[item.cName]}`}>
                  <Link
                    className={`${styles[`sidebar-link`]}`}
                    to={{
                      pathname: item.path,
                    }}
                    target="_blank"
                    rel="noopener"
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className={`${styles[`nav-text`]} ${styles[`about-author`]}`}>
              <Link
                className={`${styles[`sidebar-link`]}`}
                to={{
                  pathname: "https://github.com/Spreeyka/",
                }}
                target="_blank"
                rel="noopener"
              >
                <SiIcons.SiAboutdotme />
                <span>About author</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
