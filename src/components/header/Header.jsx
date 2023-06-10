import React from "react";
import classes from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import cl from "classnames";

const Header = ({ children }) => {
  const location = useLocation();

  return (
    <header
      className={cl(classes.header, {
        [classes.home_header]: location.pathname === "/",
      })}
    >
      <Link className={classes.link} to={"/"}>
        <h1 className={classes.logo}>
          Вероника <br /> Рокашевич
        </h1>
      </Link>
      {children}
      <div className={classes.lang_switcher}>
        <span>ENG</span>|<span>RU</span>
      </div>
    </header>
  );
};

export default Header;
