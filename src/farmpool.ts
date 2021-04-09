import { BigInt } from "@graphprotocol/graph-ts"
import {
    FarmPool,
    LogRewardAdded,
    LogStaked,
    LogWithdrawn,
    LogRewardPaid,
    LogRewardToStream
} from "../generated/FarmPool/FarmPool"
import { OpenFarm } from "../generated/schema"
import { ZERO_BD } from './helpers'

export function handleLogRewardAdded(event: LogRewardAdded): void { }

export function handleLogStaked(event: LogStaked): void { }

export function handleLogWithdrawn(event: LogWithdrawn): void { }

export function handleLogRewardPaid(event: LogRewardPaid): void { }

export function handleLogRewardToStream(event: LogRewardToStream): void { }
