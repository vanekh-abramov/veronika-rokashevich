import React, { useEffect, useState } from "react";
import classes from "./Gallery.module.scss";
import axios from "axios";
import { host, local } from "../../assets/links/host";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/galleries?[populate]=*")
      .then((res) => {
        setData(res.data);
        return data;
      });
  }, []);

  return (
    <div className={classes.gallery_wrapper}>
      {data?.data?.map((el) =>
        el?.attributes?.link.data.map((i) => (
          <Link key={el.id} to={local + "/subgallery/" + el.id}>
            <img src={host + i?.attributes.url} alt='gallery' />
            <div className={classes.name}>
              <p className={classes.name_text}>{el?.attributes?.title}</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default Gallery;
