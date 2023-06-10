import React from "react";
import classes from "./Home.module.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className={classes.home}>
      <h1 className={classes.title}> СОВРЕМЕННОЕ ИСКУССТВО В ВАШЕМ СЕРДЦЕ </h1>
      <p className={classes.sub_title}>
        Самые красивые картины для дома, офиса, галереи
      </p>
      <button className={classes.button}>
        <Link className={classes.link} to={"/gallery"}>
          смотреть работы
        </Link>
      </button>
    </section>
  );
};

export default Home;
