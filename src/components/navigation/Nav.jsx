import React from "react";
import classes from "./Nav.module.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <Link className={classes.link} to={"/resume"}>
        РЕЗЮМЕ
      </Link>
      <Link className={classes.link} to={"/gallery"}>
        ГАЛЕРЕЯ
      </Link>
      <Link className={classes.link} to={"/exhibitions"}>
        ВЫСТАВКИ
      </Link>
      <Link className={classes.link} to={"/contacts"}>
        КОНТАКТЫ
      </Link>
    </nav>
  );
};

export default Nav;
