import { BigInt } from "@graphprotocol/graph-ts"
import {
    // FarmPool,
    LogRewardAdded,
    LogStaked,
    LogWithdrawn,
    LogRewardPaid,
    LogRewardToStream
} from "../generated/FarmPool/FarmPool"
import { OpenFarm,FarmStake,FarmPool,RewardStream} from "../generated/schema"
import { ZERO_BD } from './helpers'

export function handleLogRewardAdded(event: LogRewardAdded): void {}

export function handleLogStaked(event: LogStaked): void { 
    let farmPool =FarmPool.load(event.params.poolId.toString())
    if (farmPool==null){
        return
    }
    let farmStake=FarmStake.load(event.params.poolId.toString()+"_"+event.params.user.toHexString());
    if (farmStake == null) {
        farmStake=new FarmStake(event.params.poolId.toString()+"_"+event.params.user.toHexString());
        farmStake.userAddress=event.params.user.toHex();
        farmStake.farmPoolId=event.params.poolId.toString();
        farmStake.amount=ZERO_BD;
    }
    farmStake.amount=farmStake.amount.plus(event.params.amount.toBigDecimal())
    farmStake.save();
    farmPool.totalSupply=farmPool.totalSupply.plus(event.params.amount)
    farmPool.save() 
}

export function handleLogWithdrawn(event: LogWithdrawn): void { 
    let farmPool =FarmPool.load(event.params.poolId.toString())
    if (farmPool==null){
        return
    }
    let farmStake=FarmStake.load(event.params.poolId.toString()+"_"+event.params.user.toHexString());
    if (farmStake == null) {
        return
    }
    farmStake.amount=farmStake.amount.minus(event.params.amount.toBigDecimal())
    farmStake.save();
    farmPool.totalSupply=farmPool.totalSupply.minus(event.params.amount)
    farmPool.save() 
}

export function handleLogRewardPaid(event: LogRewardPaid): void {

}

export function handleLogRewardToStream(event: LogRewardToStream): void {
    let rewardSteam=RewardStream.load(event.params.streamId.toString());
    if (rewardSteam==null){
        rewardSteam=new RewardStream(event.params.streamId.toString());
        rewardSteam.streamId=event.params.streamId;
        rewardSteam.userAddress=event.params.user.toHex();
        rewardSteam.farmPoolId=event.params.poolId.toString();
        rewardSteam.amount=ZERO_BD;
    }
    rewardSteam.amount=rewardSteam.amount.plus(event.params.reward.toBigDecimal());
    rewardSteam.save();
}
