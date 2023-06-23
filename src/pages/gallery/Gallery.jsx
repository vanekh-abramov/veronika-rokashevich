import React, { useEffect, useState } from "react";
import classes from "./Gallery.module.scss";
import axios from "axios";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://strapi-demo-app-oc62.onrender.com/api/galleries?[populate]=*"
      )
      .then((res) => {
        setData(res.data);
        return data;
      });
  }, []);

  return (
    <div className={classes.gallery_wrapper}>
      {data?.data?.map((el) => (
        <Link key={el.id} to={"/subgallery/" + el.id}>
          <img
            src={el?.attributes?.image?.data?.[0]?.attributes?.url}
            alt='gallery'
          />
          <div className={classes.name}>
            <p className={classes.name_text}>{el?.attributes?.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Gallery;
