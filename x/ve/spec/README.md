---
order: 0
title: VE Overview
parent:
  title: "ve"
---

# `x/ve`

## Abstract

This document specifies the ve module of Kaiju.

The ve module is responsible for providing voting escrow capability and distributing KAIJU to ve holders and gauge target
audiences each cycle according to the established distribution algorithm.

### ve NFT and veID

KAIJU holders lock their KAIJU amount to the ve module account for a specific duration, and create a **NFT** token (or
namely **ve**) which represents their locked amount and locking time. Every user can own several ve NFTs, each with its
own locked amount and locking time.

Every NFT or ve owns its unique **ID**, i.e., **veID**. veID is a nonzero integer, and it has the string representation
which
adds prefix `ve-` to the number. For example, for veID `100`, we can call it `ve-100`.

The locking time is in **weeks**, with a minimum of 1 week and a maximum of almost 4 years (**209 weeks** to be exact).
As the locking deadline approaches, holders can extend the locking time also in weeks for their ve.

### Voting Power

The locked amount and the **remaining** locking time together determine the voting power of users who hold the given ve.

```
VotingPower = LockedAmount * RemainingLockingTime / <209 Weeks>
```

That is, if a user locks 100 $KAIJU for 209 weeks, he will gain a voting power of 100. If he only locks for 1 week, the
voting power will be `100 / 209 = 0.478469`.

As time elapse, the voting power will decay continuously. For the above example, if the locking time is 209 weeks and
1/4 of it has elapsed, the voting power will decay to `100 * (3 / 4) = 75`.

The essence of voting power owned by ve holders is to measure not only the amount of the locked tokens, but also the **value of time**.

### Reward Emission and Compensation
