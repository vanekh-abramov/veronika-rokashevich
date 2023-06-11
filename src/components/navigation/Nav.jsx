import React from "react";
import classes from "./Nav.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const { t } = useTranslation();
  return (
    <nav className={classes.nav}>
      <Link className={classes.link} to={"/resume"}>
        {t("РЕЗЮМЕ")}
      </Link>
      <Link className={classes.link} to={"/gallery"}>
        {t("ГАЛЕРЕЯ")}
      </Link>
      <Link className={classes.link} to={"/exhibitions"}>
        {t("ВЫСТАВКИ")}
      </Link>
      <Link className={classes.link} to={"/contacts"}>
        {t("КОНТАКТЫ")}
      </Link>
    </nav>
  );
};

export default Nav;
