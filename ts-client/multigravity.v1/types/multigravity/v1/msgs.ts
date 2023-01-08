/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../cosmos/base/v1beta1/coin";
import { Any } from "../../google/protobuf/any";
import { MsgSetOrchestratorAddress, MsgSetOrchestratorAddressResponse } from "../../gravity/v1/msgs";
import { BridgeValidator } from "../../gravity/v1/types";

export const protobufPackage = "multigravity.v1";

/**
 * MsgValsetConfirm
 * this is the message sent by the validators when they wish to submit their
 * signatures over the validator set at a given block height. A validator must
 * first call MsgSetEthAddress to set their Ethereum address to be used for
 * signing. Then someone (anyone) must make a ValsetRequest, the request is
 * essentially a messaging mechanism to determine which block all validators
 * should submit signatures over. Finally validators sign the validator set,
 * powers, and Ethereum addresses of the entire validator set at the height of a
 * ValsetRequest and submit that signature with this message.
 *
 * If a sufficient number of validators (66% of voting power) (A) have set
 * Ethereum addresses and (B) submit ValsetConfirm messages with their
 * signatures it is then possible for anyone to view these signatures in the
 * chain store and submit them to Ethereum to update the validator set
 * -------------
 */
export interface MsgValsetConfirm {
  nonce: number;
  orchestrator: string;
  ethAddress: string;
  signature: string;
  chainIdentifier: string;
}

export interface MsgValsetConfirmResponse {
}

/**
 * MsgSendToEth
 * This is the message that a user calls when they want to bridge an asset
 * it will later be removed when it is included in a batch and successfully
 * submitted tokens are removed from the users balance immediately
 * -------------
 * AMOUNT:
 * the coin to send across the bridge, note the restriction that this is a
 * single coin not a set of coins that is normal in other Cosmos messages
 * FEE:
 * the fee paid for the bridge, distinct from the fee paid to the chain to
 * actually send this message in the first place. So a successful send has
 * two layers of fees for the user
 */
export interface MsgSendToEth {
  sender: string;
  ethDest: string;
  amount: Coin | undefined;
  bridgeFee: Coin | undefined;
  chainIdentifier: string;
}

export interface MsgSendToEthResponse {
}

/**
 * MsgRequestBatch
 * this is a message anyone can send that requests a batch of transactions to
 * send across the bridge be created for whatever block height this message is
 * included in. This acts as a coordination point, the handler for this message
 * looks at the AddToOutgoingPool tx's in the store and generates a batch, also
 * available in the store tied to this message. The validators then grab this
 * batch, sign it, submit the signatures with a MsgConfirmBatch before a relayer
 * can finally submit the batch
 * -------------
 */
export interface MsgRequestBatch {
  sender: string;
  denom: string;
  chainIdentifier: string;
}

export interface MsgRequestBatchResponse {
}

/**
 * MsgConfirmBatch
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmBatch {
  nonce: number;
  tokenContract: string;
  ethSigner: string;
  orchestrator: string;
  signature: string;
  chainIdentifier: string;
}

export interface MsgConfirmBatchResponse {
}

/**
 * MsgConfirmLogicCall
 * When validators observe a MsgRequestBatch they form a batch by ordering
 * transactions currently in the txqueue in order of highest to lowest fee,
 * cutting off when the batch either reaches a hardcoded maximum size (to be
 * decided, probably around 100) or when transactions stop being profitable
 * (TODO determine this without nondeterminism) This message includes the batch
 * as well as an Ethereum signature over this batch by the validator
 * -------------
 */
export interface MsgConfirmLogicCall {
  invalidationId: string;
  invalidationNonce: number;
  ethSigner: string;
  orchestrator: string;
  signature: string;
  chainIdentifier: string;
}

export interface MsgConfirmLogicCallResponse {
}

/**
 * MsgSendToCosmosClaim
 * When more than 66% of the active validator set has
 * claimed to have seen the deposit enter the ethereum blockchain coins are
 * issued to the Cosmos address in question
 * -------------
 */
export interface MsgSendToCosmosClaim {
  eventNonce: number;
  blockHeight: number;
  tokenContract: string;
  amount: string;
  ethereumSender: string;
  cosmosReceiver: string;
  orchestrator: string;
  chainIdentifier: string;
}

export interface MsgSendToCosmosClaimResponse {
}

/**
 * MsgExecuteIbcAutoForwards
 * Prompts the forwarding of Pending IBC Auto-Forwards in the queue
 * The Pending forwards will be executed in order of their original SendToCosmos.EventNonce
 * The funds in the queue will be sent to a local gravity-prefixed address if IBC transfer is not possible
 */
export interface MsgExecuteIbcAutoForwards {
  /** How many queued forwards to clear, be careful about gas limits */
  forwardsToClear: number;
  /** This message's sender */
  executor: string;
  chainIdentifier: string;
}

export interface MsgExecuteIbcAutoForwardsResponse {
}

/**
 * BatchSendToEthClaim claims that a batch of send to eth
 * operations on the bridge contract was executed.
 */
export interface MsgBatchSendToEthClaim {
  eventNonce: number;
  blockHeight: number;
  batchNonce: number;
  tokenContract: string;
  orchestrator: string;
  chainIdentifier: string;
}

export interface MsgBatchSendToEthClaimResponse {
}

/**
 * ERC20DeployedClaim allows the Cosmos module
 * to learn about an ERC20 that someone deployed
 * to represent a Cosmos asset
 */
export interface MsgERC20DeployedClaim {
  eventNonce: number;
  blockHeight: number;
  cosmosDenom: string;
  tokenContract: string;
  name: string;
  symbol: string;
  decimals: number;
  orchestrator: string;
  chainIdentifier: string;
}

export interface MsgERC20DeployedClaimResponse {
}

/**
 * This informs the Cosmos module that a logic
 * call has been executed
 */
export interface MsgLogicCallExecutedClaim {
  eventNonce: number;
  blockHeight: number;
  invalidationId: Uint8Array;
  invalidationNonce: number;
  orchestrator: string;
  chainIdentifier: string;
}

export interface MsgLogicCallExecutedClaimResponse {
}

/**
 * This informs the Cosmos module that a validator
 * set has been updated.
 */
export interface MsgValsetUpdatedClaim {
  eventNonce: number;
  valsetNonce: number;
  blockHeight: number;
  members: BridgeValidator[];
  rewardAmount: string;
  rewardToken: string;
  orchestrator: string;
  chainIdentifier: string;
}

export interface MsgValsetUpdatedClaimResponse {
}

/**
 * This call allows the sender (and only the sender)
 * to cancel a given MsgSendToEth and recieve a refund
 * of the tokens
 */
export interface MsgCancelSendToEth {
  transactionId: number;
  sender: string;
  chainIdentifier: string;
}

export interface MsgCancelSendToEthResponse {
}

/**
 * This call allows anyone to submit evidence that a
 * validator has signed a valset, batch, or logic call that never
 * existed on the Cosmos chain.
 * Subject contains the batch, valset, or logic call.
 */
export interface MsgSubmitBadSignatureEvidence {
  subject: Any | undefined;
  signature: string;
  sender: string;
  chainIdentifier: string;
}

export interface MsgSubmitBadSignatureEvidenceResponse {
}

function createBaseMsgValsetConfirm(): MsgValsetConfirm {
  return { nonce: 0, orchestrator: "", ethAddress: "", signature: "", chainIdentifier: "" };
}

export const MsgValsetConfirm = {
  encode(message: MsgValsetConfirm, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nonce !== 0) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.orchestrator !== "") {
      writer.uint32(18).string(message.orchestrator);
    }
    if (message.ethAddress !== "") {
      writer.uint32(26).string(message.ethAddress);
    }
    if (message.signature !== "") {
      writer.uint32(34).string(message.signature);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(42).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetConfirm {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValsetConfirm();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.orchestrator = reader.string();
          break;
        case 3:
          message.ethAddress = reader.string();
          break;
        case 4:
          message.signature = reader.string();
          break;
        case 5:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgValsetConfirm {
    return {
      nonce: isSet(object.nonce) ? Number(object.nonce) : 0,
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
      ethAddress: isSet(object.ethAddress) ? String(object.ethAddress) : "",
      signature: isSet(object.signature) ? String(object.signature) : "",
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: MsgValsetConfirm): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
    message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
    message.ethAddress !== undefined && (obj.ethAddress = message.ethAddress);
    message.signature !== undefined && (obj.signature = message.signature);
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgValsetConfirm>, I>>(object: I): MsgValsetConfirm {
    const message = createBaseMsgValsetConfirm();
    message.nonce = object.nonce ?? 0;
    message.orchestrator = object.orchestrator ?? "";
    message.ethAddress = object.ethAddress ?? "";
    message.signature = object.signature ?? "";
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseMsgValsetConfirmResponse(): MsgValsetConfirmResponse {
  return {};
}

export const MsgValsetConfirmResponse = {
  encode(_: MsgValsetConfirmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValsetConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgValsetConfirmResponse {
    return {};
  },

  toJSON(_: MsgValsetConfirmResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgValsetConfirmResponse>, I>>(_: I): MsgValsetConfirmResponse {
    const message = createBaseMsgValsetConfirmResponse();
    return message;
  },
};

function createBaseMsgSendToEth(): MsgSendToEth {
  return { sender: "", ethDest: "", amount: undefined, bridgeFee: undefined, chainIdentifier: "" };
}

export const MsgSendToEth = {
  encode(message: MsgSendToEth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.ethDest !== "") {
      writer.uint32(18).string(message.ethDest);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.bridgeFee !== undefined) {
      Coin.encode(message.bridgeFee, writer.uint32(34).fork()).ldelim();
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(42).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToEth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToEth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.ethDest = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.bridgeFee = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendToEth {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      ethDest: isSet(object.ethDest) ? String(object.ethDest) : "",
      amount: isSet(object.amount) ? Coin.fromJSON(object.amount) : undefined,
      bridgeFee: isSet(object.bridgeFee) ? Coin.fromJSON(object.bridgeFee) : undefined,
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: MsgSendToEth): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.ethDest !== undefined && (obj.ethDest = message.ethDest);
    message.amount !== undefined && (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.bridgeFee !== undefined && (obj.bridgeFee = message.bridgeFee ? Coin.toJSON(message.bridgeFee) : undefined);
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendToEth>, I>>(object: I): MsgSendToEth {
    const message = createBaseMsgSendToEth();
    message.sender = object.sender ?? "";
    message.ethDest = object.ethDest ?? "";
    message.amount = (object.amount !== undefined && object.amount !== null)
      ? Coin.fromPartial(object.amount)
      : undefined;
    message.bridgeFee = (object.bridgeFee !== undefined && object.bridgeFee !== null)
      ? Coin.fromPartial(object.bridgeFee)
      : undefined;
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseMsgSendToEthResponse(): MsgSendToEthResponse {
  return {};
}

export const MsgSendToEthResponse = {
  encode(_: MsgSendToEthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToEthResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToEthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendToEthResponse {
    return {};
  },

  toJSON(_: MsgSendToEthResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendToEthResponse>, I>>(_: I): MsgSendToEthResponse {
    const message = createBaseMsgSendToEthResponse();
    return message;
  },
};

function createBaseMsgRequestBatch(): MsgRequestBatch {
  return { sender: "", denom: "", chainIdentifier: "" };
}

export const MsgRequestBatch = {
  encode(message: MsgRequestBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.denom !== "") {
      writer.uint32(18).string(message.denom);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(26).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestBatch {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: MsgRequestBatch): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.denom !== undefined && (obj.denom = message.denom);
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestBatch>, I>>(object: I): MsgRequestBatch {
    const message = createBaseMsgRequestBatch();
    message.sender = object.sender ?? "";
    message.denom = object.denom ?? "";
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseMsgRequestBatchResponse(): MsgRequestBatchResponse {
  return {};
}

export const MsgRequestBatchResponse = {
  encode(_: MsgRequestBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRequestBatchResponse {
    return {};
  },

  toJSON(_: MsgRequestBatchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestBatchResponse>, I>>(_: I): MsgRequestBatchResponse {
    const message = createBaseMsgRequestBatchResponse();
    return message;
  },
};

function createBaseMsgConfirmBatch(): MsgConfirmBatch {
  return { nonce: 0, tokenContract: "", ethSigner: "", orchestrator: "", signature: "", chainIdentifier: "" };
}

export const MsgConfirmBatch = {
  encode(message: MsgConfirmBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nonce !== 0) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.tokenContract !== "") {
      writer.uint32(18).string(message.tokenContract);
    }
    if (message.ethSigner !== "") {
      writer.uint32(26).string(message.ethSigner);
    }
    if (message.orchestrator !== "") {
      writer.uint32(34).string(message.orchestrator);
    }
    if (message.signature !== "") {
      writer.uint32(42).string(message.signature);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(50).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmBatch {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmBatch();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.tokenContract = reader.string();
          break;
        case 3:
          message.ethSigner = reader.string();
          break;
        case 4:
          message.orchestrator = reader.string();
          break;
        case 5:
          message.signature = reader.string();
          break;
        case 6:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConfirmBatch {
    return {
      nonce: isSet(object.nonce) ? Number(object.nonce) : 0,
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      ethSigner: isSet(object.ethSigner) ? String(object.ethSigner) : "",
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
      signature: isSet(object.signature) ? String(object.signature) : "",
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: MsgConfirmBatch): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
    message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
    message.ethSigner !== undefined && (obj.ethSigner = message.ethSigner);
    message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
    message.signature !== undefined && (obj.signature = message.signature);
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConfirmBatch>, I>>(object: I): MsgConfirmBatch {
    const message = createBaseMsgConfirmBatch();
    message.nonce = object.nonce ?? 0;
    message.tokenContract = object.tokenContract ?? "";
    message.ethSigner = object.ethSigner ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.signature = object.signature ?? "";
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseMsgConfirmBatchResponse(): MsgConfirmBatchResponse {
  return {};
}

export const MsgConfirmBatchResponse = {
  encode(_: MsgConfirmBatchResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmBatchResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmBatchResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgConfirmBatchResponse {
    return {};
  },

  toJSON(_: MsgConfirmBatchResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConfirmBatchResponse>, I>>(_: I): MsgConfirmBatchResponse {
    const message = createBaseMsgConfirmBatchResponse();
    return message;
  },
};

function createBaseMsgConfirmLogicCall(): MsgConfirmLogicCall {
  return {
    invalidationId: "",
    invalidationNonce: 0,
    ethSigner: "",
    orchestrator: "",
    signature: "",
    chainIdentifier: "",
  };
}

export const MsgConfirmLogicCall = {
  encode(message: MsgConfirmLogicCall, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.invalidationId !== "") {
      writer.uint32(10).string(message.invalidationId);
    }
    if (message.invalidationNonce !== 0) {
      writer.uint32(16).uint64(message.invalidationNonce);
    }
    if (message.ethSigner !== "") {
      writer.uint32(26).string(message.ethSigner);
    }
    if (message.orchestrator !== "") {
      writer.uint32(34).string(message.orchestrator);
    }
    if (message.signature !== "") {
      writer.uint32(42).string(message.signature);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(50).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmLogicCall {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmLogicCall();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invalidationId = reader.string();
          break;
        case 2:
          message.invalidationNonce = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.ethSigner = reader.string();
          break;
        case 4:
          message.orchestrator = reader.string();
          break;
        case 5:
          message.signature = reader.string();
          break;
        case 6:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConfirmLogicCall {
    return {
      invalidationId: isSet(object.invalidationId) ? String(object.invalidationId) : "",
      invalidationNonce: isSet(object.invalidationNonce) ? Number(object.invalidationNonce) : 0,
      ethSigner: isSet(object.ethSigner) ? String(object.ethSigner) : "",
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
      signature: isSet(object.signature) ? String(object.signature) : "",
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: MsgConfirmLogicCall): unknown {
    const obj: any = {};
    message.invalidationId !== undefined && (obj.invalidationId = message.invalidationId);
    message.invalidationNonce !== undefined && (obj.invalidationNonce = Math.round(message.invalidationNonce));
    message.ethSigner !== undefined && (obj.ethSigner = message.ethSigner);
    message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
    message.signature !== undefined && (obj.signature = message.signature);
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConfirmLogicCall>, I>>(object: I): MsgConfirmLogicCall {
    const message = createBaseMsgConfirmLogicCall();
    message.invalidationId = object.invalidationId ?? "";
    message.invalidationNonce = object.invalidationNonce ?? 0;
    message.ethSigner = object.ethSigner ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.signature = object.signature ?? "";
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseMsgConfirmLogicCallResponse(): MsgConfirmLogicCallResponse {
  return {};
}

export const MsgConfirmLogicCallResponse = {
  encode(_: MsgConfirmLogicCallResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmLogicCallResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmLogicCallResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgConfirmLogicCallResponse {
    return {};
  },

  toJSON(_: MsgConfirmLogicCallResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConfirmLogicCallResponse>, I>>(_: I): MsgConfirmLogicCallResponse {
    const message = createBaseMsgConfirmLogicCallResponse();
    return message;
  },
};

function createBaseMsgSendToCosmosClaim(): MsgSendToCosmosClaim {
  return {
    eventNonce: 0,
    blockHeight: 0,
    tokenContract: "",
    amount: "",
    ethereumSender: "",
    cosmosReceiver: "",
    orchestrator: "",
    chainIdentifier: "",
  };
}

export const MsgSendToCosmosClaim = {
  encode(message: MsgSendToCosmosClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventNonce !== 0) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.blockHeight !== 0) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.tokenContract !== "") {
      writer.uint32(26).string(message.tokenContract);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.ethereumSender !== "") {
      writer.uint32(42).string(message.ethereumSender);
    }
    if (message.cosmosReceiver !== "") {
      writer.uint32(50).string(message.cosmosReceiver);
    }
    if (message.orchestrator !== "") {
      writer.uint32(58).string(message.orchestrator);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(66).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToCosmosClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToCosmosClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.blockHeight = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.tokenContract = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.ethereumSender = reader.string();
          break;
        case 6:
          message.cosmosReceiver = reader.string();
          break;
        case 7:
          message.orchestrator = reader.string();
          break;
        case 8:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendToCosmosClaim {
    return {
      eventNonce: isSet(object.eventNonce) ? Number(object.eventNonce) : 0,
      blockHeight: isSet(object.blockHeight) ? Number(object.blockHeight) : 0,
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      ethereumSender: isSet(object.ethereumSender) ? String(object.ethereumSender) : "",
      cosmosReceiver: isSet(object.cosmosReceiver) ? String(object.cosmosReceiver) : "",
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: MsgSendToCosmosClaim): unknown {
    const obj: any = {};
    message.eventNonce !== undefined && (obj.eventNonce = Math.round(message.eventNonce));
    message.blockHeight !== undefined && (obj.blockHeight = Math.round(message.blockHeight));
    message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
    message.amount !== undefined && (obj.amount = message.amount);
    message.ethereumSender !== undefined && (obj.ethereumSender = message.ethereumSender);
    message.cosmosReceiver !== undefined && (obj.cosmosReceiver = message.cosmosReceiver);
    message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendToCosmosClaim>, I>>(object: I): MsgSendToCosmosClaim {
    const message = createBaseMsgSendToCosmosClaim();
    message.eventNonce = object.eventNonce ?? 0;
    message.blockHeight = object.blockHeight ?? 0;
    message.tokenContract = object.tokenContract ?? "";
    message.amount = object.amount ?? "";
    message.ethereumSender = object.ethereumSender ?? "";
    message.cosmosReceiver = object.cosmosReceiver ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseMsgSendToCosmosClaimResponse(): MsgSendToCosmosClaimResponse {
  return {};
}

export const MsgSendToCosmosClaimResponse = {
  encode(_: MsgSendToCosmosClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSendToCosmosClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSendToCosmosClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendToCosmosClaimResponse {
    return {};
  },

  toJSON(_: MsgSendToCosmosClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSendToCosmosClaimResponse>, I>>(_: I): MsgSendToCosmosClaimResponse {
    const message = createBaseMsgSendToCosmosClaimResponse();
    return message;
  },
};

function createBaseMsgExecuteIbcAutoForwards(): MsgExecuteIbcAutoForwards {
  return { forwardsToClear: 0, executor: "", chainIdentifier: "" };
}

export const MsgExecuteIbcAutoForwards = {
  encode(message: MsgExecuteIbcAutoForwards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.forwardsToClear !== 0) {
      writer.uint32(8).uint64(message.forwardsToClear);
    }
    if (message.executor !== "") {
      writer.uint32(18).string(message.executor);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(26).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteIbcAutoForwards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteIbcAutoForwards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.forwardsToClear = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.executor = reader.string();
          break;
        case 3:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExecuteIbcAutoForwards {
    return {
      forwardsToClear: isSet(object.forwardsToClear) ? Number(object.forwardsToClear) : 0,
      executor: isSet(object.executor) ? String(object.executor) : "",
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: MsgExecuteIbcAutoForwards): unknown {
    const obj: any = {};
    message.forwardsToClear !== undefined && (obj.forwardsToClear = Math.round(message.forwardsToClear));
    message.executor !== undefined && (obj.executor = message.executor);
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExecuteIbcAutoForwards>, I>>(object: I): MsgExecuteIbcAutoForwards {
    const message = createBaseMsgExecuteIbcAutoForwards();
    message.forwardsToClear = object.forwardsToClear ?? 0;
    message.executor = object.executor ?? "";
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseMsgExecuteIbcAutoForwardsResponse(): MsgExecuteIbcAutoForwardsResponse {
  return {};
}

export const MsgExecuteIbcAutoForwardsResponse = {
  encode(_: MsgExecuteIbcAutoForwardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgExecuteIbcAutoForwardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgExecuteIbcAutoForwardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgExecuteIbcAutoForwardsResponse {
    return {};
  },

  toJSON(_: MsgExecuteIbcAutoForwardsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgExecuteIbcAutoForwardsResponse>, I>>(
    _: I,
  ): MsgExecuteIbcAutoForwardsResponse {
    const message = createBaseMsgExecuteIbcAutoForwardsResponse();
    return message;
  },
};

function createBaseMsgBatchSendToEthClaim(): MsgBatchSendToEthClaim {
  return { eventNonce: 0, blockHeight: 0, batchNonce: 0, tokenContract: "", orchestrator: "", chainIdentifier: "" };
}

export const MsgBatchSendToEthClaim = {
  encode(message: MsgBatchSendToEthClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventNonce !== 0) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.blockHeight !== 0) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.batchNonce !== 0) {
      writer.uint32(24).uint64(message.batchNonce);
    }
    if (message.tokenContract !== "") {
      writer.uint32(34).string(message.tokenContract);
    }
    if (message.orchestrator !== "") {
      writer.uint32(42).string(message.orchestrator);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(50).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchSendToEthClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchSendToEthClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.blockHeight = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.batchNonce = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.tokenContract = reader.string();
          break;
        case 5:
          message.orchestrator = reader.string();
          break;
        case 6:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBatchSendToEthClaim {
    return {
      eventNonce: isSet(object.eventNonce) ? Number(object.eventNonce) : 0,
      blockHeight: isSet(object.blockHeight) ? Number(object.blockHeight) : 0,
      batchNonce: isSet(object.batchNonce) ? Number(object.batchNonce) : 0,
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: MsgBatchSendToEthClaim): unknown {
    const obj: any = {};
    message.eventNonce !== undefined && (obj.eventNonce = Math.round(message.eventNonce));
    message.blockHeight !== undefined && (obj.blockHeight = Math.round(message.blockHeight));
    message.batchNonce !== undefined && (obj.batchNonce = Math.round(message.batchNonce));
    message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
    message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBatchSendToEthClaim>, I>>(object: I): MsgBatchSendToEthClaim {
    const message = createBaseMsgBatchSendToEthClaim();
    message.eventNonce = object.eventNonce ?? 0;
    message.blockHeight = object.blockHeight ?? 0;
    message.batchNonce = object.batchNonce ?? 0;
    message.tokenContract = object.tokenContract ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseMsgBatchSendToEthClaimResponse(): MsgBatchSendToEthClaimResponse {
  return {};
}

export const MsgBatchSendToEthClaimResponse = {
  encode(_: MsgBatchSendToEthClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBatchSendToEthClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBatchSendToEthClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgBatchSendToEthClaimResponse {
    return {};
  },

  toJSON(_: MsgBatchSendToEthClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBatchSendToEthClaimResponse>, I>>(_: I): MsgBatchSendToEthClaimResponse {
    const message = createBaseMsgBatchSendToEthClaimResponse();
    return message;
  },
};

function createBaseMsgERC20DeployedClaim(): MsgERC20DeployedClaim {
  return {
    eventNonce: 0,
    blockHeight: 0,
    cosmosDenom: "",
    tokenContract: "",
    name: "",
    symbol: "",
    decimals: 0,
    orchestrator: "",
    chainIdentifier: "",
  };
}

export const MsgERC20DeployedClaim = {
  encode(message: MsgERC20DeployedClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventNonce !== 0) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.blockHeight !== 0) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.cosmosDenom !== "") {
      writer.uint32(26).string(message.cosmosDenom);
    }
    if (message.tokenContract !== "") {
      writer.uint32(34).string(message.tokenContract);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(50).string(message.symbol);
    }
    if (message.decimals !== 0) {
      writer.uint32(56).uint64(message.decimals);
    }
    if (message.orchestrator !== "") {
      writer.uint32(66).string(message.orchestrator);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(74).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgERC20DeployedClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgERC20DeployedClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.blockHeight = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.cosmosDenom = reader.string();
          break;
        case 4:
          message.tokenContract = reader.string();
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.symbol = reader.string();
          break;
        case 7:
          message.decimals = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.orchestrator = reader.string();
          break;
        case 9:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgERC20DeployedClaim {
    return {
      eventNonce: isSet(object.eventNonce) ? Number(object.eventNonce) : 0,
      blockHeight: isSet(object.blockHeight) ? Number(object.blockHeight) : 0,
      cosmosDenom: isSet(object.cosmosDenom) ? String(object.cosmosDenom) : "",
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      decimals: isSet(object.decimals) ? Number(object.decimals) : 0,
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: MsgERC20DeployedClaim): unknown {
    const obj: any = {};
    message.eventNonce !== undefined && (obj.eventNonce = Math.round(message.eventNonce));
    message.blockHeight !== undefined && (obj.blockHeight = Math.round(message.blockHeight));
    message.cosmosDenom !== undefined && (obj.cosmosDenom = message.cosmosDenom);
    message.tokenContract !== undefined && (obj.tokenContract = message.tokenContract);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.decimals !== undefined && (obj.decimals = Math.round(message.decimals));
    message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgERC20DeployedClaim>, I>>(object: I): MsgERC20DeployedClaim {
    const message = createBaseMsgERC20DeployedClaim();
    message.eventNonce = object.eventNonce ?? 0;
    message.blockHeight = object.blockHeight ?? 0;
    message.cosmosDenom = object.cosmosDenom ?? "";
    message.tokenContract = object.tokenContract ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.decimals = object.decimals ?? 0;
    message.orchestrator = object.orchestrator ?? "";
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseMsgERC20DeployedClaimResponse(): MsgERC20DeployedClaimResponse {
  return {};
}

export const MsgERC20DeployedClaimResponse = {
  encode(_: MsgERC20DeployedClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgERC20DeployedClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgERC20DeployedClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgERC20DeployedClaimResponse {
    return {};
  },

  toJSON(_: MsgERC20DeployedClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgERC20DeployedClaimResponse>, I>>(_: I): MsgERC20DeployedClaimResponse {
    const message = createBaseMsgERC20DeployedClaimResponse();
    return message;
  },
};

function createBaseMsgLogicCallExecutedClaim(): MsgLogicCallExecutedClaim {
  return {
    eventNonce: 0,
    blockHeight: 0,
    invalidationId: new Uint8Array(),
    invalidationNonce: 0,
    orchestrator: "",
    chainIdentifier: "",
  };
}

export const MsgLogicCallExecutedClaim = {
  encode(message: MsgLogicCallExecutedClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventNonce !== 0) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.blockHeight !== 0) {
      writer.uint32(16).uint64(message.blockHeight);
    }
    if (message.invalidationId.length !== 0) {
      writer.uint32(26).bytes(message.invalidationId);
    }
    if (message.invalidationNonce !== 0) {
      writer.uint32(32).uint64(message.invalidationNonce);
    }
    if (message.orchestrator !== "") {
      writer.uint32(42).string(message.orchestrator);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(50).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLogicCallExecutedClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLogicCallExecutedClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.blockHeight = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.invalidationId = reader.bytes();
          break;
        case 4:
          message.invalidationNonce = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.orchestrator = reader.string();
          break;
        case 6:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLogicCallExecutedClaim {
    return {
      eventNonce: isSet(object.eventNonce) ? Number(object.eventNonce) : 0,
      blockHeight: isSet(object.blockHeight) ? Number(object.blockHeight) : 0,
      invalidationId: isSet(object.invalidationId) ? bytesFromBase64(object.invalidationId) : new Uint8Array(),
      invalidationNonce: isSet(object.invalidationNonce) ? Number(object.invalidationNonce) : 0,
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: MsgLogicCallExecutedClaim): unknown {
    const obj: any = {};
    message.eventNonce !== undefined && (obj.eventNonce = Math.round(message.eventNonce));
    message.blockHeight !== undefined && (obj.blockHeight = Math.round(message.blockHeight));
    message.invalidationId !== undefined
      && (obj.invalidationId = base64FromBytes(
        message.invalidationId !== undefined ? message.invalidationId : new Uint8Array(),
      ));
    message.invalidationNonce !== undefined && (obj.invalidationNonce = Math.round(message.invalidationNonce));
    message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLogicCallExecutedClaim>, I>>(object: I): MsgLogicCallExecutedClaim {
    const message = createBaseMsgLogicCallExecutedClaim();
    message.eventNonce = object.eventNonce ?? 0;
    message.blockHeight = object.blockHeight ?? 0;
    message.invalidationId = object.invalidationId ?? new Uint8Array();
    message.invalidationNonce = object.invalidationNonce ?? 0;
    message.orchestrator = object.orchestrator ?? "";
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseMsgLogicCallExecutedClaimResponse(): MsgLogicCallExecutedClaimResponse {
  return {};
}

export const MsgLogicCallExecutedClaimResponse = {
  encode(_: MsgLogicCallExecutedClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLogicCallExecutedClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLogicCallExecutedClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgLogicCallExecutedClaimResponse {
    return {};
  },

  toJSON(_: MsgLogicCallExecutedClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLogicCallExecutedClaimResponse>, I>>(
    _: I,
  ): MsgLogicCallExecutedClaimResponse {
    const message = createBaseMsgLogicCallExecutedClaimResponse();
    return message;
  },
};

function createBaseMsgValsetUpdatedClaim(): MsgValsetUpdatedClaim {
  return {
    eventNonce: 0,
    valsetNonce: 0,
    blockHeight: 0,
    members: [],
    rewardAmount: "",
    rewardToken: "",
    orchestrator: "",
    chainIdentifier: "",
  };
}

export const MsgValsetUpdatedClaim = {
  encode(message: MsgValsetUpdatedClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventNonce !== 0) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    if (message.valsetNonce !== 0) {
      writer.uint32(16).uint64(message.valsetNonce);
    }
    if (message.blockHeight !== 0) {
      writer.uint32(24).uint64(message.blockHeight);
    }
    for (const v of message.members) {
      BridgeValidator.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    if (message.rewardAmount !== "") {
      writer.uint32(42).string(message.rewardAmount);
    }
    if (message.rewardToken !== "") {
      writer.uint32(50).string(message.rewardToken);
    }
    if (message.orchestrator !== "") {
      writer.uint32(58).string(message.orchestrator);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(66).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetUpdatedClaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValsetUpdatedClaim();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.valsetNonce = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.blockHeight = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.members.push(BridgeValidator.decode(reader, reader.uint32()));
          break;
        case 5:
          message.rewardAmount = reader.string();
          break;
        case 6:
          message.rewardToken = reader.string();
          break;
        case 7:
          message.orchestrator = reader.string();
          break;
        case 8:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgValsetUpdatedClaim {
    return {
      eventNonce: isSet(object.eventNonce) ? Number(object.eventNonce) : 0,
      valsetNonce: isSet(object.valsetNonce) ? Number(object.valsetNonce) : 0,
      blockHeight: isSet(object.blockHeight) ? Number(object.blockHeight) : 0,
      members: Array.isArray(object?.members) ? object.members.map((e: any) => BridgeValidator.fromJSON(e)) : [],
      rewardAmount: isSet(object.rewardAmount) ? String(object.rewardAmount) : "",
      rewardToken: isSet(object.rewardToken) ? String(object.rewardToken) : "",
      orchestrator: isSet(object.orchestrator) ? String(object.orchestrator) : "",
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: MsgValsetUpdatedClaim): unknown {
    const obj: any = {};
    message.eventNonce !== undefined && (obj.eventNonce = Math.round(message.eventNonce));
    message.valsetNonce !== undefined && (obj.valsetNonce = Math.round(message.valsetNonce));
    message.blockHeight !== undefined && (obj.blockHeight = Math.round(message.blockHeight));
    if (message.members) {
      obj.members = message.members.map((e) => e ? BridgeValidator.toJSON(e) : undefined);
    } else {
      obj.members = [];
    }
    message.rewardAmount !== undefined && (obj.rewardAmount = message.rewardAmount);
    message.rewardToken !== undefined && (obj.rewardToken = message.rewardToken);
    message.orchestrator !== undefined && (obj.orchestrator = message.orchestrator);
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgValsetUpdatedClaim>, I>>(object: I): MsgValsetUpdatedClaim {
    const message = createBaseMsgValsetUpdatedClaim();
    message.eventNonce = object.eventNonce ?? 0;
    message.valsetNonce = object.valsetNonce ?? 0;
    message.blockHeight = object.blockHeight ?? 0;
    message.members = object.members?.map((e) => BridgeValidator.fromPartial(e)) || [];
    message.rewardAmount = object.rewardAmount ?? "";
    message.rewardToken = object.rewardToken ?? "";
    message.orchestrator = object.orchestrator ?? "";
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseMsgValsetUpdatedClaimResponse(): MsgValsetUpdatedClaimResponse {
  return {};
}

export const MsgValsetUpdatedClaimResponse = {
  encode(_: MsgValsetUpdatedClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgValsetUpdatedClaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgValsetUpdatedClaimResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgValsetUpdatedClaimResponse {
    return {};
  },

  toJSON(_: MsgValsetUpdatedClaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgValsetUpdatedClaimResponse>, I>>(_: I): MsgValsetUpdatedClaimResponse {
    const message = createBaseMsgValsetUpdatedClaimResponse();
    return message;
  },
};

function createBaseMsgCancelSendToEth(): MsgCancelSendToEth {
  return { transactionId: 0, sender: "", chainIdentifier: "" };
}

export const MsgCancelSendToEth = {
  encode(message: MsgCancelSendToEth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.transactionId !== 0) {
      writer.uint32(8).uint64(message.transactionId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(26).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSendToEth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSendToEth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transactionId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelSendToEth {
    return {
      transactionId: isSet(object.transactionId) ? Number(object.transactionId) : 0,
      sender: isSet(object.sender) ? String(object.sender) : "",
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: MsgCancelSendToEth): unknown {
    const obj: any = {};
    message.transactionId !== undefined && (obj.transactionId = Math.round(message.transactionId));
    message.sender !== undefined && (obj.sender = message.sender);
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelSendToEth>, I>>(object: I): MsgCancelSendToEth {
    const message = createBaseMsgCancelSendToEth();
    message.transactionId = object.transactionId ?? 0;
    message.sender = object.sender ?? "";
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseMsgCancelSendToEthResponse(): MsgCancelSendToEthResponse {
  return {};
}

export const MsgCancelSendToEthResponse = {
  encode(_: MsgCancelSendToEthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelSendToEthResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelSendToEthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCancelSendToEthResponse {
    return {};
  },

  toJSON(_: MsgCancelSendToEthResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelSendToEthResponse>, I>>(_: I): MsgCancelSendToEthResponse {
    const message = createBaseMsgCancelSendToEthResponse();
    return message;
  },
};

function createBaseMsgSubmitBadSignatureEvidence(): MsgSubmitBadSignatureEvidence {
  return { subject: undefined, signature: "", sender: "", chainIdentifier: "" };
}

export const MsgSubmitBadSignatureEvidence = {
  encode(message: MsgSubmitBadSignatureEvidence, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.subject !== undefined) {
      Any.encode(message.subject, writer.uint32(10).fork()).ldelim();
    }
    if (message.signature !== "") {
      writer.uint32(18).string(message.signature);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(34).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitBadSignatureEvidence {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitBadSignatureEvidence();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subject = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.signature = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        case 4:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitBadSignatureEvidence {
    return {
      subject: isSet(object.subject) ? Any.fromJSON(object.subject) : undefined,
      signature: isSet(object.signature) ? String(object.signature) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: MsgSubmitBadSignatureEvidence): unknown {
    const obj: any = {};
    message.subject !== undefined && (obj.subject = message.subject ? Any.toJSON(message.subject) : undefined);
    message.signature !== undefined && (obj.signature = message.signature);
    message.sender !== undefined && (obj.sender = message.sender);
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitBadSignatureEvidence>, I>>(
    object: I,
  ): MsgSubmitBadSignatureEvidence {
    const message = createBaseMsgSubmitBadSignatureEvidence();
    message.subject = (object.subject !== undefined && object.subject !== null)
      ? Any.fromPartial(object.subject)
      : undefined;
    message.signature = object.signature ?? "";
    message.sender = object.sender ?? "";
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseMsgSubmitBadSignatureEvidenceResponse(): MsgSubmitBadSignatureEvidenceResponse {
  return {};
}

export const MsgSubmitBadSignatureEvidenceResponse = {
  encode(_: MsgSubmitBadSignatureEvidenceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitBadSignatureEvidenceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitBadSignatureEvidenceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSubmitBadSignatureEvidenceResponse {
    return {};
  },

  toJSON(_: MsgSubmitBadSignatureEvidenceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitBadSignatureEvidenceResponse>, I>>(
    _: I,
  ): MsgSubmitBadSignatureEvidenceResponse {
    const message = createBaseMsgSubmitBadSignatureEvidenceResponse();
    return message;
  },
};

/** Msg defines the state transitions possible within gravity */
export interface Msg {
  ValsetConfirm(request: MsgValsetConfirm): Promise<MsgValsetConfirmResponse>;
  SendToEth(request: MsgSendToEth): Promise<MsgSendToEthResponse>;
  RequestBatch(request: MsgRequestBatch): Promise<MsgRequestBatchResponse>;
  ConfirmBatch(request: MsgConfirmBatch): Promise<MsgConfirmBatchResponse>;
  ConfirmLogicCall(request: MsgConfirmLogicCall): Promise<MsgConfirmLogicCallResponse>;
  SendToCosmosClaim(request: MsgSendToCosmosClaim): Promise<MsgSendToCosmosClaimResponse>;
  ExecuteIbcAutoForwards(request: MsgExecuteIbcAutoForwards): Promise<MsgExecuteIbcAutoForwardsResponse>;
  BatchSendToEthClaim(request: MsgBatchSendToEthClaim): Promise<MsgBatchSendToEthClaimResponse>;
  ValsetUpdateClaim(request: MsgValsetUpdatedClaim): Promise<MsgValsetUpdatedClaimResponse>;
  ERC20DeployedClaim(request: MsgERC20DeployedClaim): Promise<MsgERC20DeployedClaimResponse>;
  LogicCallExecutedClaim(request: MsgLogicCallExecutedClaim): Promise<MsgLogicCallExecutedClaimResponse>;
  SetOrchestratorAddress(request: MsgSetOrchestratorAddress): Promise<MsgSetOrchestratorAddressResponse>;
  CancelSendToEth(request: MsgCancelSendToEth): Promise<MsgCancelSendToEthResponse>;
  SubmitBadSignatureEvidence(request: MsgSubmitBadSignatureEvidence): Promise<MsgSubmitBadSignatureEvidenceResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ValsetConfirm = this.ValsetConfirm.bind(this);
    this.SendToEth = this.SendToEth.bind(this);
    this.RequestBatch = this.RequestBatch.bind(this);
    this.ConfirmBatch = this.ConfirmBatch.bind(this);
    this.ConfirmLogicCall = this.ConfirmLogicCall.bind(this);
    this.SendToCosmosClaim = this.SendToCosmosClaim.bind(this);
    this.ExecuteIbcAutoForwards = this.ExecuteIbcAutoForwards.bind(this);
    this.BatchSendToEthClaim = this.BatchSendToEthClaim.bind(this);
    this.ValsetUpdateClaim = this.ValsetUpdateClaim.bind(this);
    this.ERC20DeployedClaim = this.ERC20DeployedClaim.bind(this);
    this.LogicCallExecutedClaim = this.LogicCallExecutedClaim.bind(this);
    this.SetOrchestratorAddress = this.SetOrchestratorAddress.bind(this);
    this.CancelSendToEth = this.CancelSendToEth.bind(this);
    this.SubmitBadSignatureEvidence = this.SubmitBadSignatureEvidence.bind(this);
  }
  ValsetConfirm(request: MsgValsetConfirm): Promise<MsgValsetConfirmResponse> {
    const data = MsgValsetConfirm.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Msg", "ValsetConfirm", data);
    return promise.then((data) => MsgValsetConfirmResponse.decode(new _m0.Reader(data)));
  }

  SendToEth(request: MsgSendToEth): Promise<MsgSendToEthResponse> {
    const data = MsgSendToEth.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Msg", "SendToEth", data);
    return promise.then((data) => MsgSendToEthResponse.decode(new _m0.Reader(data)));
  }

  RequestBatch(request: MsgRequestBatch): Promise<MsgRequestBatchResponse> {
    const data = MsgRequestBatch.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Msg", "RequestBatch", data);
    return promise.then((data) => MsgRequestBatchResponse.decode(new _m0.Reader(data)));
  }

  ConfirmBatch(request: MsgConfirmBatch): Promise<MsgConfirmBatchResponse> {
    const data = MsgConfirmBatch.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Msg", "ConfirmBatch", data);
    return promise.then((data) => MsgConfirmBatchResponse.decode(new _m0.Reader(data)));
  }

  ConfirmLogicCall(request: MsgConfirmLogicCall): Promise<MsgConfirmLogicCallResponse> {
    const data = MsgConfirmLogicCall.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Msg", "ConfirmLogicCall", data);
    return promise.then((data) => MsgConfirmLogicCallResponse.decode(new _m0.Reader(data)));
  }

  SendToCosmosClaim(request: MsgSendToCosmosClaim): Promise<MsgSendToCosmosClaimResponse> {
    const data = MsgSendToCosmosClaim.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Msg", "SendToCosmosClaim", data);
    return promise.then((data) => MsgSendToCosmosClaimResponse.decode(new _m0.Reader(data)));
  }

  ExecuteIbcAutoForwards(request: MsgExecuteIbcAutoForwards): Promise<MsgExecuteIbcAutoForwardsResponse> {
    const data = MsgExecuteIbcAutoForwards.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Msg", "ExecuteIbcAutoForwards", data);
    return promise.then((data) => MsgExecuteIbcAutoForwardsResponse.decode(new _m0.Reader(data)));
  }

  BatchSendToEthClaim(request: MsgBatchSendToEthClaim): Promise<MsgBatchSendToEthClaimResponse> {
    const data = MsgBatchSendToEthClaim.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Msg", "BatchSendToEthClaim", data);
    return promise.then((data) => MsgBatchSendToEthClaimResponse.decode(new _m0.Reader(data)));
  }

  ValsetUpdateClaim(request: MsgValsetUpdatedClaim): Promise<MsgValsetUpdatedClaimResponse> {
    const data = MsgValsetUpdatedClaim.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Msg", "ValsetUpdateClaim", data);
    return promise.then((data) => MsgValsetUpdatedClaimResponse.decode(new _m0.Reader(data)));
  }

  ERC20DeployedClaim(request: MsgERC20DeployedClaim): Promise<MsgERC20DeployedClaimResponse> {
    const data = MsgERC20DeployedClaim.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Msg", "ERC20DeployedClaim", data);
    return promise.then((data) => MsgERC20DeployedClaimResponse.decode(new _m0.Reader(data)));
  }

  LogicCallExecutedClaim(request: MsgLogicCallExecutedClaim): Promise<MsgLogicCallExecutedClaimResponse> {
    const data = MsgLogicCallExecutedClaim.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Msg", "LogicCallExecutedClaim", data);
    return promise.then((data) => MsgLogicCallExecutedClaimResponse.decode(new _m0.Reader(data)));
  }

  SetOrchestratorAddress(request: MsgSetOrchestratorAddress): Promise<MsgSetOrchestratorAddressResponse> {
    const data = MsgSetOrchestratorAddress.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Msg", "SetOrchestratorAddress", data);
    return promise.then((data) => MsgSetOrchestratorAddressResponse.decode(new _m0.Reader(data)));
  }

  CancelSendToEth(request: MsgCancelSendToEth): Promise<MsgCancelSendToEthResponse> {
    const data = MsgCancelSendToEth.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Msg", "CancelSendToEth", data);
    return promise.then((data) => MsgCancelSendToEthResponse.decode(new _m0.Reader(data)));
  }

  SubmitBadSignatureEvidence(request: MsgSubmitBadSignatureEvidence): Promise<MsgSubmitBadSignatureEvidenceResponse> {
    const data = MsgSubmitBadSignatureEvidence.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Msg", "SubmitBadSignatureEvidence", data);
    return promise.then((data) => MsgSubmitBadSignatureEvidenceResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
