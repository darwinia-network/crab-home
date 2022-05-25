# Query

https://explorer.subquery.network/subquery/darwinia-network/home-plo-kusama

> crowdloanContributeds.json

```
query {
  crowdloanContributeds (filter: { paraId: { equalTo: 2105 } }) {
    totalCount
    nodes {
      id
      timestamp
      balance
      extrinsicId
      who
    }
  }
}
```

> crowdloanMemos.json

```
query {
  crowdloanMemos (filter: { paraId: {equalTo: 2105} }) {
    totalCount
    nodes {
      who
      memo
    }
  }
}
```

> crowdloanWhoStatistics.json

```
query {
  crowdloanWhoStatistics (orderBy: TOTAL_BALANCE_DESC) {
    totalCount
    nodes {
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
}
```

> crowdloanReferStatistics.json

```
query {
	crowdloanReferStatistics (orderBy: TOTAL_BALANCE_DESC) {
    totalCount
    nodes {
      user
      totalPower
      totalBalance
      contributors (orderBy: TIMESTAMP_DESC) {
        nodes {
          id
          extrinsicId
          timestamp
          block
          balance
        }
      }
    }
  }
}
```
