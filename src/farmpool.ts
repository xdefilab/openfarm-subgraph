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
    let farmPool =FarmPool.load(event.params.poolId.toHexString())
    if (farmPool==null){
        return
    }
    let farmStake=FarmStake.load("");
    if (farmStake == null) {
        farmStake=new FarmStake("");
        farmStake.userAddress=event.params.user;
        farmStake.farmPoolId=event.params.poolId;
        farmStake.amount=BigInt.fromI32(0);
    }
    farmStake.amount=farmStake.amount.plus(event.params.amount)
    farmStake.save();
    farmPool.totalSupply=farmPool.totalSupply.plus(event.params.amount)
    farmPool.save() 
}

export function handleLogWithdrawn(event: LogWithdrawn): void { 
    let farmPool =FarmPool.load(event.params.poolId.toHexString())
    if (farmPool==null){
        return
    }
    let farmStake=FarmStake.load("");
    if (farmStake == null) {
        return
    }
    farmStake.amount=farmStake.amount.minus(event.params.amount)
    farmStake.save();
    farmPool.totalSupply=farmPool.totalSupply.minus(event.params.amount)
    farmPool.save() 
}

export function handleLogRewardPaid(event: LogRewardPaid): void {

}

export function handleLogRewardToStream(event: LogRewardToStream): void {
    let rewardSteam=RewardStream.load("");
    if (rewardSteam==null){
        rewardSteam=new RewardStream("");
        rewardSteam.streamId=event.params.streamId;
        rewardSteam.userAddress=event.params.user;
        rewardSteam.farmPoolId=event.params.poolId;
        rewardSteam.amount=BigInt.fromI32(0);
    }
    rewardSteam.amount=rewardSteam.amount.puls(event.params.reward);
    rewardSteam.save();
}
