// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class LogCreatFarmPool extends ethereum.Event {
  get params(): LogCreatFarmPool__Params {
    return new LogCreatFarmPool__Params(this);
  }
}

export class LogCreatFarmPool__Params {
  _event: LogCreatFarmPool;

  constructor(event: LogCreatFarmPool) {
    this._event = event;
  }

  get poolId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get creator(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class LogRewardAdded extends ethereum.Event {
  get params(): LogRewardAdded__Params {
    return new LogRewardAdded__Params(this);
  }
}

export class LogRewardAdded__Params {
  _event: LogRewardAdded;

  constructor(event: LogRewardAdded) {
    this._event = event;
  }

  get poolId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get reward(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class LogRewardPaid extends ethereum.Event {
  get params(): LogRewardPaid__Params {
    return new LogRewardPaid__Params(this);
  }
}

export class LogRewardPaid__Params {
  _event: LogRewardPaid;

  constructor(event: LogRewardPaid) {
    this._event = event;
  }

  get poolId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get reward(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class LogRewardToStream extends ethereum.Event {
  get params(): LogRewardToStream__Params {
    return new LogRewardToStream__Params(this);
  }
}

export class LogRewardToStream__Params {
  _event: LogRewardToStream;

  constructor(event: LogRewardToStream) {
    this._event = event;
  }

  get poolId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get streamId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get reward(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class LogStaked extends ethereum.Event {
  get params(): LogStaked__Params {
    return new LogStaked__Params(this);
  }
}

export class LogStaked__Params {
  _event: LogStaked;

  constructor(event: LogStaked) {
    this._event = event;
  }

  get poolId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class LogWithdrawn extends ethereum.Event {
  get params(): LogWithdrawn__Params {
    return new LogWithdrawn__Params(this);
  }
}

export class LogWithdrawn__Params {
  _event: LogWithdrawn;

  constructor(event: LogWithdrawn) {
    this._event = event;
  }

  get poolId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get user(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class FarmPool__getPoolInfoResult {
  value0: Address;
  value1: Address;
  value2: Address;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: BigInt;

  constructor(
    value0: Address,
    value1: Address,
    value2: Address,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromUnsignedBigInt(this.value8));
    return map;
  }
}

export class FarmPool extends ethereum.SmartContract {
  static bind(address: Address): FarmPool {
    return new FarmPool("FarmPool", address);
  }

  halflife(): Address {
    let result = super.call("halflife", "halflife():(address)", []);

    return result[0].toAddress();
  }

  try_halflife(): ethereum.CallResult<Address> {
    let result = super.tryCall("halflife", "halflife():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  nextPoolId(): BigInt {
    let result = super.call("nextPoolId", "nextPoolId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_nextPoolId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("nextPoolId", "nextPoolId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  register(): Address {
    let result = super.call("register", "register():(address)", []);

    return result[0].toAddress();
  }

  try_register(): ethereum.CallResult<Address> {
    let result = super.tryCall("register", "register():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createPool(
    _rewardToken: Address,
    _stakeToken: Address,
    _startBlock: BigInt,
    _rewardsDuration: BigInt,
    _rewardRatio: BigInt,
    _lockRatio: BigInt,
    _halflifeK: BigInt,
    _halflifeRatio: BigInt,
    _creator: Address
  ): BigInt {
    let result = super.call(
      "createPool",
      "createPool(address,address,uint256,uint256,uint256,uint256,uint256,uint256,address):(uint256)",
      [
        ethereum.Value.fromAddress(_rewardToken),
        ethereum.Value.fromAddress(_stakeToken),
        ethereum.Value.fromUnsignedBigInt(_startBlock),
        ethereum.Value.fromUnsignedBigInt(_rewardsDuration),
        ethereum.Value.fromUnsignedBigInt(_rewardRatio),
        ethereum.Value.fromUnsignedBigInt(_lockRatio),
        ethereum.Value.fromUnsignedBigInt(_halflifeK),
        ethereum.Value.fromUnsignedBigInt(_halflifeRatio),
        ethereum.Value.fromAddress(_creator)
      ]
    );

    return result[0].toBigInt();
  }

  try_createPool(
    _rewardToken: Address,
    _stakeToken: Address,
    _startBlock: BigInt,
    _rewardsDuration: BigInt,
    _rewardRatio: BigInt,
    _lockRatio: BigInt,
    _halflifeK: BigInt,
    _halflifeRatio: BigInt,
    _creator: Address
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createPool",
      "createPool(address,address,uint256,uint256,uint256,uint256,uint256,uint256,address):(uint256)",
      [
        ethereum.Value.fromAddress(_rewardToken),
        ethereum.Value.fromAddress(_stakeToken),
        ethereum.Value.fromUnsignedBigInt(_startBlock),
        ethereum.Value.fromUnsignedBigInt(_rewardsDuration),
        ethereum.Value.fromUnsignedBigInt(_rewardRatio),
        ethereum.Value.fromUnsignedBigInt(_lockRatio),
        ethereum.Value.fromUnsignedBigInt(_halflifeK),
        ethereum.Value.fromUnsignedBigInt(_halflifeRatio),
        ethereum.Value.fromAddress(_creator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  totalSupply(poolId: BigInt): BigInt {
    let result = super.call("totalSupply", "totalSupply(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(poolId)
    ]);

    return result[0].toBigInt();
  }

  try_totalSupply(poolId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalSupply",
      "totalSupply(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(poolId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOf(poolId: BigInt, account: Address): BigInt {
    let result = super.call(
      "balanceOf",
      "balanceOf(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(poolId),
        ethereum.Value.fromAddress(account)
      ]
    );

    return result[0].toBigInt();
  }

  try_balanceOf(poolId: BigInt, account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOf",
      "balanceOf(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(poolId),
        ethereum.Value.fromAddress(account)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  lastTimeRewardApplicable(poolId: BigInt): BigInt {
    let result = super.call(
      "lastTimeRewardApplicable",
      "lastTimeRewardApplicable(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(poolId)]
    );

    return result[0].toBigInt();
  }

  try_lastTimeRewardApplicable(poolId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "lastTimeRewardApplicable",
      "lastTimeRewardApplicable(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(poolId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  rewardPerToken(poolId: BigInt): BigInt {
    let result = super.call(
      "rewardPerToken",
      "rewardPerToken(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(poolId)]
    );

    return result[0].toBigInt();
  }

  try_rewardPerToken(poolId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "rewardPerToken",
      "rewardPerToken(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(poolId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  earned(poolId: BigInt, account: Address): BigInt {
    let result = super.call("earned", "earned(uint256,address):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(poolId),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigInt();
  }

  try_earned(poolId: BigInt, account: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("earned", "earned(uint256,address):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(poolId),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getPoolInfo(poolId: BigInt): FarmPool__getPoolInfoResult {
    let result = super.call(
      "getPoolInfo",
      "getPoolInfo(uint256):(address,address,address,uint256,uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(poolId)]
    );

    return new FarmPool__getPoolInfoResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBigInt()
    );
  }

  try_getPoolInfo(
    poolId: BigInt
  ): ethereum.CallResult<FarmPool__getPoolInfoResult> {
    let result = super.tryCall(
      "getPoolInfo",
      "getPoolInfo(uint256):(address,address,address,uint256,uint256,uint256,uint256,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(poolId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new FarmPool__getPoolInfoResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toBigInt()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _register(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class StakeCall extends ethereum.Call {
  get inputs(): StakeCall__Inputs {
    return new StakeCall__Inputs(this);
  }

  get outputs(): StakeCall__Outputs {
    return new StakeCall__Outputs(this);
  }
}

export class StakeCall__Inputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }

  get poolId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class StakeCall__Outputs {
  _call: StakeCall;

  constructor(call: StakeCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get poolId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class GetRewardCall extends ethereum.Call {
  get inputs(): GetRewardCall__Inputs {
    return new GetRewardCall__Inputs(this);
  }

  get outputs(): GetRewardCall__Outputs {
    return new GetRewardCall__Outputs(this);
  }
}

export class GetRewardCall__Inputs {
  _call: GetRewardCall;

  constructor(call: GetRewardCall) {
    this._call = call;
  }

  get poolId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class GetRewardCall__Outputs {
  _call: GetRewardCall;

  constructor(call: GetRewardCall) {
    this._call = call;
  }
}

export class ExitCall extends ethereum.Call {
  get inputs(): ExitCall__Inputs {
    return new ExitCall__Inputs(this);
  }

  get outputs(): ExitCall__Outputs {
    return new ExitCall__Outputs(this);
  }
}

export class ExitCall__Inputs {
  _call: ExitCall;

  constructor(call: ExitCall) {
    this._call = call;
  }

  get poolId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ExitCall__Outputs {
  _call: ExitCall;

  constructor(call: ExitCall) {
    this._call = call;
  }
}

export class CreatePoolCall extends ethereum.Call {
  get inputs(): CreatePoolCall__Inputs {
    return new CreatePoolCall__Inputs(this);
  }

  get outputs(): CreatePoolCall__Outputs {
    return new CreatePoolCall__Outputs(this);
  }
}

export class CreatePoolCall__Inputs {
  _call: CreatePoolCall;

  constructor(call: CreatePoolCall) {
    this._call = call;
  }

  get _rewardToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _stakeToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _startBlock(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _rewardsDuration(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _rewardRatio(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _lockRatio(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get _halflifeK(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get _halflifeRatio(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get _creator(): Address {
    return this._call.inputValues[8].value.toAddress();
  }
}

export class CreatePoolCall__Outputs {
  _call: CreatePoolCall;

  constructor(call: CreatePoolCall) {
    this._call = call;
  }

  get poolId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}
