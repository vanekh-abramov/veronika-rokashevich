import React from "react";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.footer_text}>
        © 2023 Veronika Rokashevich | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
