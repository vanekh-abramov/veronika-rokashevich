import React, { useState } from "react";
import classes from "./Contacts.module.scss";
import cl from "classnames";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [message, setMessage] = useState("");

  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      tel,
      message,
    };
    console.log(data);
  };

  return (
    <div className={classes.contacts_wrapper}>
      <div className={classes.contact_block}>
        <h2 className={classes.title}>{t("КОНТАКТЫ")}</h2>
        <div className={classes.contact_info}>
          <div className={classes.info_string}>
            <p className={cl(classes.info_title)}>{t("Адрес мастреской:")}</p>
            <p className={cl(classes.info_desc, classes.adress)}>
              {t("Беларусь, город Минск, ул. Ленина д.15")}
            </p>
          </div>

          <div className={cl(classes.info_string)}>
            <p className={classes.info_title}>Tel. / Whatsapp:</p>
            <p className={classes.href_cover}>
              <a className={classes.info_desc} href='tel:+375296044160'>
                +375296044160
              </a>
            </p>
          </div>

          <div className={cl(classes.info_string)}>
            <p className={classes.info_title}>Email:</p>
            <p className={classes.href_cover}>
              <a
                className={cl(classes.info_desc, classes.underline)}
                href='mailto:veronikav47@gmail.com'
              >
                veronikav47@gmail.com
              </a>
            </p>
          </div>

          <div className={cl(classes.info_string)}>
            <p className={classes.info_title}>Instagram:</p>
            <p className={classes.href_cover}>
              <a
                className={classes.info_desc}
                href='https://www.instagram.com/veronika_rokashevich/'
              >
                @veronika_rokashevich
              </a>
            </p>
          </div>

          <div className={cl(classes.info_string)}>
            <p className={classes.info_title}>Behance:</p>
            <p className={classes.href_cover}>
              <a
                className={cl(classes.info_desc, classes.underline)}
                href='https://www.behance.net/zojac?tracking_source=search_projects%7Czojac'
              >
                zojac
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className={classes.enquiry_form}>
        <h2 className={classes.title}>{t("ФОРМА ЗАПРОСА")}</h2>

        <form
          className={classes.form}
          onSubmit={handleSubmit}
          action='send.php'
          method='post'
        >
          <input
            onChange={(e) => setName(e.target.value)}
            type='text'
            name='name'
            placeholder={t("ИМЯ")}
            required
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            name='email'
            placeholder={t("Е-МЕЙЛ")}
            required
          />
          <input
            onChange={(e) => setTel(e.target.value)}
            type='tel'
            name='tel'
            placeholder={t("ТЕЛЕФОН")}
            required
          />
          <input
            onChange={(e) => setMessage(e.target.value)}
            type='text'
            name='text'
            placeholder={t("НАПИШИТЕ СООБЩЕНИЕ")}
            required
          />
          <a
            className={classes.button}
            href={`mailto:vanekh.abramov@gmail.com?subject=client&body=${
              "name: " +
              name +
              "email: " +
              email +
              "tel: " +
              tel +
              "message: " +
              message
            }`}
          >
            {t("ОТПРАВИТЬ")}
          </a>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
