import {
    BigDecimal,
    Address,
    BigInt,
    Bytes,
    dataSource,
    ethereum
} from '@graphprotocol/graph-ts'
import { log } from '@graphprotocol/graph-ts'

export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')

let network = dataSource.network()
