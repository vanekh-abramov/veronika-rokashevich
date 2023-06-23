import React, { useEffect, useState } from "react";
import classes from "./Exhibition.module.scss";
import { exhibitions } from "../../data/exhibitions";
import { useTranslation } from "react-i18next";
import i18n from "../../settings/i18next";
import axios from "axios";

const Exhibitions = () => {
  const { t } = useTranslation();

  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://strapi-demo-app-oc62.onrender.com/api/exhibitions?locale=${i18n.language}`
      )
      .then((res) => {
        setData(res.data);
        return data;
      });
  }, [i18n.language]);

  const mapping = data?.data?.map((i) => i?.attributes);
  console.log(mapping);
  console.log(i18n.language);

  return (
    <div className={classes.exhibition_container}>
      <h2 className={classes.exhibition_title}>{t("ИЗБРАННЫЕ")}</h2>
      <div className={classes.exhibition_block}>
        {data?.data?.map(({ attributes }, key) => (
          <div key={key} className={classes.exhibition_string}>
            <p className={classes.date}>{attributes.title}</p>
            <p className={classes.desc}>{attributes.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exhibitions;
