import { BigInt } from "@graphprotocol/graph-ts"
import {
    Contract,
    LogCreateFarmPool,
    LogCreateSpotPool,
    LogCreateToken
} from "../generated/Contract/Contract"
import { OpenFarm } from "../generated/schema"
import { ZERO_BD } from './helpers'

export function handleLogCreateFarmPool(event: LogCreateFarmPool): void {
    let openFarm = OpenFarm.load('1')

    if (openFarm == null) {
        openFarm = new OpenFarm('1')
        openFarm.totalFarmCount = ZERO_BD
        openFarm.totalErc20Count = ZERO_BD
    }
    openFarm.totalFarmCount = openFarm.totalFarmCount + BigInt.fromI32(1)
    openFarm.save()
}

export function handleLogCreateSpotPool(event: LogCreateSpotPool): void { }

export function handleLogCreateToken(event: LogCreateToken): void {
    let openFarm = OpenFarm.load('1')

    if (openFarm == null) {
        openFarm = new OpenFarm('1')
        openFarm.totalFarmCount = ZERO_BD
        openFarm.totalErc20Count = ZERO_BD
    }
    openFarm.totalErc20Count = openFarm.totalErc20Count + BigInt.fromI32(1)
    openFarm.save()
}
