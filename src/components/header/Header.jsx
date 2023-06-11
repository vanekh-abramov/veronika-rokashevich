import React, { useEffect, useState } from "react";
import classes from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import cl from "classnames";
import { useTranslation } from "react-i18next";

const Header = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(
    document.documentElement.clientWidth
  );

  const [burger, setBurger] = useState(false);

  useEffect(() => {
    window.onresize = () => {
      setWindowWidth(document.documentElement.clientWidth);
    };
  }, [windowWidth]);

  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  const burgerToggle = () => {
    setBurger((prev) => !prev);
  };

  return (
    <>
      {burger === true ? (
        <div className={classes.absolute_burger}>
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
        </div>
      ) : (
        <></>
      )}
      {windowWidth < 1100 ? (
        <header
          className={cl(classes.header, {
            [classes.home_header]: location.pathname === "/",
          })}
        >
          <div
            className={cl({
              [classes.burger_open]: !burger,
            })}
            onClick={burgerToggle}
          ></div>
          <Link className={classes.link} to={"/"}>
            <h1 className={classes.logo}>{t(`Вероника Рокашевич`)}</h1>
          </Link>
          <div onClick={toggleLanguage} className={classes.lang_switcher}>
            <span>ENG</span>|<span>RU</span>
          </div>
        </header>
      ) : (
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
      )}
    </>
  );
};

export default Header;
