import { BigInt } from "@graphprotocol/graph-ts"
import {
    FarmFactory,
    LogCreateFarmPool,
    LogCreateSpotPool,
    LogCreateToken
} from "../generated/FarmFactory/FarmFactory"
import { FarmPool, OpenFarm,StatPool,TemplateAToken } from "../generated/schema"
import { ZERO_BD } from './helpers'

export function handleLogCreateFarmPool(event: LogCreateFarmPool): void {
    let openFarm = OpenFarm.load('1')

    if (openFarm == null) {
        openFarm = new OpenFarm('1')
        openFarm.totalFarmCount = BigInt.fromI32(0)
        openFarm.totalErc20Count = BigInt.fromI32(0)
    }
    openFarm.totalFarmCount = openFarm.totalFarmCount.plus(BigInt.fromI32(1))
    openFarm.save()
    let farmPool = new FarmPool(event.params.farmId.toHexString())
    farmPool.farmPoolId=event.params.farmId;
    farmPool.spotPoolId=event.params.stakeToken.toHexString();
    farmPool.rewardsToken=event.params.rewardToken.toHexString();
    farmPool.stakingToken=event.params.stakeToken.toHexString();
    farmPool.creater=event.params.creator.toHexString();
    farmPool.startBlock=event.params.startBlock;
    farmPool.endBlock=event.params.startBlock.plus(event.params.rewardsDuration);
    farmPool.rewardsDuration=event.params.rewardsDuration;
    farmPool.rewardRatio=event.params.rewardRatio;
    farmPool.totalSupply=BigInt.fromI32(0);
    farmPool.unlockRatio=event.params.lockRatio;
    farmPool.halflifeK=event.params.halflifeK;
    farmPool.halflifeRatio=event.params.halflifeRatio;
    farmPool.tx=event.transaction.hash;

    farmPool.save();
}

export function handleLogCreateSpotPool(event: LogCreateSpotPool): void { 
    let statPool=new StatPool("")
    statPool.spotPoolId=event.params.pool.toHexString();
    statPool.creater=event.params.creator.toHexString();
    statPool.save();
}

export function handleLogCreateToken(event: LogCreateToken): void {
    let openFarm = OpenFarm.load('1')

    if (openFarm == null) {
        openFarm = new OpenFarm('1')
        openFarm.totalFarmCount = BigInt.fromI32(0)
        openFarm.totalErc20Count = BigInt.fromI32(0)
    }
    openFarm.totalErc20Count = openFarm.totalErc20Count.plus(BigInt.fromI32(1))
    openFarm.save()
    let templateAToken = new TemplateAToken(event.params.token.toHexString())
    templateAToken.symbol=event.params.symbol.toString()
    templateAToken.name=event.params.name.toString()
    templateAToken.decimals=event.params.decimals
    templateAToken.address=event.params.token
    templateAToken.totalSupply=event.params.totalSupply
    templateAToken.issuer=event.params.creator
    templateAToken.timestamp=event.block.timestamp
    templateAToken.save() 
}
