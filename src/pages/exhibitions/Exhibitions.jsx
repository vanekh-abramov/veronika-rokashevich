import React from "react";
import classes from "./Exhibition.module.scss";
import { exhibitions } from "../../data/exhibitions";

const Exhibitions = () => {
  return (
    <div className={classes.exhibition_container}>
      <h2 className={classes.exhibition_title}>ИЗБРАННЫЕ</h2>
      <div className={classes.exhibition_block}>
        {exhibitions.map(({ date, desc }, key) => (
          <div key={key} className={classes.exhibition_string}>
            <p className={classes.date}>{date}</p>
            <p className={classes.desc}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exhibitions;
