import React, { useEffect, useState, useRef } from "react";
import classes from "./SubGallery.module.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import { host } from "../../assets/links/host";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const SubGallery = () => {
  const [data, setData] = useState();
  const [open, setOpen] = useState(false);

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

  const openToggle = () => {
    setOpen(true);
  };

  const closeToggle = () => {
    setOpen(false);
  };

  return (
    <>
      {open ? (
        <div className={classes.absolute_wrapper}>
          <Swiper
            pagination={{
              type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className='mySwiper'
          >
            {additional?.map((el) => {
              return (
                <div className={classes.image_box}>
                  <SwiperSlide key={el?.image?.data?.[0]?.attributes?.url}>
                    <img
                      className={classes.slider_image}
                      onClick={openToggle}
                      src={host + el?.image?.data?.[0]?.attributes?.url}
                      alt=''
                    />
                    <div className={classes.sub_image}>
                      <p className={classes.title}>{el.title}</p>
                      <p className={classes.param}>{el.size}</p>
                      <p className={classes.param}>{el.texture}</p>
                    </div>
                  </SwiperSlide>
                </div>
              );
            })}
            <div onClick={closeToggle} className={classes.close_swiper}></div>
          </Swiper>
        </div>
      ) : (
        <div className={classes.subgallery_wrapper}>
          {additional?.map((el) => {
            return (
              <div className={classes.image_box}>
                <img
                  onClick={openToggle}
                  src={host + el?.image?.data?.[0]?.attributes?.url}
                  alt=''
                />
                <div className={classes.sub_image}>
                  <p className={classes.title}>{el.title}</p>
                  <p className={classes.param}>{el.size}</p>
                  <p className={classes.param}>{el.texture}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SubGallery;
