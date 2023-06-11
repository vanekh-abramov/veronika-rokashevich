import React from "react";
import classes from "./Home.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <section className={classes.home}>
      <h1 className={classes.title}>
        {" "}
        {t("СОВРЕМЕННОЕ ИСКУССТВО В ВАШЕМ СЕРДЦЕ")}{" "}
      </h1>
      <p className={classes.sub_title}>
        {t("Самые красивые картины для дома, офиса, галереи")}
      </p>
      <button className={classes.button}>
        <Link className={classes.link} to={"/gallery"}>
          {t("смотреть работы")}
        </Link>
      </button>
    </section>
  );
};

export default Home;
