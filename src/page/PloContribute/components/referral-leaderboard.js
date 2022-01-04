import {
  formatBalanceFromOrigToDOT,
  KTON_REWARD,
  referralCodeToPolkadotAddress,
  RING_REWARD,
  shortAddress,
} from "../utils";
import Fade from "react-reveal/Fade";
import React, { memo } from "react";
import classNames from "classnames/bind";
import styles from "../styles.module.scss";
import BN from "bn.js";
import Big from "big.js";
import { useQuery } from "@apollo/client";
import { LIMITED_REFER_CROWDLOAN } from "../gql";

const cx = classNames.bind(styles);

const ReferralLeaderboard = ({ globalTotalPower }) => {
  const allReferCrowdloan = useQuery(LIMITED_REFER_CROWDLOAN);

  const referralLeaderboardData = [];
  if (!allReferCrowdloan.loading && !allReferCrowdloan.error) {
    if (
      allReferCrowdloan.data &&
      allReferCrowdloan.data.crowdloanReferStatistics &&
      allReferCrowdloan.data.crowdloanReferStatistics.nodes &&
      allReferCrowdloan.data.crowdloanReferStatistics.nodes.length
    ) {
      allReferCrowdloan.data.crowdloanReferStatistics.nodes.forEach((node) => {
        const nodeTotalPowerBN = new BN(node.totalPower);
        const contributePer = Big(nodeTotalPowerBN.toString()).div(globalTotalPower.toString());

        referralLeaderboardData.push({
          address: referralCodeToPolkadotAddress(node.user),
          referrals: node.contributors.nodes.length,
          accumulatedContribution: node.totalBalance,
          referralRewards: {
            ring: contributePer.mul(RING_REWARD),
            kton: contributePer.mul(KTON_REWARD),
          },
        });
      });
    }
  }

  return (
    <Fade bottom fraction={0.1} duration={1000} distance={"50px"}>
      <div className={cx("referral-leaderboard")}>
        <h3 className={cx("referral-leaderboard-title")}>Referral Leaderboard</h3>
        <div className={cx("referral-leaderboard-control")}>
          <div className={cx("referral-leaderboard-item")}>
            <span className={cx("referral-leaderboard-item-rank")}>Rank</span>
            <span className={cx("referral-leaderboard-item-address")}>Address</span>
            <span className={cx("referral-leaderboard-item-referrals")}>Referrals</span>
            <span className={cx("referral-leaderboard-item-accumulated")}>Accumulated Contribution</span>
            <span className={cx("referral-leaderboard-item-rewards")}>Referral Rewards</span>
          </div>

          {referralLeaderboardData.length ? (
            referralLeaderboardData.map((data, index) => (
              <div className={cx("referral-leaderboard-item")} key={index}>
                <div className={cx("referral-leaderboard-item-rank")}>
                  <div className={cx({ rank: index < 5, rank2: 5 <= index && index < 99, rank3: 99 <= index })}>
                    <span>{index + 1}</span>
                  </div>
                </div>
                <a
                  className={cx("referral-leaderboard-item-address")}
                  style={{ color: "#488CCB" }}
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`https://polkadot.subscan.io/account/${data.address}`}
                >
                  {shortAddress(data.address)}
                </a>
                <span className={cx("referral-leaderboard-item-referrals")}>{data.referrals}</span>
                <span className={cx("referral-leaderboard-item-accumulated")}>
                  {formatBalanceFromOrigToDOT(data.accumulatedContribution)} KSM
                </span>
                <div className={cx("referral-leaderboard-item-rewards")}>
                  <span>{data.referralRewards.ring.toFixed(2)} CRAB</span>
                  <span>{data.referralRewards.kton.toFixed(2)} CKTON</span>
                </div>
              </div>
            ))
          ) : (
            <div style={{ marginTop: "20px", textAlign: "center" }}>No Data</div>
          )}
        </div>
      </div>
    </Fade>
  );
};

export default memo(ReferralLeaderboard);
