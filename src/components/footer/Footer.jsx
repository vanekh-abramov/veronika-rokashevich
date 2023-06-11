import React from "react";
import classes from "./Footer.module.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={classes.footer}>
      <p className={classes.footer_text}>
        {t("© 2023 Вероника Рокашевич | Все права защищены")}
      </p>
    </footer>
  );
};

export default Footer;
