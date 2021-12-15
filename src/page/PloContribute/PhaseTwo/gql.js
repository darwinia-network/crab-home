import { gql } from "@apollo/client";

export const gqlContributesByParaId = (paraId) => gql`
  query {
    events(filter: { method: { equalTo: "Contributed" }, and: { data: { includes: ",${paraId}," } } }) {
      totalCount
      nodes {
        timestamp
        data
      }
    }
  }
`;

export const gqlSomeOneContributesByAddressAndParaId = (address, paraId) =>
  gql`
query {
  extrinsics(
    filter: {
      signerId: { equalTo: "${address}" }
    }
  ) {
    totalCount
    nodes {
      events(
        filter:{
          method:{equalTo: "Contributed"}
          and: {
            data: {
              includes: ",${paraId},"
            }
          }
        }) {
        nodes {
          id
          extrinsicId
          timestamp
          data
        }
      }
    }
  }
}
`;

export const gqlReferralsOfSomeOneByAddressAndParaId = (referralCode, paraId) =>
  gql`
query {
  events(
   filter:{
     method:{ equalTo:"MemoUpdated"}
     and: {
       data: {
         includes: ",${paraId},\\"${referralCode}\\""
       }
     }
   }
 ){
     totalCount
     nodes {
       data
     }
   }
 }
`;

export const gqlGetReferralCodeOfSomeOneByAddressAndParaId = (address, paraId) =>
  gql`
query {
  events(
   filter:{
     method:{ equalTo:"MemoUpdated"}
     and: {
       data: {
         includes: "\\"${address}\\",${paraId},"
       }
     }
   }
 ){
     totalCount
     nodes {
       data
     }
   }
 }
`;

export const CONTRIBUTE_PIONEERS = gql`
  query {
    accounts(orderBy: CONTRIBUTED_TOTAL_DESC, first: 10) {
      nodes {
        id
        transferTotalCount
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
          id
          who
          refer
          balance
          powerWho
          powerRefer
          timestamp
          block {
            number
            extrinsics (filter: { method: { equalTo: "batch" } })  {
              nodes {
                events (filter: { method: { equalTo: "Contributed" } }) {
                  nodes {
                    extrinsicId
                    index
                  }
                }
              }
            }
          }
        }
      }
    }
}
`;

export const gqlCrowdloanReferStatisticByReferralCode = (referralCode) => gql`
query {
  crowdloanReferStatistic(id: "${referralCode}") {
      contributors (orderBy: TIMESTAMP_DESC) {
        nodes {
          timestamp
          balance
          block {
            number
            extrinsics (filter: { method: { equalTo: "batch" } })  {
              nodes {
                events (filter: { method: { equalTo: "Contributed" } }) {
                  nodes {
                    extrinsicId
                    index
                  }
                }
              }
            }
          }
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
      }
    }
  }
`;
