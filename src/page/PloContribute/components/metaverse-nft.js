import React, { useState } from 'react';
import classNames from "classnames/bind";
import styles from "../styles.module.scss";
import Web3Utils from 'web3-utils';
import { web3FromAddress } from "@polkadot/extension-dapp";
import { Tooltip, Modal, Spin, message } from "antd";
import infoIcon from "../img/info-icon.png";
import modalCloseIcon from "../img/modal-close.png";
import acceptIcon from '../img/accept.svg';
import acceptedIcon from '../img/accepted.svg';
import { DOT_TO_ORIG } from "../utils";
import { useApi } from "../hooks";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const GET_MY_ADDRESS_REMARKS = gql`
  query RemarkedNftAddresses($signer: String!) {
    remarkedNftAddresses (filter: { signer: { equalTo: $signer } }, orderBy: [BLOCK_NUMBER_ASC, EXTRINSIC_INDEX_ASC], first: 5) {
      nodes {
        id
        # signer
        # value
        # addressValue
        # blockNumber
        # extrinsicIndex
        # extrinsicTimestamp
        # extrinsicHash
        # https://kusama.subscan.io/extrinsic/11416211-2
        # https://kusama.subscan.io/extrinsic/0x59ffa39f7b6f08c0958f824b140a839e049dda47aa89ea6337257712d4d2e0bd
      }
    }
  }
`;

const cx = classNames.bind(styles);

const isAnAalidCrabAddress = (address) => {
  return Web3Utils.isAddress(address || "");
}

const MetaverseNFT = ({ myTotalContribute, currentAccount }) => {
  const { api } = useApi();
  const [isRemarked, setIsRemarked] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [claimLoading, setClaimLoading] = useState(false);
  const [visibleModalCopyThat, setVisibleModalCopyThat] = useState(false);
  const [visibleModalClaimNFT, setVisibleModalClaimNFT] = useState(false);
  const [nftCrabAddress, setNftCrabAddress] = useState('');

  const { loading, error, data } = useQuery(GET_MY_ADDRESS_REMARKS, {
    variables: { signer: currentAccount ? currentAccount.address : ""},
  });
  error && console.error(error);
  const myRemarked = !loading && !error && data && data.remarkedNftAddresses && data.remarkedNftAddresses.nodes.length ? data.remarkedNftAddresses.nodes[0] : null;

  const handleClickClaim = () => {
    setVisibleModalClaimNFT(true);
  };

  const handleClickAcceptAndClaim = async () => {
    setClaimLoading(true);
    const injector = await web3FromAddress(currentAccount.address);
    api.setSigner(injector.signer);

    try {
      message.info("Please sign and send the transaction in Polkadot extension");

      const mark = `NFT amount: 1; Rewards receiving address: ${nftCrabAddress}`;
      const unsubscribe = await api.tx.system.remark(mark).signAndSend(currentAccount.address, async (result) => {
        if (!result || !result.status) {
          return;
        }
        message.info("Extrinsic processing");

        if (result.status.isFinalized || result.status.isInBlock) {
          unsubscribe();

          result.events
            .filter(({ event: { section } }) => section === "system")
            .forEach((res) => {
              const {
                event: { method },
              } = res;

              if (method === "ExtrinsicFailed") {
                message.error("Extrinsic failed");
              } else if (method === "ExtrinsicSuccess") {
                message.success("Extrinsic success");
                setIsRemarked(true);
                setClaimLoading(false);
                setVisibleModalClaimNFT(false);
                setVisibleModalCopyThat(true);
              }
            });
        }

        if (result.isError) {
          setClaimLoading(false);
          message.error("Extrinsic Failed");
        }
      });
    } catch (err) {
      console.error(err);
      setClaimLoading(false);
      message.error("Extrinsic Failed");
    }
  };

  const handleChangeNftCrabAddress = (e) => {
    setNftCrabAddress(e.target.value);
  }

  return (
    <>
      <div className={cx("contribute-info-item")}>
        <div className={cx("contribute-info-item-title-wrap")}>
          <span className={cx("contribute-info-item-title")}>Metaverse NFT Package</span>
          <Tooltip
            overlayClassName="tooltip-overlay"
            overlayInnerStyle={{ padding: "20px", paddingBottom: "10px" }}
            color="white"
            placement="rightTop"
            trigger={["click", "hover"]}
            title={
              <p className={cx("tips")}>
                You can get an{" "}
                <a target="_blank" rel="noopener noreferrer" href="https://www.evolution.land/">
                  Evolution Land
                </a>{" "}
                Metaverse NFT Package when your contribution share greater or equal 1 KSM and you will have a
                chance to get a limited edition commemorative NFT in the Package.
                <br />
                <br />
                The Metaverse NFT Package will be awarded after the Kusama Slot Auction is terminated
                regardless of whether Crab Network wins the slot auction or not.
              </p>
            }
          >
            <img alt="..." src={infoIcon} className={cx("info-icon")} />
          </Tooltip>
        </div>
        <div className={cx("current-tag", "space")}>
          <span>Current</span>
        </div>
        <span className={cx("contribute-info-item-value")}>
          {myTotalContribute.gte(DOT_TO_ORIG) ? "1" : "0"}
        </span>
        <button className={cx("claim-reward-btn")} disabled={myTotalContribute.lt(DOT_TO_ORIG) || loading || isRemarked || myRemarked || !currentAccount} onClick={handleClickClaim}>
          <Spin wrapperClassName={cx('metaverse-nft-modal-ok-btn-spin')} spinning={loading}>
            <span className={cx('claim-reward-btn-text')}>
              {isRemarked || myRemarked ? 'Claimed' : 'Claim'}
            </span>
          </Spin>
        </button>
      </div>

      <Modal
        visible={visibleModalCopyThat}
        title={null}
        footer={null}
        onCancel={() => setVisibleModalCopyThat(false)}
        closeIcon={<img alt='...' src={modalCloseIcon} />}
        className={cx('metaverse-nft-modal')}
      >
        <div className={cx('metaverse-nft-modal-body')}>
          <h5 className={cx('metaverse-nft-modal-title')}>Copy that!</h5>
          <ul className={cx('metaverse-nft-modal-content')}>
            <li>The reward will be distributed after the Columbus Continent of <a target='_blank' rel='noopener noreferrer' href='https://www.evolution.land'>Evolution Land</a> release.</li>
            <li>Please track the NFT rewards by switching to Columbus Continent of Evolution Land.</li>
            <li>Please feel free to contact us through "<a target='_blank' rel='noopener noreferrer' href='mailto:hello@crab.network'>hello@crab.network</a>" if you have any questions.</li>
          </ul>
          <button className={cx('metaverse-nft-modal-ok-btn', 'metaverse-nft-modal-copy-that-ok-btn')} onClick={() => setVisibleModalCopyThat(false)}>
            <span className={cx('metaverse-nft-modal-ok-btn-text')}>OK</span>
          </button>
        </div>
      </Modal>
      <Modal
        visible={visibleModalClaimNFT}
        title={null}
        footer={null}
        onCancel={() => setVisibleModalClaimNFT(false)}
        closeIcon={<img alt='...' src={modalCloseIcon} />}
        className={cx('metaverse-nft-modal')}
      >
        <div className={cx('metaverse-nft-modal-body')}>
          <h5 className={cx('metaverse-nft-modal-title')}>Claim NFT</h5>
          <ul className={cx('metaverse-nft-modal-content')}>
            <li>The NFT is sent as a reward for your support of Crab Network Crowdloan.</li>
            <li>You need to fill in the correct <a target='_blank' rel='noopener noreferrer' href='https://www.baidu.com'>Crab Smart Chain receiving address</a> starts with “0x”.</li>
            <li>The reward will be distributed after the <a target='_blank' rel='noopener noreferrer' href='https://www.evolution.land/lands'>Columbus Continent</a> of Evolution Land release.</li>
            <li>Please feel free to contact us through "<a target='_blank' rel='noopener noreferrer' href='mailto:hello@crab.network'>hello@crab.network</a>" if you have any questions.</li>
          </ul>
          <div className={cx('metaverse-nft-modal-accept')}>
            <button onClick={() => setIsAccepted(prev => !prev)}><img alt='...' src={isAccepted ? acceptedIcon : acceptIcon} /></button>
            <span>I accept and continue to claim</span>
          </div>
          <div className={cx('metaverse-nft-modal-address-input-wrap')}>
            <input onChange={handleChangeNftCrabAddress} className={cx('metaverse-nft-modal-address-input')} disabled={claimLoading || !isAccepted} placeholder='Please enter your Crab Smart Chain receiving address' />
            <span className={cx('metaverse-nft-modal-address-warning', { 'disbaled': !nftCrabAddress || isAnAalidCrabAddress(nftCrabAddress) })}>Invalid address</span>
          </div>
          <button className={cx('metaverse-nft-modal-ok-btn')} disabled={claimLoading || !isAccepted || !nftCrabAddress || !isAnAalidCrabAddress(nftCrabAddress)} onClick={handleClickAcceptAndClaim}>
            <Spin wrapperClassName={cx('metaverse-nft-modal-ok-btn-spin')} spinning={claimLoading}><span className={cx('metaverse-nft-modal-ok-btn-text')}>I accept and claim</span></Spin>
          </button>
        </div>
      </Modal>
    </>
  );
};

const client = new ApolloClient({
  uri: 'https://api.subquery.network/sq/darwinia-network/crab-plo-nft__ZGFyd',
  cache: new InMemoryCache()
});

const MetaverseNFTWrap = (props) => (
  <ApolloProvider client={client}>
    <MetaverseNFT {...props} />
  </ApolloProvider>
)

export default React.memo(MetaverseNFTWrap);
