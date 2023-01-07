package types

import kaiju "github.com/petri-labs/kaiju/types"

const (
	StakingRewardVestingName = "staking_reward_vesting"
	CommunityPoolVestingName = "community_pool_vesting"
	TeamVestingName          = "team_vesting"

	// Strate reserve pool controlled by governance.
	// Not used now, maybe future.
	StrategicReservePoolName = "strategic_reserve_pool"

	StakingRewardVestingTime = kaiju.SecondsPer4Years
	CommunityPoolVestingTime = kaiju.SecondsPer4Years
	TeamVestingTime          = kaiju.SecondsPer4Years

	ClaimVestedPeriod = 10
)
