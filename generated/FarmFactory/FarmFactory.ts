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

export class LogCreateFarmPool extends ethereum.Event {
  get params(): LogCreateFarmPool__Params {
    return new LogCreateFarmPool__Params(this);
  }
}

export class LogCreateFarmPool__Params {
  _event: LogCreateFarmPool;

  constructor(event: LogCreateFarmPool) {
    this._event = event;
  }

  get creator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get farmId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class LogCreateSpotPool extends ethereum.Event {
  get params(): LogCreateSpotPool__Params {
    return new LogCreateSpotPool__Params(this);
  }
}

export class LogCreateSpotPool__Params {
  _event: LogCreateSpotPool;

  constructor(event: LogCreateSpotPool) {
    this._event = event;
  }

  get creator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get pool(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class LogCreateToken extends ethereum.Event {
  get params(): LogCreateToken__Params {
    return new LogCreateToken__Params(this);
  }
}

export class LogCreateToken__Params {
  _event: LogCreateToken;

  constructor(event: LogCreateToken) {
    this._event = event;
  }

  get creator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get token(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class FarmFactory__createPoolAndFarmInputParamsStruct extends ethereum.Tuple {
  get rewardToken(): Address {
    return this[0].toAddress();
  }

  get startBlock(): BigInt {
    return this[1].toBigInt();
  }

  get rewardsDuration(): BigInt {
    return this[2].toBigInt();
  }

  get rewardRatio(): BigInt {
    return this[3].toBigInt();
  }

  get lockRatio(): BigInt {
    return this[4].toBigInt();
  }

  get halflifeK(): BigInt {
    return this[5].toBigInt();
  }

  get halflifeRatio(): BigInt {
    return this[6].toBigInt();
  }
}

export class FarmFactory extends ethereum.SmartContract {
  static bind(address: Address): FarmFactory {
    return new FarmFactory("FarmFactory", address);
  }

  createdFarmPools(param0: Address): boolean {
    let result = super.call(
      "createdFarmPools",
      "createdFarmPools(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_createdFarmPools(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "createdFarmPools",
      "createdFarmPools(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  createdTokens(param0: Bytes): boolean {
    let result = super.call("createdTokens", "createdTokens(bytes32):(bool)", [
      ethereum.Value.fromFixedBytes(param0)
    ]);

    return result[0].toBoolean();
  }

  try_createdTokens(param0: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "createdTokens",
      "createdTokens(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  userFarmPools(param0: Address, param1: BigInt): BigInt {
    let result = super.call(
      "userFarmPools",
      "userFarmPools(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_userFarmPools(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "userFarmPools",
      "userFarmPools(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  userTokens(param0: Address, param1: BigInt): Address {
    let result = super.call(
      "userTokens",
      "userTokens(address,uint256):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toAddress();
  }

  try_userTokens(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "userTokens",
      "userTokens(address,uint256):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  userXPools(param0: Address, param1: BigInt): Address {
    let result = super.call(
      "userXPools",
      "userXPools(address,uint256):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toAddress();
  }

  try_userXPools(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "userXPools",
      "userXPools(address,uint256):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  xdex(): Address {
    let result = super.call("xdex", "xdex():(address)", []);

    return result[0].toAddress();
  }

  try_xdex(): ethereum.CallResult<Address> {
    let result = super.tryCall("xdex", "xdex():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createToken(
    name: string,
    symbol: string,
    decimals: i32,
    totalSupply: BigInt
  ): Address {
    let result = super.call(
      "createToken",
      "createToken(string,string,uint8,uint256):(address)",
      [
        ethereum.Value.fromString(name),
        ethereum.Value.fromString(symbol),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(decimals)),
        ethereum.Value.fromUnsignedBigInt(totalSupply)
      ]
    );

    return result[0].toAddress();
  }

  try_createToken(
    name: string,
    symbol: string,
    decimals: i32,
    totalSupply: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createToken",
      "createToken(string,string,uint8,uint256):(address)",
      [
        ethereum.Value.fromString(name),
        ethereum.Value.fromString(symbol),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(decimals)),
        ethereum.Value.fromUnsignedBigInt(totalSupply)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createXPool(
    factoryAddress: Address,
    tokens: Array<Address>,
    balances: Array<BigInt>,
    denorms: Array<BigInt>,
    swapFee: BigInt,
    exitFee: BigInt
  ): Address {
    let result = super.call(
      "createXPool",
      "createXPool(address,address[],uint256[],uint256[],uint256,uint256):(address)",
      [
        ethereum.Value.fromAddress(factoryAddress),
        ethereum.Value.fromAddressArray(tokens),
        ethereum.Value.fromUnsignedBigIntArray(balances),
        ethereum.Value.fromUnsignedBigIntArray(denorms),
        ethereum.Value.fromUnsignedBigInt(swapFee),
        ethereum.Value.fromUnsignedBigInt(exitFee)
      ]
    );

    return result[0].toAddress();
  }

  try_createXPool(
    factoryAddress: Address,
    tokens: Array<Address>,
    balances: Array<BigInt>,
    denorms: Array<BigInt>,
    swapFee: BigInt,
    exitFee: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "createXPool",
      "createXPool(address,address[],uint256[],uint256[],uint256,uint256):(address)",
      [
        ethereum.Value.fromAddress(factoryAddress),
        ethereum.Value.fromAddressArray(tokens),
        ethereum.Value.fromUnsignedBigIntArray(balances),
        ethereum.Value.fromUnsignedBigIntArray(denorms),
        ethereum.Value.fromUnsignedBigInt(swapFee),
        ethereum.Value.fromUnsignedBigInt(exitFee)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  createFarmPool(
    rewardToken: Address,
    stakeToken: Address,
    startBlock: BigInt,
    rewardsDuration: BigInt,
    rewardRatio: BigInt,
    lockRatio: BigInt,
    halflifeK: BigInt,
    halflifeRatio: BigInt
  ): BigInt {
    let result = super.call(
      "createFarmPool",
      "createFarmPool(address,address,uint256,uint256,uint256,uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(rewardToken),
        ethereum.Value.fromAddress(stakeToken),
        ethereum.Value.fromUnsignedBigInt(startBlock),
        ethereum.Value.fromUnsignedBigInt(rewardsDuration),
        ethereum.Value.fromUnsignedBigInt(rewardRatio),
        ethereum.Value.fromUnsignedBigInt(lockRatio),
        ethereum.Value.fromUnsignedBigInt(halflifeK),
        ethereum.Value.fromUnsignedBigInt(halflifeRatio)
      ]
    );

    return result[0].toBigInt();
  }

  try_createFarmPool(
    rewardToken: Address,
    stakeToken: Address,
    startBlock: BigInt,
    rewardsDuration: BigInt,
    rewardRatio: BigInt,
    lockRatio: BigInt,
    halflifeK: BigInt,
    halflifeRatio: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createFarmPool",
      "createFarmPool(address,address,uint256,uint256,uint256,uint256,uint256,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(rewardToken),
        ethereum.Value.fromAddress(stakeToken),
        ethereum.Value.fromUnsignedBigInt(startBlock),
        ethereum.Value.fromUnsignedBigInt(rewardsDuration),
        ethereum.Value.fromUnsignedBigInt(rewardRatio),
        ethereum.Value.fromUnsignedBigInt(lockRatio),
        ethereum.Value.fromUnsignedBigInt(halflifeK),
        ethereum.Value.fromUnsignedBigInt(halflifeRatio)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  createPoolAndFarm(
    factoryAddress: Address,
    tokens: Array<Address>,
    balances: Array<BigInt>,
    denorms: Array<BigInt>,
    swapFee: BigInt,
    exitFee: BigInt,
    params: FarmFactory__createPoolAndFarmInputParamsStruct
  ): BigInt {
    let result = super.call(
      "createPoolAndFarm",
      "createPoolAndFarm(address,address[],uint256[],uint256[],uint256,uint256,(address,uint256,uint256,uint256,uint256,uint256,uint256)):(uint256)",
      [
        ethereum.Value.fromAddress(factoryAddress),
        ethereum.Value.fromAddressArray(tokens),
        ethereum.Value.fromUnsignedBigIntArray(balances),
        ethereum.Value.fromUnsignedBigIntArray(denorms),
        ethereum.Value.fromUnsignedBigInt(swapFee),
        ethereum.Value.fromUnsignedBigInt(exitFee),
        ethereum.Value.fromTuple(params)
      ]
    );

    return result[0].toBigInt();
  }

  try_createPoolAndFarm(
    factoryAddress: Address,
    tokens: Array<Address>,
    balances: Array<BigInt>,
    denorms: Array<BigInt>,
    swapFee: BigInt,
    exitFee: BigInt,
    params: FarmFactory__createPoolAndFarmInputParamsStruct
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "createPoolAndFarm",
      "createPoolAndFarm(address,address[],uint256[],uint256[],uint256,uint256,(address,uint256,uint256,uint256,uint256,uint256,uint256)):(uint256)",
      [
        ethereum.Value.fromAddress(factoryAddress),
        ethereum.Value.fromAddressArray(tokens),
        ethereum.Value.fromUnsignedBigIntArray(balances),
        ethereum.Value.fromUnsignedBigIntArray(denorms),
        ethereum.Value.fromUnsignedBigInt(swapFee),
        ethereum.Value.fromUnsignedBigInt(exitFee),
        ethereum.Value.fromTuple(params)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
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

export class CreateTokenCall extends ethereum.Call {
  get inputs(): CreateTokenCall__Inputs {
    return new CreateTokenCall__Inputs(this);
  }

  get outputs(): CreateTokenCall__Outputs {
    return new CreateTokenCall__Outputs(this);
  }
}

export class CreateTokenCall__Inputs {
  _call: CreateTokenCall;

  constructor(call: CreateTokenCall) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get symbol(): string {
    return this._call.inputValues[1].value.toString();
  }

  get decimals(): i32 {
    return this._call.inputValues[2].value.toI32();
  }

  get totalSupply(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class CreateTokenCall__Outputs {
  _call: CreateTokenCall;

  constructor(call: CreateTokenCall) {
    this._call = call;
  }

  get token(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class CreateXPoolCall extends ethereum.Call {
  get inputs(): CreateXPoolCall__Inputs {
    return new CreateXPoolCall__Inputs(this);
  }

  get outputs(): CreateXPoolCall__Outputs {
    return new CreateXPoolCall__Outputs(this);
  }
}

export class CreateXPoolCall__Inputs {
  _call: CreateXPoolCall;

  constructor(call: CreateXPoolCall) {
    this._call = call;
  }

  get factoryAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokens(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get balances(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get denorms(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get swapFee(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get exitFee(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }
}

export class CreateXPoolCall__Outputs {
  _call: CreateXPoolCall;

  constructor(call: CreateXPoolCall) {
    this._call = call;
  }

  get pool(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class CreateFarmPoolCall extends ethereum.Call {
  get inputs(): CreateFarmPoolCall__Inputs {
    return new CreateFarmPoolCall__Inputs(this);
  }

  get outputs(): CreateFarmPoolCall__Outputs {
    return new CreateFarmPoolCall__Outputs(this);
  }
}

export class CreateFarmPoolCall__Inputs {
  _call: CreateFarmPoolCall;

  constructor(call: CreateFarmPoolCall) {
    this._call = call;
  }

  get rewardToken(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get stakeToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get startBlock(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get rewardsDuration(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get rewardRatio(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get lockRatio(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get halflifeK(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get halflifeRatio(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }
}

export class CreateFarmPoolCall__Outputs {
  _call: CreateFarmPoolCall;

  constructor(call: CreateFarmPoolCall) {
    this._call = call;
  }

  get farmId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CreatePoolAndFarmCall extends ethereum.Call {
  get inputs(): CreatePoolAndFarmCall__Inputs {
    return new CreatePoolAndFarmCall__Inputs(this);
  }

  get outputs(): CreatePoolAndFarmCall__Outputs {
    return new CreatePoolAndFarmCall__Outputs(this);
  }
}

export class CreatePoolAndFarmCall__Inputs {
  _call: CreatePoolAndFarmCall;

  constructor(call: CreatePoolAndFarmCall) {
    this._call = call;
  }

  get factoryAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokens(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get balances(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get denorms(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get swapFee(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get exitFee(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get params(): CreatePoolAndFarmCallParamsStruct {
    return this._call.inputValues[6].value.toTuple() as CreatePoolAndFarmCallParamsStruct;
  }
}

export class CreatePoolAndFarmCall__Outputs {
  _call: CreatePoolAndFarmCall;

  constructor(call: CreatePoolAndFarmCall) {
    this._call = call;
  }

  get farmId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CreatePoolAndFarmCallParamsStruct extends ethereum.Tuple {
  get rewardToken(): Address {
    return this[0].toAddress();
  }

  get startBlock(): BigInt {
    return this[1].toBigInt();
  }

  get rewardsDuration(): BigInt {
    return this[2].toBigInt();
  }

  get rewardRatio(): BigInt {
    return this[3].toBigInt();
  }

  get lockRatio(): BigInt {
    return this[4].toBigInt();
  }

  get halflifeK(): BigInt {
    return this[5].toBigInt();
  }

  get halflifeRatio(): BigInt {
    return this[6].toBigInt();
  }
}
