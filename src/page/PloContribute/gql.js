import { gql } from "@apollo/client";

export const CONTRIBUTES_BY_PARA_ID = gql`
  query CrowdloanContributeds($paraId: Int!) {
    crowdloanContributeds(filter: { paraId: { equalTo: $paraId } }) {
      totalCount
      nodes {
        timestamp
        balance
      }
    }
  }
`;

export const CONTRIBUTES_BY_ADDRESS_PARA_ID = gql`
query CrowdloanContributeds ($paraId: Int!, $address: String!) {
  crowdloanContributeds(filter: { paraId: { equalTo : $paraId }, and: { who : { equalTo : $address } } }) {
    totalCount
    nodes {
      id
      timestamp
      extrinsicId
      balance
    }
  }
}
`;

export const REFERRAL_CODE_BY_ADDRESS_PARA_ID = gql`
query CrowdloanMemos($paraId: Int!, $address: String!) {
  crowdloanMemos(filter: { paraId: { equalTo: $paraId }, and: { who: { equalTo: $address } }}) {
    totalCount
    nodes {
      memo
    }
  }
 }
`;

export const CONTRIBUTE_PIONEERS = gql`
  query {
    accounts(orderBy: CONTRIBUTED_TOTAL_DESC, first: 10) {
      nodes {
        id
        contributedTotalCount
        contributedTotal
      }
    }
  }
`;

export const gqlCrowdloanWhoStatisticByAddress = (address) => gql`
query {
  crowdloanWhoStatistic(id: "${address}") {
      user
      totalPower
      totalBalance
      contributors (orderBy: TIMESTAMP_DESC) {
        nodes {
          balance
        }
      }
    }
}
`;

export const gqlCrowdloanReferStatisticByReferralCode = (referralCode) => gql`
query {
  crowdloanReferStatistic(id: "${referralCode}") {
      totalPower
      contributors (orderBy: TIMESTAMP_DESC) {
        nodes {
          id
          extrinsicId
          timestamp
          balance
          block
        }
      }
    }
}
`;

export const gqlWhocrowdloanByOffset = (offset) => gql`
  query {
    crowdloanWhoStatistics(orderBy: TOTAL_BALANCE_DESC, first: 10, offset: ${offset}) {
      totalCount
      nodes {
        user
        totalPower
        totalBalance
      }
    }
  }
`;

export const ALL_WHO_CROWDLOAN = gql`
  query {
    crowdloanWhoStatistics(orderBy: TOTAL_BALANCE_DESC) {
      nodes {
        totalPower
      }
    }
  }
`;

export const LIMITED_REFER_CROWDLOAN = gql`
  query {
    crowdloanReferStatistics(orderBy: TOTAL_BALANCE_DESC, first: 20) {
      nodes {
        user
        totalPower
        totalBalance
        contributors {
          nodes {
            id
          }
        }
      }
    }
  }
`;

export const ALL_REFER_CROWDLOAN = gql`
  query {
    crowdloanReferStatistics(orderBy: TOTAL_BALANCE_DESC) {
      nodes {
        user
        totalPower
        totalBalance
        contributors {
          totalCount
        }
      }
    }
  }
`;
