import React from "react";
import classes from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import cl from "classnames";
import { useTranslation } from "react-i18next";

const Header = ({ children }) => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <header
      className={cl(classes.header, {
        [classes.home_header]: location.pathname === "/",
      })}
    >
      <Link className={classes.link} to={"/"}>
        <h1 className={classes.logo}>{t(`Вероника Рокашевич`)}</h1>
      </Link>
      {children}
      <div onClick={toggleLanguage} className={classes.lang_switcher}>
        <span>ENG</span>|<span>RU</span>
      </div>
    </header>
  );
};

export default Header;
