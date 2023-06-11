import React, { useEffect, useState } from "react";
import classes from "./Resume.module.scss";
import svImage from "../../assets/pictures/cv.jpg";
import first from "../../assets/pictures/cv1.jpg";
import second from "../../assets/pictures/cv2.jpg";
import third from "../../assets/pictures/cv3.jpg";
import fours from "../../assets/pictures/cv4.jpg";
import fifth from "../../assets/pictures/cv5.jpg";
import cl from "classnames";
import { useTranslation } from "react-i18next";

const Resume = () => {
  const [windowWidth, setWindowWidth] = useState(
    document.documentElement.clientWidth
  );

  useEffect(() => {
    window.onresize = () => {
      setWindowWidth(document.documentElement.clientWidth);
    };
  }, [windowWidth]);

  const { t } = useTranslation();

  return (
    <>
      <div className={classes.wrapper}>
        <h2 className={classes.cv_title}>{t("Резюме")}</h2>
        <h3 className={classes.sv_subtitle}>{t("Биография художника")}</h3>
        <div className={classes.cv_inner}>
          <img className={classes.cv_image} src={svImage} alt='' />
          <div className={classes.text_inner}>
            <p className={classes.description}>
              {t(
                "Вероника Рокашевич - художница абстракционистка, родилась в 1994г. в Минске, Беларусь.  Художница рисует с 3х лет, с детства тяготела к ярким цветам и необычным формам. По образованию - архитектор-дизайнер, но всегда отдавала предпочтение современной абстрактной живописи. Свой стиль называет «рефлексивная абстракция» - передача эмоционального состояния через саморефлексию на холсты. Художница использует в своих работах круглые холсты, акрил и маркеры. Так же снимается в видео-перформансах, в которых создает картины в необычных локациях."
              )}
            </p>
            <p className={classes.graduates}>
              {t(
                "• В 2018г окончила БНТУ, АФ по специальности Архитектор - дизайнер"
              )}{" "}
              <br />{" "}
              {t(
                "• В 2019г окончила магистратуру БНТУ, Архитектурного факультета "
              )}{" "}
              <br />{" "}
              {t(
                "• С 2019г по 2022г работала художницей в американском бренде товаров для творчества «Arteza»"
              )}
            </p>
          </div>
        </div>
      </div>

      <div className={classes.wrapper_second}>
        <h2 className={classes.cv_title}>{t("ЗАЯВЛЕНИЕ ХУДОЖНИКА")}</h2>
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
          <span>{t("Художницу")}</span> {t("интересует")}{" "}
          <span>{t("процесс рефлексии")}</span> {t("в творчестве. ")}
          <span>{t("Психология")}</span> ,{" "}
          {t("нейробиология, архитектоника и опыт")}{" "}
          <span>{t("самопознания")}</span> {t("через")}{" "}
          <span>{t("терапию дает возможность")}</span> {t("тонко чувствовать")}{" "}
          <span>{t("вибрации")}</span> {t("окружения и")}{" "}
          <span>{t("внутренние")}</span> {t("изменения")}{" "}
          <span>{t("художницы")}</span>, {t("чтобы потом")}{" "}
          <span>{t("перенести")}</span> {t("их")} <span>{t("на холст")}.</span>{" "}
        </p>
      </div>
      {windowWidth > 1150 ? (
        <div className={classes.wrapper_third}>
          <img className={classes.bot_image} src={fours} alt='' />
          <p className={classes.bot_image_text}>
            {t(
              "Для обозначения свой стилистики использует понятие «рефлексивной абстракции» - переосмысление человеческой активности через призму самосознания. Реализует свои творческие задумки с помощью круглых холстов, дсп, акрила, маркеров, неоновых лент и экспериментирует со смешенными техниками. Изучает влияние цвета на психофизическое состояние человека."
            )}
          </p>
          <img className={classes.bot_image_sec} src={fifth} alt='' />
        </div>
      ) : (
        <div className={classes.wrapper_third_ww}>
          <div src='' alt='' className={classes.img_wrapper_ww}>
            <img className={classes.bot_image_ww} src={fours} alt='' />
            <img className={classes.bot_image_sec_ww} src={fifth} alt='' />
          </div>
          <p className={classes.bot_image_text_ww}>
            {t(
              "Для обозначения свой стилистики использует понятие «рефлексивной абстракции» - переосмысление человеческой активности через призму самосознания. Реализует свои творческие задумки с помощью круглых холстов, дсп, акрила, маркеров, неоновых лент и экспериментирует со смешенными техниками. Изучает влияние цвета на психофизическое состояние человека."
            )}
          </p>
        </div>
      )}

      <div className={classes.interview_section}>
        <h2 className={classes.interview_title}>{t("Интервью")}</h2>
        <ul className={classes.interview_list}>
          <li className={classes.interview_item}>
            {t("2020г прямой эфир на радио Культура")}
          </li>
          <li className={classes.interview_item}>
            {t("2018г прямой эфир на радио Культура")}
          </li>
          <li className={classes.interview_item}>
            {t("2017г интервью для портала kyky.org")}
          </li>
          <li className={classes.interview_item}>
            {t(
              "2017г документация выставки в Борисове на телеканале ООО СВЕТЛОЕ ТВ"
            )}{" "}
          </li>
        </ul>
      </div>
      <div className={classes.interview_section}>
        <h2 className={classes.interview_title}>
          {t("Сотрудничество с галереями")}
        </h2>
        <ul className={classes.interview_list}>
          <li className={classes.interview_item}>{t("DK gallery")}</li>
          <li className={classes.interview_item}>{t("Gallarty.ru")}</li>
          <li className={classes.interview_item}>{t("Chrysalismag.by")}</li>
          <li className={classes.interview_item}>{t("Collabex.tida.ws")}</li>
          <li className={classes.interview_item}>{t("Artcenter.by")}</li>
        </ul>
      </div>
    </>
  );
};

export default Resume;
