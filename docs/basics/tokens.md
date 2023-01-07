---
order: 5
---

# Tokens

Learn about the different types of native tokens/coins available in Kaiju. {synopsis}

## Native Coins

The two native coin types of Kaiju are **Black** and **Kaiju**:

- **Black**: Stablecoins that track the price of fiat currencies, and they are named for their fiat counterparts. In the
  early stage of the mainnet launch, it will mainly issue **BlackUSD**, or **FUSD**, which tracks/pegs the price of $USD.
- **Kaiju**: Native staking coin that partially absorbs the price volatility of Black. Users stake Kaiju to validators to
  add blocks of transactions to the blockchain, and earn various fees and rewards. Holders of Kaiju also can vote on
  proposals and participate in on-chain governance. And Kaiju is also used for gas consumption for running smart
  contracts on the EVM.

Kaiju uses [Atto](https://en.wikipedia.org/wiki/Atto-) Kaiju or `akaiju` as the base denomination to maintain parity
with Ethereum.

```
1 kaiju = 1 * 1e18 akaiju
```

And the base denomination of Black is `uusd`.

```
1 BlackUSD = 1 FUSD = 1 * 1e6 uusd
```

## Other Cosmos Coins

Accounts can own Cosmos SDK coins in their balance, which are used for operations with other Cosmos modules and
transactions. Example of these are IBC vouchers.

## ERC-20 Tokens

Any ERC-20 tokens are natively supported by the EVM of Kaiju.
