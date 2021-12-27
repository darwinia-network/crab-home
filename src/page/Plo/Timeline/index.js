import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
import { Container } from "react-bootstrap";
import { Tooltip } from "antd";

import icon from "./img/icon.png";

const cx = classNames.bind(styles);

const TimeToDo = ({ left, right, timeText, timeDesc }) => (
  <div className={cx("time-line-style-03")} style={left ? { left: left } : { left: "auto", right: right }}>
    <span className={cx("the-time")}>{timeText}</span>
    <span className={cx("the-desc")}>{timeDesc}</span>
  </div>
);

const TimeDone = ({ left, right, timeText, timeDesc }) => (
  <div className={cx("time-line-style-03")} style={left ? { left: left } : { left: "auto", right: right }}>
    <div className={cx("time-line-style-04")} />
    <span className={cx("the-time")}>{timeText}</span>
    <span className={cx("the-desc")}>{timeDesc}</span>
  </div>
);

const Timeline = () => {
  return (
    <Container>
      <div className={cx("main")} id="timeline-section">
        <h3 className={cx("title")}>Timeline</h3>
        <div className={cx("time-line-style-01")}>
          <div className={cx("time-line-style-02")}>
            <TimeDone left="5%" timeText="NOV 3 2021" timeDesc="Waitlist Signup" />
            <TimeDone left="19%" timeText="NOV 8 2021" timeDesc="Rewards Plan Release" />
            <TimeDone left="34%" timeText="NOV 11 2021" timeDesc="Batch 1 Auction Starts" />
            <TimeDone left="49%" timeText="NOV 15 2021" timeDesc="Crowdloan Starts" />
            <TimeToDo right="34%" timeText="DEC 23 2021" timeDesc="Batch 2 Auction Starts" />
            <TimeToDo right="19%" timeText="To be determined" timeDesc="Crowdloan Ends" />
            <TimeToDo right="5%" timeText="To be determined" timeDesc="Distribute Rewards" />

            <div className={cx("time-line-style-01-mini")} style={{ left: "30%", right: "30%" }}></div>
            <div className={cx("time-line-style-02-mini")} style={{ left: "35%", right: "35%" }}>
              <div className={cx("pioneers")}>
                <span className={cx("pioneers-content")}>Crowdloan Pioneers & Early Bird</span>
                &nbsp;
                <Tooltip
                  overlayClassName="tooltip-overlay"
                  overlayInnerStyle={{ padding: "20px", paddingBottom: "10px" }}
                  color="white"
                  placement="rightTop"
                  trigger={["click", "hover"]}
                  title={
                    <p className={cx("tips")}>
                      Crowdloan Pioneer: The top 5 of the supporters (exclude the Exchange address) who contribute more
                      than 10,000 DOT within this period will be rewarded to share 1 BTC in proportion to your
                      contribution.
                      <br />
                      <br />
                      Early Bird: The Early Bird reward will be delivered to the supporters who contributed only within
                      this period.
                    </p>
                  }
                >
                  <img alt="..." src={icon} className={cx("icon")} />
                </Tooltip>
              </div>
            </div>
            <div className={cx("time-line-style-03-mini")} style={{ left: "calc(34% + 5px)" }}></div>
            <div className={cx("time-line-style-03-mini")} style={{ left: "auto", right: "calc(34% + 5px)" }}></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default React.memo(Timeline);
