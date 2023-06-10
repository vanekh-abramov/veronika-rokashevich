import React from "react";
import classes from "./Resume.module.scss";
import svImage from "../../assets/pictures/cv.jpg";
import first from "../../assets/pictures/cv1.jpg";
import second from "../../assets/pictures/cv2.jpg";
import third from "../../assets/pictures/cv3.jpg";
import fours from "../../assets/pictures/cv4.jpg";
import fifth from "../../assets/pictures/cv5.jpg";
import cl from "classnames";

const Resume = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <h2 className={classes.cv_title}>Резюме</h2>
        <h3 className={classes.sv_subtitle}>Биография художника</h3>
        <div className={classes.cv_inner}>
          <img className={classes.cv_image} src={svImage} alt='' />
          <div className={classes.text_inner}>
            <p className={classes.description}>
              Вероника Рокашевич - художница абстракционистка, родилась в 1994г.
              в Минске, Беларусь. Художница рисует с 3х лет, с детства тяготела
              к ярким цветам и необычным формам. По образованию -
              архитектор-дизайнер, но всегда отдавала предпочтение современной
              абстрактной живописи. Свой стиль называет «рефлексивная
              абстракция» - передача эмоционального состояния через
              саморефлексию на холсты. Художница использует в своих работах
              круглые холсты, акрил и маркеры. Так же снимается в
              видео-перформансах, в которых создает картины в необычных
              локациях.
            </p>
            <p className={classes.graduates}>
              • В 2018г окончила БНТУ, АФ по специальности Архитектор - дизайнер{" "}
              <br />• В 2019г окончила магистратуру БНТУ, Архитектурного
              факультета <br />• С 2019г по 2022г работала художницей в
              американском бренде товаров для творчества «Arteza»
            </p>
          </div>
        </div>
      </div>

      <div className={classes.wrapper_second}>
        <h2 className={classes.cv_title}>ЗАЯВЛЕНИЕ ХУДОЖНИКА</h2>
        <div className={classes.collection_images}>
          <img
            className={cl(classes.first_img, classes.image)}
            src={first}
            alt=''
          />
          <div className={classes.sec_part}>
            <img
              className={cl(classes.sec_img, classes.image)}
              src={second}
              alt=''
            />
            <img
              className={cl(classes.third_img, classes.image)}
              src={third}
              alt=''
            />
          </div>
        </div>
        <p className={classes.public_text}>
          <span>Художницу</span> интересует <span>процесс рефлексии</span> в
          творчестве. <span>Психология</span> , нейробиология, архитектоника и
          опыт <span>самопознания</span> через{" "}
          <span>терапию дает возможность</span> тонко чувствовать{" "}
          <span>вибрации</span> окружения и <span>внутренние</span> изменения{" "}
          <span>художницы</span>, чтобы потом <span>перенести</span> их{" "}
          <span>на холст.</span>{" "}
        </p>
      </div>
      <div className={classes.wrapper_third}>
        <img className={classes.bot_image} src={fours} alt='' />
        <p className={classes.bot_image_text}>
          Для обозначения свой стилистики использует понятие «рефлексивной
          абстракции» - переосмысление человеческой активности через призму
          самосознания. Реализует свои творческие задумки с помощью круглых
          холстов, дсп, акрила, маркеров, неоновых лент и экспериментирует со
          смешенными техниками. Изучает влияние цвета на психофизическое
          состояние человека.
        </p>
        <img className={classes.bot_image_sec} src={fifth} alt='' />
      </div>
      <div className={classes.interview_section}>
        <h2 className={classes.interview_title}>Интервью</h2>
        <ul className={classes.interview_list}>
          <li className={classes.interview_item}>
            2020г прямой эфир на радио Культура
          </li>
          <li className={classes.interview_item}>
            2018г прямой эфир на радио Культура
          </li>
          <li className={classes.interview_item}>
            2017г интервью для портала kyky.org
          </li>
          <li className={classes.interview_item}>
            2017г документация выставки в Борисове на телеканале ООО СВЕТЛОЕ ТВ{" "}
          </li>
        </ul>
      </div>
      <div className={classes.interview_section}>
        <h2 className={classes.interview_title}>Сотрудничество с галереями</h2>
        <ul className={classes.interview_list}>
          <li className={classes.interview_item}>DK gallery</li>
          <li className={classes.interview_item}>Gallarty.ru</li>
          <li className={classes.interview_item}>Chrysalismag.by</li>
          <li className={classes.interview_item}>Collabex.tida.ws</li>
          <li className={classes.interview_item}>Artcenter.by</li>
        </ul>
      </div>
    </>
  );
};

export default Resume;
