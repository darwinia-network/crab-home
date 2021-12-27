import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Container, Form, FormControl } from "react-bootstrap";

import darwiniaIcon from "./img/darwinia.png";
import twitterIcon from "./img/twitter.png";
import mediumIcon from "./img/medium.png";
import telegramIcon from "./img/telegram.png";
import discordIcon from "./img/discord.png";

const cx = classNames.bind(styles);

const Waitlist = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <Container>
      <div className={cx("main")} id="waitlist-section">
        <img alt="..." src={darwiniaIcon} className={cx("darwinia-icon")} />
        <div className={cx("right-part")}>
          <h3 className={cx("join-the-waitlist")}>Join the waitlist</h3>
          <p className={cx("desc-join")}>
            Get alerted when our auction is about to start & receive emails for important updates and events.
          </p>
          <Form
            action="https://network.us6.list-manage.com/subscribe/post?u=eb1c779b75a344e2d52755879&amp;id=70a65557b6"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
            className={cx("input-wrap")}
          >
            <div className={cx("mc-field-group", "input-email")}>
              <FormControl
                type="email"
                className="required email"
                defaultValue=""
                id="mce-EMAIL"
                name="EMAIL"
                placeholder="Enter your email"
                aria-label="Enter your email"
                aria-describedby="Enter your email"
                style={{ borderRadius: "10px" }}
              />
              <div
                htmlFor="mce-EMAIL"
                style={{ display: "none" }}
                className={`mce_inline_error text-muted ${styles.mailtip}`}
              />
            </div>
            <button className={cx("join-btn")} type="submit">
              <span>Join</span>
            </button>
            <Form.Text
              id="mce-error-response"
              className={`text-muted hidden-xs ${styles.mailtip}`}
              style={{ display: "none" }}
            ></Form.Text>
            <Form.Text
              id="mce-success-response"
              className={`text-muted hidden-xs ${styles.mailtip}`}
              style={{ display: "none" }}
            ></Form.Text>
          </Form>
          <p className={cx("desc-input")}>
            By submitting your email, you are consenting to receive future emails from Darwinia Network.
          </p>
          <div className={cx("contact-list")}>
            <a
              rel="noopener noreferrer"
              target="_blank"
              className={cx("contact-link")}
              href="https://twitter.com/DarwiniaNetwork"
            >
              <img alt="..." src={twitterIcon} />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              className={cx("contact-link")}
              href="https://darwinianetwork.medium.com/"
            >
              <img alt="..." src={mediumIcon} />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              className={cx("contact-link")}
              href="https://t.me/DarwiniaNetwork"
            >
              <img alt="..." src={telegramIcon} />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              className={cx("contact-link")}
              href="https://discord.com/channels/456092011347443723/795384466930663434"
            >
              <img alt="..." src={discordIcon} />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default React.memo(Waitlist);
