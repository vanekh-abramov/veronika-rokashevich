import React, { useState } from "react";
import classes from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";
import cl from "classnames";
import { useTranslation } from "react-i18next";

const Header = ({ children, windowWidth }) => {
  const [burger, setBurger] = useState(false);

  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  const burgerToggle = () => {
    setBurger((prev) => !prev);
  };

  const burgerClose = () => {
    setBurger(false);
  };

  return (
    <>
      {burger === true ? (
        <div className={classes.absolute_burger}>
          <div onClick={burgerClose} className={classes.close_burger}></div>
          <nav className={classes.nav}>
            <Link onClick={burgerClose} className={classes.link} to={"/resume"}>
              {t("РЕЗЮМЕ")}
            </Link>
            <Link
              onClick={burgerClose}
              className={classes.link}
              to={"/gallery"}
            >
              {t("ГАЛЕРЕЯ")}
            </Link>
            <Link
              onClick={burgerClose}
              className={classes.link}
              to={"/exhibitions"}
            >
              {t("ВЫСТАВКИ")}
            </Link>
            <Link
              onClick={burgerClose}
              className={classes.link}
              to={"/contacts"}
            >
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
            <span>ENG</span>
            <span className={classes.stick}> |</span>

            {/* <div className={classes.stick}></div> */}
            <span>RU</span>
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
            <span>ENG</span>
            <span className={classes.stick}> |</span>

            {/* <div className={classes.stick}></div> */}
            <span>RU</span>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
