/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Attestation } from "../../gravity/v1/attestation";
import { OutgoingLogicCall, OutgoingTransferTx, OutgoingTxBatch } from "../../gravity/v1/batch";
import { Params } from "../../gravity/v1/genesis";
import { MsgConfirmBatch, MsgConfirmLogicCall, MsgValsetConfirm } from "../../gravity/v1/msgs";
import { BatchFees } from "../../gravity/v1/pool";
import {
  QueryDelegateKeysByEthAddress,
  QueryDelegateKeysByEthAddressResponse,
  QueryDelegateKeysByOrchestratorAddress,
  QueryDelegateKeysByOrchestratorAddressResponse,
  QueryDelegateKeysByValidatorAddress,
  QueryDelegateKeysByValidatorAddressResponse,
} from "../../gravity/v1/query";
import { PendingIbcAutoForward, Valset } from "../../gravity/v1/types";

export const protobufPackage = "multigravity.v1";

export interface QueryChainsRequest {
}

export interface QueryChainsResponse {
  chainIdentifiers: string[];
}

export interface QueryParamsRequest {
  chainIdentifier: string;
}

export interface QueryParamsResponse {
  params: Params | undefined;
}

export interface QueryCurrentValsetRequest {
  chainIdentifier: string;
}

export interface QueryCurrentValsetResponse {
  valset: Valset | undefined;
}

export interface QueryValsetRequestRequest {
  nonce: number;
  chainIdentifier: string;
}

export interface QueryValsetRequestResponse {
  valset: Valset | undefined;
}

export interface QueryValsetConfirmRequest {
  nonce: number;
  address: string;
  chainIdentifier: string;
}

export interface QueryValsetConfirmResponse {
  confirm: MsgValsetConfirm | undefined;
}

export interface QueryValsetConfirmsByNonceRequest {
  nonce: number;
  chainIdentifier: string;
}

export interface QueryValsetConfirmsByNonceResponse {
  confirms: MsgValsetConfirm[];
}

export interface QueryLastValsetRequestsRequest {
  chainIdentifier: string;
}

export interface QueryLastValsetRequestsResponse {
  valsets: Valset[];
}

export interface QueryLastPendingValsetRequestByAddrRequest {
  address: string;
  chainIdentifier: string;
}

export interface QueryLastPendingValsetRequestByAddrResponse {
  valsets: Valset[];
}

export interface QueryBatchFeeRequest {
  chainIdentifier: string;
}

export interface QueryBatchFeeResponse {
  batchFees: BatchFees[];
}

export interface QueryLastPendingBatchRequestByAddrRequest {
  address: string;
  chainIdentifier: string;
}

export interface QueryLastPendingBatchRequestByAddrResponse {
  batch: OutgoingTxBatch[];
}

export interface QueryLastPendingLogicCallByAddrRequest {
  address: string;
  chainIdentifier: string;
}

export interface QueryLastPendingLogicCallByAddrResponse {
  call: OutgoingLogicCall[];
}

export interface QueryOutgoingTxBatchesRequest {
  chainIdentifier: string;
}

export interface QueryOutgoingTxBatchesResponse {
  batches: OutgoingTxBatch[];
}

export interface QueryOutgoingLogicCallsRequest {
  chainIdentifier: string;
}

export interface QueryOutgoingLogicCallsResponse {
  calls: OutgoingLogicCall[];
}

export interface QueryBatchRequestByNonceRequest {
  nonce: number;
  contractAddress: string;
  chainIdentifier: string;
}

export interface QueryBatchRequestByNonceResponse {
  batch: OutgoingTxBatch | undefined;
}

export interface QueryBatchConfirmsRequest {
  nonce: number;
  contractAddress: string;
  chainIdentifier: string;
}

export interface QueryBatchConfirmsResponse {
  confirms: MsgConfirmBatch[];
}

export interface QueryLogicConfirmsRequest {
  invalidationId: Uint8Array;
  invalidationNonce: number;
  chainIdentifier: string;
}

export interface QueryLogicConfirmsResponse {
  confirms: MsgConfirmLogicCall[];
}

export interface QueryLastEventNonceByAddrRequest {
  address: string;
  chainIdentifier: string;
}

export interface QueryLastEventNonceByAddrResponse {
  eventNonce: number;
}

export interface QueryERC20ToDenomRequest {
  erc20: string;
  chainIdentifier: string;
}

export interface QueryERC20ToDenomResponse {
  denom: string;
  cosmosOriginated: boolean;
}

export interface QueryDenomToERC20Request {
  denom: string;
  chainIdentifier: string;
}

export interface QueryDenomToERC20Response {
  erc20: string;
  cosmosOriginated: boolean;
}

/**
 * QueryAttestationsRequest defines the request structure for getting recent
 * attestations with optional query parameters. By default, a limited set of
 * recent attestations will be returned, defined by 'limit'. These attestations
 * can be ordered ascending or descending by nonce, that defaults to ascending.
 * Filtering criteria may also be provided, including nonce, claim type, and
 * height. Note, that an attestation will be returned if it matches ANY of the
 * filter query parameters provided.
 */
export interface QueryAttestationsRequest {
  /** limit defines how many attestations to limit in the response. */
  limit: number;
  /**
   * order_by provides ordering of atteststions by nonce in the response. Either
   * 'asc' or 'desc' can be provided. If no value is provided, it defaults to
   * 'asc'.
   */
  orderBy: string;
  /** claim_type allows filtering attestations by Ethereum claim type. */
  claimType: string;
  /** nonce allows filtering attestations by Ethereum claim nonce. */
  nonce: number;
  /** height allows filtering attestations by Ethereum claim height. */
  height: number;
  chainIdentifier: string;
}

export interface QueryAttestationsResponse {
  attestations: Attestation[];
}

export interface QueryPendingSendToEth {
  senderAddress: string;
  chainIdentifier: string;
}

export interface QueryPendingSendToEthResponse {
  transfersInBatches: OutgoingTransferTx[];
  unbatchedTransfers: OutgoingTransferTx[];
}

export interface QueryPendingIbcAutoForwards {
  /** limit defines the number of pending forwards to return, in order of their SendToCosmos.EventNonce */
  limit: number;
  chainIdentifier: string;
}

export interface QueryPendingIbcAutoForwardsResponse {
  pendingIbcAutoForwards: PendingIbcAutoForward[];
}

function createBaseQueryChainsRequest(): QueryChainsRequest {
  return {};
}

export const QueryChainsRequest = {
  encode(_: QueryChainsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChainsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChainsRequest();
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

  fromJSON(_: any): QueryChainsRequest {
    return {};
  },

  toJSON(_: QueryChainsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryChainsRequest>, I>>(_: I): QueryChainsRequest {
    const message = createBaseQueryChainsRequest();
    return message;
  },
};

function createBaseQueryChainsResponse(): QueryChainsResponse {
  return { chainIdentifiers: [] };
}

export const QueryChainsResponse = {
  encode(message: QueryChainsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.chainIdentifiers) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryChainsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryChainsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainIdentifiers.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryChainsResponse {
    return {
      chainIdentifiers: Array.isArray(object?.chainIdentifiers)
        ? object.chainIdentifiers.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: QueryChainsResponse): unknown {
    const obj: any = {};
    if (message.chainIdentifiers) {
      obj.chainIdentifiers = message.chainIdentifiers.map((e) => e);
    } else {
      obj.chainIdentifiers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryChainsResponse>, I>>(object: I): QueryChainsResponse {
    const message = createBaseQueryChainsResponse();
    message.chainIdentifiers = object.chainIdentifiers?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return { chainIdentifier: "" };
}

export const QueryParamsRequest = {
  encode(message: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainIdentifier !== "") {
      writer.uint32(10).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsRequest {
    return { chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "" };
  },

  toJSON(message: QueryParamsRequest): unknown {
    const obj: any = {};
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(object: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryCurrentValsetRequest(): QueryCurrentValsetRequest {
  return { chainIdentifier: "" };
}

export const QueryCurrentValsetRequest = {
  encode(message: QueryCurrentValsetRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainIdentifier !== "") {
      writer.uint32(10).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentValsetRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentValsetRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCurrentValsetRequest {
    return { chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "" };
  },

  toJSON(message: QueryCurrentValsetRequest): unknown {
    const obj: any = {};
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCurrentValsetRequest>, I>>(object: I): QueryCurrentValsetRequest {
    const message = createBaseQueryCurrentValsetRequest();
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseQueryCurrentValsetResponse(): QueryCurrentValsetResponse {
  return { valset: undefined };
}

export const QueryCurrentValsetResponse = {
  encode(message: QueryCurrentValsetResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valset !== undefined) {
      Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCurrentValsetResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCurrentValsetResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valset = Valset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCurrentValsetResponse {
    return { valset: isSet(object.valset) ? Valset.fromJSON(object.valset) : undefined };
  },

  toJSON(message: QueryCurrentValsetResponse): unknown {
    const obj: any = {};
    message.valset !== undefined && (obj.valset = message.valset ? Valset.toJSON(message.valset) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCurrentValsetResponse>, I>>(object: I): QueryCurrentValsetResponse {
    const message = createBaseQueryCurrentValsetResponse();
    message.valset = (object.valset !== undefined && object.valset !== null)
      ? Valset.fromPartial(object.valset)
      : undefined;
    return message;
  },
};

function createBaseQueryValsetRequestRequest(): QueryValsetRequestRequest {
  return { nonce: 0, chainIdentifier: "" };
}

export const QueryValsetRequestRequest = {
  encode(message: QueryValsetRequestRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nonce !== 0) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(18).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetRequestRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValsetRequestRequest {
    return {
      nonce: isSet(object.nonce) ? Number(object.nonce) : 0,
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: QueryValsetRequestRequest): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValsetRequestRequest>, I>>(object: I): QueryValsetRequestRequest {
    const message = createBaseQueryValsetRequestRequest();
    message.nonce = object.nonce ?? 0;
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseQueryValsetRequestResponse(): QueryValsetRequestResponse {
  return { valset: undefined };
}

export const QueryValsetRequestResponse = {
  encode(message: QueryValsetRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.valset !== undefined) {
      Valset.encode(message.valset, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valset = Valset.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValsetRequestResponse {
    return { valset: isSet(object.valset) ? Valset.fromJSON(object.valset) : undefined };
  },

  toJSON(message: QueryValsetRequestResponse): unknown {
    const obj: any = {};
    message.valset !== undefined && (obj.valset = message.valset ? Valset.toJSON(message.valset) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValsetRequestResponse>, I>>(object: I): QueryValsetRequestResponse {
    const message = createBaseQueryValsetRequestResponse();
    message.valset = (object.valset !== undefined && object.valset !== null)
      ? Valset.fromPartial(object.valset)
      : undefined;
    return message;
  },
};

function createBaseQueryValsetConfirmRequest(): QueryValsetConfirmRequest {
  return { nonce: 0, address: "", chainIdentifier: "" };
}

export const QueryValsetConfirmRequest = {
  encode(message: QueryValsetConfirmRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nonce !== 0) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(26).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetConfirmRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.address = reader.string();
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

  fromJSON(object: any): QueryValsetConfirmRequest {
    return {
      nonce: isSet(object.nonce) ? Number(object.nonce) : 0,
      address: isSet(object.address) ? String(object.address) : "",
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: QueryValsetConfirmRequest): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
    message.address !== undefined && (obj.address = message.address);
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValsetConfirmRequest>, I>>(object: I): QueryValsetConfirmRequest {
    const message = createBaseQueryValsetConfirmRequest();
    message.nonce = object.nonce ?? 0;
    message.address = object.address ?? "";
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseQueryValsetConfirmResponse(): QueryValsetConfirmResponse {
  return { confirm: undefined };
}

export const QueryValsetConfirmResponse = {
  encode(message: QueryValsetConfirmResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.confirm !== undefined) {
      MsgValsetConfirm.encode(message.confirm, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetConfirmResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirm = MsgValsetConfirm.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValsetConfirmResponse {
    return { confirm: isSet(object.confirm) ? MsgValsetConfirm.fromJSON(object.confirm) : undefined };
  },

  toJSON(message: QueryValsetConfirmResponse): unknown {
    const obj: any = {};
    message.confirm !== undefined
      && (obj.confirm = message.confirm ? MsgValsetConfirm.toJSON(message.confirm) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValsetConfirmResponse>, I>>(object: I): QueryValsetConfirmResponse {
    const message = createBaseQueryValsetConfirmResponse();
    message.confirm = (object.confirm !== undefined && object.confirm !== null)
      ? MsgValsetConfirm.fromPartial(object.confirm)
      : undefined;
    return message;
  },
};

function createBaseQueryValsetConfirmsByNonceRequest(): QueryValsetConfirmsByNonceRequest {
  return { nonce: 0, chainIdentifier: "" };
}

export const QueryValsetConfirmsByNonceRequest = {
  encode(message: QueryValsetConfirmsByNonceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nonce !== 0) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(18).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmsByNonceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetConfirmsByNonceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValsetConfirmsByNonceRequest {
    return {
      nonce: isSet(object.nonce) ? Number(object.nonce) : 0,
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: QueryValsetConfirmsByNonceRequest): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValsetConfirmsByNonceRequest>, I>>(
    object: I,
  ): QueryValsetConfirmsByNonceRequest {
    const message = createBaseQueryValsetConfirmsByNonceRequest();
    message.nonce = object.nonce ?? 0;
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseQueryValsetConfirmsByNonceResponse(): QueryValsetConfirmsByNonceResponse {
  return { confirms: [] };
}

export const QueryValsetConfirmsByNonceResponse = {
  encode(message: QueryValsetConfirmsByNonceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.confirms) {
      MsgValsetConfirm.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryValsetConfirmsByNonceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryValsetConfirmsByNonceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirms.push(MsgValsetConfirm.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryValsetConfirmsByNonceResponse {
    return {
      confirms: Array.isArray(object?.confirms) ? object.confirms.map((e: any) => MsgValsetConfirm.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryValsetConfirmsByNonceResponse): unknown {
    const obj: any = {};
    if (message.confirms) {
      obj.confirms = message.confirms.map((e) => e ? MsgValsetConfirm.toJSON(e) : undefined);
    } else {
      obj.confirms = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryValsetConfirmsByNonceResponse>, I>>(
    object: I,
  ): QueryValsetConfirmsByNonceResponse {
    const message = createBaseQueryValsetConfirmsByNonceResponse();
    message.confirms = object.confirms?.map((e) => MsgValsetConfirm.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryLastValsetRequestsRequest(): QueryLastValsetRequestsRequest {
  return { chainIdentifier: "" };
}

export const QueryLastValsetRequestsRequest = {
  encode(message: QueryLastValsetRequestsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainIdentifier !== "") {
      writer.uint32(10).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastValsetRequestsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastValsetRequestsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLastValsetRequestsRequest {
    return { chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "" };
  },

  toJSON(message: QueryLastValsetRequestsRequest): unknown {
    const obj: any = {};
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastValsetRequestsRequest>, I>>(
    object: I,
  ): QueryLastValsetRequestsRequest {
    const message = createBaseQueryLastValsetRequestsRequest();
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseQueryLastValsetRequestsResponse(): QueryLastValsetRequestsResponse {
  return { valsets: [] };
}

export const QueryLastValsetRequestsResponse = {
  encode(message: QueryLastValsetRequestsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.valsets) {
      Valset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastValsetRequestsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastValsetRequestsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valsets.push(Valset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLastValsetRequestsResponse {
    return { valsets: Array.isArray(object?.valsets) ? object.valsets.map((e: any) => Valset.fromJSON(e)) : [] };
  },

  toJSON(message: QueryLastValsetRequestsResponse): unknown {
    const obj: any = {};
    if (message.valsets) {
      obj.valsets = message.valsets.map((e) => e ? Valset.toJSON(e) : undefined);
    } else {
      obj.valsets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastValsetRequestsResponse>, I>>(
    object: I,
  ): QueryLastValsetRequestsResponse {
    const message = createBaseQueryLastValsetRequestsResponse();
    message.valsets = object.valsets?.map((e) => Valset.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryLastPendingValsetRequestByAddrRequest(): QueryLastPendingValsetRequestByAddrRequest {
  return { address: "", chainIdentifier: "" };
}

export const QueryLastPendingValsetRequestByAddrRequest = {
  encode(message: QueryLastPendingValsetRequestByAddrRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(18).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingValsetRequestByAddrRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPendingValsetRequestByAddrRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLastPendingValsetRequestByAddrRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: QueryLastPendingValsetRequestByAddrRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastPendingValsetRequestByAddrRequest>, I>>(
    object: I,
  ): QueryLastPendingValsetRequestByAddrRequest {
    const message = createBaseQueryLastPendingValsetRequestByAddrRequest();
    message.address = object.address ?? "";
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseQueryLastPendingValsetRequestByAddrResponse(): QueryLastPendingValsetRequestByAddrResponse {
  return { valsets: [] };
}

export const QueryLastPendingValsetRequestByAddrResponse = {
  encode(message: QueryLastPendingValsetRequestByAddrResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.valsets) {
      Valset.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingValsetRequestByAddrResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.valsets.push(Valset.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLastPendingValsetRequestByAddrResponse {
    return { valsets: Array.isArray(object?.valsets) ? object.valsets.map((e: any) => Valset.fromJSON(e)) : [] };
  },

  toJSON(message: QueryLastPendingValsetRequestByAddrResponse): unknown {
    const obj: any = {};
    if (message.valsets) {
      obj.valsets = message.valsets.map((e) => e ? Valset.toJSON(e) : undefined);
    } else {
      obj.valsets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastPendingValsetRequestByAddrResponse>, I>>(
    object: I,
  ): QueryLastPendingValsetRequestByAddrResponse {
    const message = createBaseQueryLastPendingValsetRequestByAddrResponse();
    message.valsets = object.valsets?.map((e) => Valset.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryBatchFeeRequest(): QueryBatchFeeRequest {
  return { chainIdentifier: "" };
}

export const QueryBatchFeeRequest = {
  encode(message: QueryBatchFeeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainIdentifier !== "") {
      writer.uint32(10).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchFeeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchFeeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBatchFeeRequest {
    return { chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "" };
  },

  toJSON(message: QueryBatchFeeRequest): unknown {
    const obj: any = {};
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchFeeRequest>, I>>(object: I): QueryBatchFeeRequest {
    const message = createBaseQueryBatchFeeRequest();
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseQueryBatchFeeResponse(): QueryBatchFeeResponse {
  return { batchFees: [] };
}

export const QueryBatchFeeResponse = {
  encode(message: QueryBatchFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.batchFees) {
      BatchFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchFeeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batchFees.push(BatchFees.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBatchFeeResponse {
    return {
      batchFees: Array.isArray(object?.batchFees) ? object.batchFees.map((e: any) => BatchFees.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryBatchFeeResponse): unknown {
    const obj: any = {};
    if (message.batchFees) {
      obj.batchFees = message.batchFees.map((e) => e ? BatchFees.toJSON(e) : undefined);
    } else {
      obj.batchFees = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchFeeResponse>, I>>(object: I): QueryBatchFeeResponse {
    const message = createBaseQueryBatchFeeResponse();
    message.batchFees = object.batchFees?.map((e) => BatchFees.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryLastPendingBatchRequestByAddrRequest(): QueryLastPendingBatchRequestByAddrRequest {
  return { address: "", chainIdentifier: "" };
}

export const QueryLastPendingBatchRequestByAddrRequest = {
  encode(message: QueryLastPendingBatchRequestByAddrRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(18).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingBatchRequestByAddrRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPendingBatchRequestByAddrRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLastPendingBatchRequestByAddrRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: QueryLastPendingBatchRequestByAddrRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastPendingBatchRequestByAddrRequest>, I>>(
    object: I,
  ): QueryLastPendingBatchRequestByAddrRequest {
    const message = createBaseQueryLastPendingBatchRequestByAddrRequest();
    message.address = object.address ?? "";
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseQueryLastPendingBatchRequestByAddrResponse(): QueryLastPendingBatchRequestByAddrResponse {
  return { batch: [] };
}

export const QueryLastPendingBatchRequestByAddrResponse = {
  encode(message: QueryLastPendingBatchRequestByAddrResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.batch) {
      OutgoingTxBatch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingBatchRequestByAddrResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batch.push(OutgoingTxBatch.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLastPendingBatchRequestByAddrResponse {
    return { batch: Array.isArray(object?.batch) ? object.batch.map((e: any) => OutgoingTxBatch.fromJSON(e)) : [] };
  },

  toJSON(message: QueryLastPendingBatchRequestByAddrResponse): unknown {
    const obj: any = {};
    if (message.batch) {
      obj.batch = message.batch.map((e) => e ? OutgoingTxBatch.toJSON(e) : undefined);
    } else {
      obj.batch = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastPendingBatchRequestByAddrResponse>, I>>(
    object: I,
  ): QueryLastPendingBatchRequestByAddrResponse {
    const message = createBaseQueryLastPendingBatchRequestByAddrResponse();
    message.batch = object.batch?.map((e) => OutgoingTxBatch.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryLastPendingLogicCallByAddrRequest(): QueryLastPendingLogicCallByAddrRequest {
  return { address: "", chainIdentifier: "" };
}

export const QueryLastPendingLogicCallByAddrRequest = {
  encode(message: QueryLastPendingLogicCallByAddrRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(18).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingLogicCallByAddrRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPendingLogicCallByAddrRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLastPendingLogicCallByAddrRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: QueryLastPendingLogicCallByAddrRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastPendingLogicCallByAddrRequest>, I>>(
    object: I,
  ): QueryLastPendingLogicCallByAddrRequest {
    const message = createBaseQueryLastPendingLogicCallByAddrRequest();
    message.address = object.address ?? "";
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseQueryLastPendingLogicCallByAddrResponse(): QueryLastPendingLogicCallByAddrResponse {
  return { call: [] };
}

export const QueryLastPendingLogicCallByAddrResponse = {
  encode(message: QueryLastPendingLogicCallByAddrResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.call) {
      OutgoingLogicCall.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastPendingLogicCallByAddrResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastPendingLogicCallByAddrResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.call.push(OutgoingLogicCall.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLastPendingLogicCallByAddrResponse {
    return { call: Array.isArray(object?.call) ? object.call.map((e: any) => OutgoingLogicCall.fromJSON(e)) : [] };
  },

  toJSON(message: QueryLastPendingLogicCallByAddrResponse): unknown {
    const obj: any = {};
    if (message.call) {
      obj.call = message.call.map((e) => e ? OutgoingLogicCall.toJSON(e) : undefined);
    } else {
      obj.call = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastPendingLogicCallByAddrResponse>, I>>(
    object: I,
  ): QueryLastPendingLogicCallByAddrResponse {
    const message = createBaseQueryLastPendingLogicCallByAddrResponse();
    message.call = object.call?.map((e) => OutgoingLogicCall.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryOutgoingTxBatchesRequest(): QueryOutgoingTxBatchesRequest {
  return { chainIdentifier: "" };
}

export const QueryOutgoingTxBatchesRequest = {
  encode(message: QueryOutgoingTxBatchesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainIdentifier !== "") {
      writer.uint32(10).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutgoingTxBatchesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutgoingTxBatchesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOutgoingTxBatchesRequest {
    return { chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "" };
  },

  toJSON(message: QueryOutgoingTxBatchesRequest): unknown {
    const obj: any = {};
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOutgoingTxBatchesRequest>, I>>(
    object: I,
  ): QueryOutgoingTxBatchesRequest {
    const message = createBaseQueryOutgoingTxBatchesRequest();
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseQueryOutgoingTxBatchesResponse(): QueryOutgoingTxBatchesResponse {
  return { batches: [] };
}

export const QueryOutgoingTxBatchesResponse = {
  encode(message: QueryOutgoingTxBatchesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.batches) {
      OutgoingTxBatch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutgoingTxBatchesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutgoingTxBatchesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batches.push(OutgoingTxBatch.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOutgoingTxBatchesResponse {
    return {
      batches: Array.isArray(object?.batches) ? object.batches.map((e: any) => OutgoingTxBatch.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryOutgoingTxBatchesResponse): unknown {
    const obj: any = {};
    if (message.batches) {
      obj.batches = message.batches.map((e) => e ? OutgoingTxBatch.toJSON(e) : undefined);
    } else {
      obj.batches = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOutgoingTxBatchesResponse>, I>>(
    object: I,
  ): QueryOutgoingTxBatchesResponse {
    const message = createBaseQueryOutgoingTxBatchesResponse();
    message.batches = object.batches?.map((e) => OutgoingTxBatch.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryOutgoingLogicCallsRequest(): QueryOutgoingLogicCallsRequest {
  return { chainIdentifier: "" };
}

export const QueryOutgoingLogicCallsRequest = {
  encode(message: QueryOutgoingLogicCallsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.chainIdentifier !== "") {
      writer.uint32(10).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutgoingLogicCallsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutgoingLogicCallsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOutgoingLogicCallsRequest {
    return { chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "" };
  },

  toJSON(message: QueryOutgoingLogicCallsRequest): unknown {
    const obj: any = {};
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOutgoingLogicCallsRequest>, I>>(
    object: I,
  ): QueryOutgoingLogicCallsRequest {
    const message = createBaseQueryOutgoingLogicCallsRequest();
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseQueryOutgoingLogicCallsResponse(): QueryOutgoingLogicCallsResponse {
  return { calls: [] };
}

export const QueryOutgoingLogicCallsResponse = {
  encode(message: QueryOutgoingLogicCallsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.calls) {
      OutgoingLogicCall.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOutgoingLogicCallsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOutgoingLogicCallsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.calls.push(OutgoingLogicCall.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOutgoingLogicCallsResponse {
    return { calls: Array.isArray(object?.calls) ? object.calls.map((e: any) => OutgoingLogicCall.fromJSON(e)) : [] };
  },

  toJSON(message: QueryOutgoingLogicCallsResponse): unknown {
    const obj: any = {};
    if (message.calls) {
      obj.calls = message.calls.map((e) => e ? OutgoingLogicCall.toJSON(e) : undefined);
    } else {
      obj.calls = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOutgoingLogicCallsResponse>, I>>(
    object: I,
  ): QueryOutgoingLogicCallsResponse {
    const message = createBaseQueryOutgoingLogicCallsResponse();
    message.calls = object.calls?.map((e) => OutgoingLogicCall.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryBatchRequestByNonceRequest(): QueryBatchRequestByNonceRequest {
  return { nonce: 0, contractAddress: "", chainIdentifier: "" };
}

export const QueryBatchRequestByNonceRequest = {
  encode(message: QueryBatchRequestByNonceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nonce !== 0) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(26).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchRequestByNonceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchRequestByNonceRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.contractAddress = reader.string();
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

  fromJSON(object: any): QueryBatchRequestByNonceRequest {
    return {
      nonce: isSet(object.nonce) ? Number(object.nonce) : 0,
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: QueryBatchRequestByNonceRequest): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchRequestByNonceRequest>, I>>(
    object: I,
  ): QueryBatchRequestByNonceRequest {
    const message = createBaseQueryBatchRequestByNonceRequest();
    message.nonce = object.nonce ?? 0;
    message.contractAddress = object.contractAddress ?? "";
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseQueryBatchRequestByNonceResponse(): QueryBatchRequestByNonceResponse {
  return { batch: undefined };
}

export const QueryBatchRequestByNonceResponse = {
  encode(message: QueryBatchRequestByNonceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.batch !== undefined) {
      OutgoingTxBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchRequestByNonceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchRequestByNonceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.batch = OutgoingTxBatch.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBatchRequestByNonceResponse {
    return { batch: isSet(object.batch) ? OutgoingTxBatch.fromJSON(object.batch) : undefined };
  },

  toJSON(message: QueryBatchRequestByNonceResponse): unknown {
    const obj: any = {};
    message.batch !== undefined && (obj.batch = message.batch ? OutgoingTxBatch.toJSON(message.batch) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchRequestByNonceResponse>, I>>(
    object: I,
  ): QueryBatchRequestByNonceResponse {
    const message = createBaseQueryBatchRequestByNonceResponse();
    message.batch = (object.batch !== undefined && object.batch !== null)
      ? OutgoingTxBatch.fromPartial(object.batch)
      : undefined;
    return message;
  },
};

function createBaseQueryBatchConfirmsRequest(): QueryBatchConfirmsRequest {
  return { nonce: 0, contractAddress: "", chainIdentifier: "" };
}

export const QueryBatchConfirmsRequest = {
  encode(message: QueryBatchConfirmsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nonce !== 0) {
      writer.uint32(8).uint64(message.nonce);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(26).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchConfirmsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchConfirmsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nonce = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.contractAddress = reader.string();
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

  fromJSON(object: any): QueryBatchConfirmsRequest {
    return {
      nonce: isSet(object.nonce) ? Number(object.nonce) : 0,
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: QueryBatchConfirmsRequest): unknown {
    const obj: any = {};
    message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
    message.contractAddress !== undefined && (obj.contractAddress = message.contractAddress);
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchConfirmsRequest>, I>>(object: I): QueryBatchConfirmsRequest {
    const message = createBaseQueryBatchConfirmsRequest();
    message.nonce = object.nonce ?? 0;
    message.contractAddress = object.contractAddress ?? "";
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseQueryBatchConfirmsResponse(): QueryBatchConfirmsResponse {
  return { confirms: [] };
}

export const QueryBatchConfirmsResponse = {
  encode(message: QueryBatchConfirmsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.confirms) {
      MsgConfirmBatch.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryBatchConfirmsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryBatchConfirmsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirms.push(MsgConfirmBatch.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBatchConfirmsResponse {
    return {
      confirms: Array.isArray(object?.confirms) ? object.confirms.map((e: any) => MsgConfirmBatch.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryBatchConfirmsResponse): unknown {
    const obj: any = {};
    if (message.confirms) {
      obj.confirms = message.confirms.map((e) => e ? MsgConfirmBatch.toJSON(e) : undefined);
    } else {
      obj.confirms = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryBatchConfirmsResponse>, I>>(object: I): QueryBatchConfirmsResponse {
    const message = createBaseQueryBatchConfirmsResponse();
    message.confirms = object.confirms?.map((e) => MsgConfirmBatch.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryLogicConfirmsRequest(): QueryLogicConfirmsRequest {
  return { invalidationId: new Uint8Array(), invalidationNonce: 0, chainIdentifier: "" };
}

export const QueryLogicConfirmsRequest = {
  encode(message: QueryLogicConfirmsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.invalidationId.length !== 0) {
      writer.uint32(10).bytes(message.invalidationId);
    }
    if (message.invalidationNonce !== 0) {
      writer.uint32(16).uint64(message.invalidationNonce);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(26).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLogicConfirmsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLogicConfirmsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.invalidationId = reader.bytes();
          break;
        case 2:
          message.invalidationNonce = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): QueryLogicConfirmsRequest {
    return {
      invalidationId: isSet(object.invalidationId) ? bytesFromBase64(object.invalidationId) : new Uint8Array(),
      invalidationNonce: isSet(object.invalidationNonce) ? Number(object.invalidationNonce) : 0,
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: QueryLogicConfirmsRequest): unknown {
    const obj: any = {};
    message.invalidationId !== undefined
      && (obj.invalidationId = base64FromBytes(
        message.invalidationId !== undefined ? message.invalidationId : new Uint8Array(),
      ));
    message.invalidationNonce !== undefined && (obj.invalidationNonce = Math.round(message.invalidationNonce));
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLogicConfirmsRequest>, I>>(object: I): QueryLogicConfirmsRequest {
    const message = createBaseQueryLogicConfirmsRequest();
    message.invalidationId = object.invalidationId ?? new Uint8Array();
    message.invalidationNonce = object.invalidationNonce ?? 0;
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseQueryLogicConfirmsResponse(): QueryLogicConfirmsResponse {
  return { confirms: [] };
}

export const QueryLogicConfirmsResponse = {
  encode(message: QueryLogicConfirmsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.confirms) {
      MsgConfirmLogicCall.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLogicConfirmsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLogicConfirmsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.confirms.push(MsgConfirmLogicCall.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLogicConfirmsResponse {
    return {
      confirms: Array.isArray(object?.confirms) ? object.confirms.map((e: any) => MsgConfirmLogicCall.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryLogicConfirmsResponse): unknown {
    const obj: any = {};
    if (message.confirms) {
      obj.confirms = message.confirms.map((e) => e ? MsgConfirmLogicCall.toJSON(e) : undefined);
    } else {
      obj.confirms = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLogicConfirmsResponse>, I>>(object: I): QueryLogicConfirmsResponse {
    const message = createBaseQueryLogicConfirmsResponse();
    message.confirms = object.confirms?.map((e) => MsgConfirmLogicCall.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryLastEventNonceByAddrRequest(): QueryLastEventNonceByAddrRequest {
  return { address: "", chainIdentifier: "" };
}

export const QueryLastEventNonceByAddrRequest = {
  encode(message: QueryLastEventNonceByAddrRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(18).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastEventNonceByAddrRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastEventNonceByAddrRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLastEventNonceByAddrRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: QueryLastEventNonceByAddrRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastEventNonceByAddrRequest>, I>>(
    object: I,
  ): QueryLastEventNonceByAddrRequest {
    const message = createBaseQueryLastEventNonceByAddrRequest();
    message.address = object.address ?? "";
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseQueryLastEventNonceByAddrResponse(): QueryLastEventNonceByAddrResponse {
  return { eventNonce: 0 };
}

export const QueryLastEventNonceByAddrResponse = {
  encode(message: QueryLastEventNonceByAddrResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.eventNonce !== 0) {
      writer.uint32(8).uint64(message.eventNonce);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryLastEventNonceByAddrResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryLastEventNonceByAddrResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.eventNonce = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryLastEventNonceByAddrResponse {
    return { eventNonce: isSet(object.eventNonce) ? Number(object.eventNonce) : 0 };
  },

  toJSON(message: QueryLastEventNonceByAddrResponse): unknown {
    const obj: any = {};
    message.eventNonce !== undefined && (obj.eventNonce = Math.round(message.eventNonce));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryLastEventNonceByAddrResponse>, I>>(
    object: I,
  ): QueryLastEventNonceByAddrResponse {
    const message = createBaseQueryLastEventNonceByAddrResponse();
    message.eventNonce = object.eventNonce ?? 0;
    return message;
  },
};

function createBaseQueryERC20ToDenomRequest(): QueryERC20ToDenomRequest {
  return { erc20: "", chainIdentifier: "" };
}

export const QueryERC20ToDenomRequest = {
  encode(message: QueryERC20ToDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.erc20 !== "") {
      writer.uint32(10).string(message.erc20);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(18).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryERC20ToDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryERC20ToDenomRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.erc20 = reader.string();
          break;
        case 2:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryERC20ToDenomRequest {
    return {
      erc20: isSet(object.erc20) ? String(object.erc20) : "",
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: QueryERC20ToDenomRequest): unknown {
    const obj: any = {};
    message.erc20 !== undefined && (obj.erc20 = message.erc20);
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryERC20ToDenomRequest>, I>>(object: I): QueryERC20ToDenomRequest {
    const message = createBaseQueryERC20ToDenomRequest();
    message.erc20 = object.erc20 ?? "";
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseQueryERC20ToDenomResponse(): QueryERC20ToDenomResponse {
  return { denom: "", cosmosOriginated: false };
}

export const QueryERC20ToDenomResponse = {
  encode(message: QueryERC20ToDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.cosmosOriginated === true) {
      writer.uint32(16).bool(message.cosmosOriginated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryERC20ToDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryERC20ToDenomResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.cosmosOriginated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryERC20ToDenomResponse {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      cosmosOriginated: isSet(object.cosmosOriginated) ? Boolean(object.cosmosOriginated) : false,
    };
  },

  toJSON(message: QueryERC20ToDenomResponse): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.cosmosOriginated !== undefined && (obj.cosmosOriginated = message.cosmosOriginated);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryERC20ToDenomResponse>, I>>(object: I): QueryERC20ToDenomResponse {
    const message = createBaseQueryERC20ToDenomResponse();
    message.denom = object.denom ?? "";
    message.cosmosOriginated = object.cosmosOriginated ?? false;
    return message;
  },
};

function createBaseQueryDenomToERC20Request(): QueryDenomToERC20Request {
  return { denom: "", chainIdentifier: "" };
}

export const QueryDenomToERC20Request = {
  encode(message: QueryDenomToERC20Request, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(18).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomToERC20Request {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomToERC20Request();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomToERC20Request {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: QueryDenomToERC20Request): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomToERC20Request>, I>>(object: I): QueryDenomToERC20Request {
    const message = createBaseQueryDenomToERC20Request();
    message.denom = object.denom ?? "";
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseQueryDenomToERC20Response(): QueryDenomToERC20Response {
  return { erc20: "", cosmosOriginated: false };
}

export const QueryDenomToERC20Response = {
  encode(message: QueryDenomToERC20Response, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.erc20 !== "") {
      writer.uint32(10).string(message.erc20);
    }
    if (message.cosmosOriginated === true) {
      writer.uint32(16).bool(message.cosmosOriginated);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomToERC20Response {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomToERC20Response();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.erc20 = reader.string();
          break;
        case 2:
          message.cosmosOriginated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomToERC20Response {
    return {
      erc20: isSet(object.erc20) ? String(object.erc20) : "",
      cosmosOriginated: isSet(object.cosmosOriginated) ? Boolean(object.cosmosOriginated) : false,
    };
  },

  toJSON(message: QueryDenomToERC20Response): unknown {
    const obj: any = {};
    message.erc20 !== undefined && (obj.erc20 = message.erc20);
    message.cosmosOriginated !== undefined && (obj.cosmosOriginated = message.cosmosOriginated);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomToERC20Response>, I>>(object: I): QueryDenomToERC20Response {
    const message = createBaseQueryDenomToERC20Response();
    message.erc20 = object.erc20 ?? "";
    message.cosmosOriginated = object.cosmosOriginated ?? false;
    return message;
  },
};

function createBaseQueryAttestationsRequest(): QueryAttestationsRequest {
  return { limit: 0, orderBy: "", claimType: "", nonce: 0, height: 0, chainIdentifier: "" };
}

export const QueryAttestationsRequest = {
  encode(message: QueryAttestationsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.orderBy !== "") {
      writer.uint32(18).string(message.orderBy);
    }
    if (message.claimType !== "") {
      writer.uint32(26).string(message.claimType);
    }
    if (message.nonce !== 0) {
      writer.uint32(32).uint64(message.nonce);
    }
    if (message.height !== 0) {
      writer.uint32(40).uint64(message.height);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(50).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestationsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAttestationsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limit = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.orderBy = reader.string();
          break;
        case 3:
          message.claimType = reader.string();
          break;
        case 4:
          message.nonce = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.height = longToNumber(reader.uint64() as Long);
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

  fromJSON(object: any): QueryAttestationsRequest {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      orderBy: isSet(object.orderBy) ? String(object.orderBy) : "",
      claimType: isSet(object.claimType) ? String(object.claimType) : "",
      nonce: isSet(object.nonce) ? Number(object.nonce) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: QueryAttestationsRequest): unknown {
    const obj: any = {};
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.orderBy !== undefined && (obj.orderBy = message.orderBy);
    message.claimType !== undefined && (obj.claimType = message.claimType);
    message.nonce !== undefined && (obj.nonce = Math.round(message.nonce));
    message.height !== undefined && (obj.height = Math.round(message.height));
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAttestationsRequest>, I>>(object: I): QueryAttestationsRequest {
    const message = createBaseQueryAttestationsRequest();
    message.limit = object.limit ?? 0;
    message.orderBy = object.orderBy ?? "";
    message.claimType = object.claimType ?? "";
    message.nonce = object.nonce ?? 0;
    message.height = object.height ?? 0;
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseQueryAttestationsResponse(): QueryAttestationsResponse {
  return { attestations: [] };
}

export const QueryAttestationsResponse = {
  encode(message: QueryAttestationsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.attestations) {
      Attestation.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAttestationsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAttestationsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.attestations.push(Attestation.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAttestationsResponse {
    return {
      attestations: Array.isArray(object?.attestations)
        ? object.attestations.map((e: any) => Attestation.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryAttestationsResponse): unknown {
    const obj: any = {};
    if (message.attestations) {
      obj.attestations = message.attestations.map((e) => e ? Attestation.toJSON(e) : undefined);
    } else {
      obj.attestations = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAttestationsResponse>, I>>(object: I): QueryAttestationsResponse {
    const message = createBaseQueryAttestationsResponse();
    message.attestations = object.attestations?.map((e) => Attestation.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryPendingSendToEth(): QueryPendingSendToEth {
  return { senderAddress: "", chainIdentifier: "" };
}

export const QueryPendingSendToEth = {
  encode(message: QueryPendingSendToEth, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.senderAddress !== "") {
      writer.uint32(10).string(message.senderAddress);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(18).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingSendToEth {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingSendToEth();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.senderAddress = reader.string();
          break;
        case 2:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPendingSendToEth {
    return {
      senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : "",
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: QueryPendingSendToEth): unknown {
    const obj: any = {};
    message.senderAddress !== undefined && (obj.senderAddress = message.senderAddress);
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPendingSendToEth>, I>>(object: I): QueryPendingSendToEth {
    const message = createBaseQueryPendingSendToEth();
    message.senderAddress = object.senderAddress ?? "";
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseQueryPendingSendToEthResponse(): QueryPendingSendToEthResponse {
  return { transfersInBatches: [], unbatchedTransfers: [] };
}

export const QueryPendingSendToEthResponse = {
  encode(message: QueryPendingSendToEthResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.transfersInBatches) {
      OutgoingTransferTx.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.unbatchedTransfers) {
      OutgoingTransferTx.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingSendToEthResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingSendToEthResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.transfersInBatches.push(OutgoingTransferTx.decode(reader, reader.uint32()));
          break;
        case 2:
          message.unbatchedTransfers.push(OutgoingTransferTx.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPendingSendToEthResponse {
    return {
      transfersInBatches: Array.isArray(object?.transfersInBatches)
        ? object.transfersInBatches.map((e: any) => OutgoingTransferTx.fromJSON(e))
        : [],
      unbatchedTransfers: Array.isArray(object?.unbatchedTransfers)
        ? object.unbatchedTransfers.map((e: any) => OutgoingTransferTx.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryPendingSendToEthResponse): unknown {
    const obj: any = {};
    if (message.transfersInBatches) {
      obj.transfersInBatches = message.transfersInBatches.map((e) => e ? OutgoingTransferTx.toJSON(e) : undefined);
    } else {
      obj.transfersInBatches = [];
    }
    if (message.unbatchedTransfers) {
      obj.unbatchedTransfers = message.unbatchedTransfers.map((e) => e ? OutgoingTransferTx.toJSON(e) : undefined);
    } else {
      obj.unbatchedTransfers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPendingSendToEthResponse>, I>>(
    object: I,
  ): QueryPendingSendToEthResponse {
    const message = createBaseQueryPendingSendToEthResponse();
    message.transfersInBatches = object.transfersInBatches?.map((e) => OutgoingTransferTx.fromPartial(e)) || [];
    message.unbatchedTransfers = object.unbatchedTransfers?.map((e) => OutgoingTransferTx.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryPendingIbcAutoForwards(): QueryPendingIbcAutoForwards {
  return { limit: 0, chainIdentifier: "" };
}

export const QueryPendingIbcAutoForwards = {
  encode(message: QueryPendingIbcAutoForwards, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limit !== 0) {
      writer.uint32(8).uint64(message.limit);
    }
    if (message.chainIdentifier !== "") {
      writer.uint32(18).string(message.chainIdentifier);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingIbcAutoForwards {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingIbcAutoForwards();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.limit = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.chainIdentifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPendingIbcAutoForwards {
    return {
      limit: isSet(object.limit) ? Number(object.limit) : 0,
      chainIdentifier: isSet(object.chainIdentifier) ? String(object.chainIdentifier) : "",
    };
  },

  toJSON(message: QueryPendingIbcAutoForwards): unknown {
    const obj: any = {};
    message.limit !== undefined && (obj.limit = Math.round(message.limit));
    message.chainIdentifier !== undefined && (obj.chainIdentifier = message.chainIdentifier);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPendingIbcAutoForwards>, I>>(object: I): QueryPendingIbcAutoForwards {
    const message = createBaseQueryPendingIbcAutoForwards();
    message.limit = object.limit ?? 0;
    message.chainIdentifier = object.chainIdentifier ?? "";
    return message;
  },
};

function createBaseQueryPendingIbcAutoForwardsResponse(): QueryPendingIbcAutoForwardsResponse {
  return { pendingIbcAutoForwards: [] };
}

export const QueryPendingIbcAutoForwardsResponse = {
  encode(message: QueryPendingIbcAutoForwardsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.pendingIbcAutoForwards) {
      PendingIbcAutoForward.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPendingIbcAutoForwardsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPendingIbcAutoForwardsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pendingIbcAutoForwards.push(PendingIbcAutoForward.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPendingIbcAutoForwardsResponse {
    return {
      pendingIbcAutoForwards: Array.isArray(object?.pendingIbcAutoForwards)
        ? object.pendingIbcAutoForwards.map((e: any) => PendingIbcAutoForward.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryPendingIbcAutoForwardsResponse): unknown {
    const obj: any = {};
    if (message.pendingIbcAutoForwards) {
      obj.pendingIbcAutoForwards = message.pendingIbcAutoForwards.map((e) =>
        e ? PendingIbcAutoForward.toJSON(e) : undefined
      );
    } else {
      obj.pendingIbcAutoForwards = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPendingIbcAutoForwardsResponse>, I>>(
    object: I,
  ): QueryPendingIbcAutoForwardsResponse {
    const message = createBaseQueryPendingIbcAutoForwardsResponse();
    message.pendingIbcAutoForwards = object.pendingIbcAutoForwards?.map((e) => PendingIbcAutoForward.fromPartial(e))
      || [];
    return message;
  },
};

/** Query defines the gRPC querier service */
export interface Query {
  Chains(request: QueryChainsRequest): Promise<QueryChainsResponse>;
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  CurrentValset(request: QueryCurrentValsetRequest): Promise<QueryCurrentValsetResponse>;
  ValsetRequest(request: QueryValsetRequestRequest): Promise<QueryValsetRequestResponse>;
  ValsetConfirm(request: QueryValsetConfirmRequest): Promise<QueryValsetConfirmResponse>;
  ValsetConfirmsByNonce(request: QueryValsetConfirmsByNonceRequest): Promise<QueryValsetConfirmsByNonceResponse>;
  LastValsetRequests(request: QueryLastValsetRequestsRequest): Promise<QueryLastValsetRequestsResponse>;
  LastPendingValsetRequestByAddr(
    request: QueryLastPendingValsetRequestByAddrRequest,
  ): Promise<QueryLastPendingValsetRequestByAddrResponse>;
  LastPendingBatchRequestByAddr(
    request: QueryLastPendingBatchRequestByAddrRequest,
  ): Promise<QueryLastPendingBatchRequestByAddrResponse>;
  LastPendingLogicCallByAddr(
    request: QueryLastPendingLogicCallByAddrRequest,
  ): Promise<QueryLastPendingLogicCallByAddrResponse>;
  LastEventNonceByAddr(request: QueryLastEventNonceByAddrRequest): Promise<QueryLastEventNonceByAddrResponse>;
  BatchFees(request: QueryBatchFeeRequest): Promise<QueryBatchFeeResponse>;
  OutgoingTxBatches(request: QueryOutgoingTxBatchesRequest): Promise<QueryOutgoingTxBatchesResponse>;
  OutgoingLogicCalls(request: QueryOutgoingLogicCallsRequest): Promise<QueryOutgoingLogicCallsResponse>;
  BatchRequestByNonce(request: QueryBatchRequestByNonceRequest): Promise<QueryBatchRequestByNonceResponse>;
  BatchConfirms(request: QueryBatchConfirmsRequest): Promise<QueryBatchConfirmsResponse>;
  LogicConfirms(request: QueryLogicConfirmsRequest): Promise<QueryLogicConfirmsResponse>;
  ERC20ToDenom(request: QueryERC20ToDenomRequest): Promise<QueryERC20ToDenomResponse>;
  DenomToERC20(request: QueryDenomToERC20Request): Promise<QueryDenomToERC20Response>;
  GetAttestations(request: QueryAttestationsRequest): Promise<QueryAttestationsResponse>;
  GetDelegateKeyByValidator(
    request: QueryDelegateKeysByValidatorAddress,
  ): Promise<QueryDelegateKeysByValidatorAddressResponse>;
  GetDelegateKeyByEth(request: QueryDelegateKeysByEthAddress): Promise<QueryDelegateKeysByEthAddressResponse>;
  GetDelegateKeyByOrchestrator(
    request: QueryDelegateKeysByOrchestratorAddress,
  ): Promise<QueryDelegateKeysByOrchestratorAddressResponse>;
  GetPendingSendToEth(request: QueryPendingSendToEth): Promise<QueryPendingSendToEthResponse>;
  GetPendingIbcAutoForwards(request: QueryPendingIbcAutoForwards): Promise<QueryPendingIbcAutoForwardsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Chains = this.Chains.bind(this);
    this.Params = this.Params.bind(this);
    this.CurrentValset = this.CurrentValset.bind(this);
    this.ValsetRequest = this.ValsetRequest.bind(this);
    this.ValsetConfirm = this.ValsetConfirm.bind(this);
    this.ValsetConfirmsByNonce = this.ValsetConfirmsByNonce.bind(this);
    this.LastValsetRequests = this.LastValsetRequests.bind(this);
    this.LastPendingValsetRequestByAddr = this.LastPendingValsetRequestByAddr.bind(this);
    this.LastPendingBatchRequestByAddr = this.LastPendingBatchRequestByAddr.bind(this);
    this.LastPendingLogicCallByAddr = this.LastPendingLogicCallByAddr.bind(this);
    this.LastEventNonceByAddr = this.LastEventNonceByAddr.bind(this);
    this.BatchFees = this.BatchFees.bind(this);
    this.OutgoingTxBatches = this.OutgoingTxBatches.bind(this);
    this.OutgoingLogicCalls = this.OutgoingLogicCalls.bind(this);
    this.BatchRequestByNonce = this.BatchRequestByNonce.bind(this);
    this.BatchConfirms = this.BatchConfirms.bind(this);
    this.LogicConfirms = this.LogicConfirms.bind(this);
    this.ERC20ToDenom = this.ERC20ToDenom.bind(this);
    this.DenomToERC20 = this.DenomToERC20.bind(this);
    this.GetAttestations = this.GetAttestations.bind(this);
    this.GetDelegateKeyByValidator = this.GetDelegateKeyByValidator.bind(this);
    this.GetDelegateKeyByEth = this.GetDelegateKeyByEth.bind(this);
    this.GetDelegateKeyByOrchestrator = this.GetDelegateKeyByOrchestrator.bind(this);
    this.GetPendingSendToEth = this.GetPendingSendToEth.bind(this);
    this.GetPendingIbcAutoForwards = this.GetPendingIbcAutoForwards.bind(this);
  }
  Chains(request: QueryChainsRequest): Promise<QueryChainsResponse> {
    const data = QueryChainsRequest.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Query", "Chains", data);
    return promise.then((data) => QueryChainsResponse.decode(new _m0.Reader(data)));
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  CurrentValset(request: QueryCurrentValsetRequest): Promise<QueryCurrentValsetResponse> {
    const data = QueryCurrentValsetRequest.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Query", "CurrentValset", data);
    return promise.then((data) => QueryCurrentValsetResponse.decode(new _m0.Reader(data)));
  }

  ValsetRequest(request: QueryValsetRequestRequest): Promise<QueryValsetRequestResponse> {
    const data = QueryValsetRequestRequest.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Query", "ValsetRequest", data);
    return promise.then((data) => QueryValsetRequestResponse.decode(new _m0.Reader(data)));
  }

  ValsetConfirm(request: QueryValsetConfirmRequest): Promise<QueryValsetConfirmResponse> {
    const data = QueryValsetConfirmRequest.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Query", "ValsetConfirm", data);
    return promise.then((data) => QueryValsetConfirmResponse.decode(new _m0.Reader(data)));
  }

  ValsetConfirmsByNonce(request: QueryValsetConfirmsByNonceRequest): Promise<QueryValsetConfirmsByNonceResponse> {
    const data = QueryValsetConfirmsByNonceRequest.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Query", "ValsetConfirmsByNonce", data);
    return promise.then((data) => QueryValsetConfirmsByNonceResponse.decode(new _m0.Reader(data)));
  }

  LastValsetRequests(request: QueryLastValsetRequestsRequest): Promise<QueryLastValsetRequestsResponse> {
    const data = QueryLastValsetRequestsRequest.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Query", "LastValsetRequests", data);
    return promise.then((data) => QueryLastValsetRequestsResponse.decode(new _m0.Reader(data)));
  }

  LastPendingValsetRequestByAddr(
    request: QueryLastPendingValsetRequestByAddrRequest,
  ): Promise<QueryLastPendingValsetRequestByAddrResponse> {
    const data = QueryLastPendingValsetRequestByAddrRequest.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Query", "LastPendingValsetRequestByAddr", data);
    return promise.then((data) => QueryLastPendingValsetRequestByAddrResponse.decode(new _m0.Reader(data)));
  }

  LastPendingBatchRequestByAddr(
    request: QueryLastPendingBatchRequestByAddrRequest,
  ): Promise<QueryLastPendingBatchRequestByAddrResponse> {
    const data = QueryLastPendingBatchRequestByAddrRequest.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Query", "LastPendingBatchRequestByAddr", data);
    return promise.then((data) => QueryLastPendingBatchRequestByAddrResponse.decode(new _m0.Reader(data)));
  }

  LastPendingLogicCallByAddr(
    request: QueryLastPendingLogicCallByAddrRequest,
  ): Promise<QueryLastPendingLogicCallByAddrResponse> {
    const data = QueryLastPendingLogicCallByAddrRequest.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Query", "LastPendingLogicCallByAddr", data);
    return promise.then((data) => QueryLastPendingLogicCallByAddrResponse.decode(new _m0.Reader(data)));
  }

  LastEventNonceByAddr(request: QueryLastEventNonceByAddrRequest): Promise<QueryLastEventNonceByAddrResponse> {
    const data = QueryLastEventNonceByAddrRequest.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Query", "LastEventNonceByAddr", data);
    return promise.then((data) => QueryLastEventNonceByAddrResponse.decode(new _m0.Reader(data)));
  }

  BatchFees(request: QueryBatchFeeRequest): Promise<QueryBatchFeeResponse> {
    const data = QueryBatchFeeRequest.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Query", "BatchFees", data);
    return promise.then((data) => QueryBatchFeeResponse.decode(new _m0.Reader(data)));
  }

  OutgoingTxBatches(request: QueryOutgoingTxBatchesRequest): Promise<QueryOutgoingTxBatchesResponse> {
    const data = QueryOutgoingTxBatchesRequest.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Query", "OutgoingTxBatches", data);
    return promise.then((data) => QueryOutgoingTxBatchesResponse.decode(new _m0.Reader(data)));
  }

  OutgoingLogicCalls(request: QueryOutgoingLogicCallsRequest): Promise<QueryOutgoingLogicCallsResponse> {
    const data = QueryOutgoingLogicCallsRequest.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Query", "OutgoingLogicCalls", data);
    return promise.then((data) => QueryOutgoingLogicCallsResponse.decode(new _m0.Reader(data)));
  }

  BatchRequestByNonce(request: QueryBatchRequestByNonceRequest): Promise<QueryBatchRequestByNonceResponse> {
    const data = QueryBatchRequestByNonceRequest.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Query", "BatchRequestByNonce", data);
    return promise.then((data) => QueryBatchRequestByNonceResponse.decode(new _m0.Reader(data)));
  }

  BatchConfirms(request: QueryBatchConfirmsRequest): Promise<QueryBatchConfirmsResponse> {
    const data = QueryBatchConfirmsRequest.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Query", "BatchConfirms", data);
    return promise.then((data) => QueryBatchConfirmsResponse.decode(new _m0.Reader(data)));
  }

  LogicConfirms(request: QueryLogicConfirmsRequest): Promise<QueryLogicConfirmsResponse> {
    const data = QueryLogicConfirmsRequest.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Query", "LogicConfirms", data);
    return promise.then((data) => QueryLogicConfirmsResponse.decode(new _m0.Reader(data)));
  }

  ERC20ToDenom(request: QueryERC20ToDenomRequest): Promise<QueryERC20ToDenomResponse> {
    const data = QueryERC20ToDenomRequest.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Query", "ERC20ToDenom", data);
    return promise.then((data) => QueryERC20ToDenomResponse.decode(new _m0.Reader(data)));
  }

  DenomToERC20(request: QueryDenomToERC20Request): Promise<QueryDenomToERC20Response> {
    const data = QueryDenomToERC20Request.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Query", "DenomToERC20", data);
    return promise.then((data) => QueryDenomToERC20Response.decode(new _m0.Reader(data)));
  }

  GetAttestations(request: QueryAttestationsRequest): Promise<QueryAttestationsResponse> {
    const data = QueryAttestationsRequest.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Query", "GetAttestations", data);
    return promise.then((data) => QueryAttestationsResponse.decode(new _m0.Reader(data)));
  }

  GetDelegateKeyByValidator(
    request: QueryDelegateKeysByValidatorAddress,
  ): Promise<QueryDelegateKeysByValidatorAddressResponse> {
    const data = QueryDelegateKeysByValidatorAddress.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Query", "GetDelegateKeyByValidator", data);
    return promise.then((data) => QueryDelegateKeysByValidatorAddressResponse.decode(new _m0.Reader(data)));
  }

  GetDelegateKeyByEth(request: QueryDelegateKeysByEthAddress): Promise<QueryDelegateKeysByEthAddressResponse> {
    const data = QueryDelegateKeysByEthAddress.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Query", "GetDelegateKeyByEth", data);
    return promise.then((data) => QueryDelegateKeysByEthAddressResponse.decode(new _m0.Reader(data)));
  }

  GetDelegateKeyByOrchestrator(
    request: QueryDelegateKeysByOrchestratorAddress,
  ): Promise<QueryDelegateKeysByOrchestratorAddressResponse> {
    const data = QueryDelegateKeysByOrchestratorAddress.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Query", "GetDelegateKeyByOrchestrator", data);
    return promise.then((data) => QueryDelegateKeysByOrchestratorAddressResponse.decode(new _m0.Reader(data)));
  }

  GetPendingSendToEth(request: QueryPendingSendToEth): Promise<QueryPendingSendToEthResponse> {
    const data = QueryPendingSendToEth.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Query", "GetPendingSendToEth", data);
    return promise.then((data) => QueryPendingSendToEthResponse.decode(new _m0.Reader(data)));
  }

  GetPendingIbcAutoForwards(request: QueryPendingIbcAutoForwards): Promise<QueryPendingIbcAutoForwardsResponse> {
    const data = QueryPendingIbcAutoForwards.encode(request).finish();
    const promise = this.rpc.request("multigravity.v1.Query", "GetPendingIbcAutoForwards", data);
    return promise.then((data) => QueryPendingIbcAutoForwardsResponse.decode(new _m0.Reader(data)));
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
