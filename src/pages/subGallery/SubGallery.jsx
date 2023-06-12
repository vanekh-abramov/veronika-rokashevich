import React, { useEffect, useState } from "react";
import classes from "./SubGallery.module.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import { host } from "../../assets/links/host";

const SubGallery = () => {
  const [data, setData] = useState();

  const params = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/galleries?populate=deep,3")
      .then((res) => {
        setData(res.data);
        return data;
      });
  }, []);

  let result = data?.data?.map((el) => el?.attributes?.subcollections);

  const additional = result?.[params.id - 1].data?.map(
    (image) => image?.attributes
  );

  return (
    <div className={classes.subgallery_wrapper}>
      {additional?.map((el) => {
        return (
          <div className={classes.image_box}>
            <img src={host + el?.image?.data?.[0]?.attributes?.url} alt='' />
            <div className={classes.sub_image}>
              <p className={classes.title}>{el.title}</p>
              <p className={classes.param}>{el.size}</p>
              <p className={classes.param}>{el.texture}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SubGallery;
