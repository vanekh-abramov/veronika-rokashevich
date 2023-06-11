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
  let sourse = result?.[params.id - 1].data?.map(
    (image) => image?.attributes?.image?.data[0]?.attributes?.url
  );
  console.log(sourse);
  // console.log(data?.data?.map((el) => el?.attributes?.subcollections));

  return (
    <div className={classes.subgallery_wrapper}>
      <div>
        {sourse?.map((url) => (
          <img src={host + url} alt='sa' />
        ))}
      </div>
    </div>
  );
};

export default SubGallery;
