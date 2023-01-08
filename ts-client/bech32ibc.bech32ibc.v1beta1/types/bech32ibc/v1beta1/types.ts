/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Duration } from "../../google/protobuf/duration";

export const protobufPackage = "bech32ibc.bech32ibc.v1beta1";

/**
 * An HrpIbcRecord maps a bech32 human-readable prefix to an IBC source
 * channel
 */
export interface HrpIbcRecord {
  /** The bech32 human readable prefix that serves as the key */
  hrp: string;
  /** the channel by which the packet will be sent */
  sourceChannel: string;
  icsToHeightOffset: number;
  icsToTimeOffset: Duration | undefined;
}

function createBaseHrpIbcRecord(): HrpIbcRecord {
  return { hrp: "", sourceChannel: "", icsToHeightOffset: 0, icsToTimeOffset: undefined };
}

export const HrpIbcRecord = {
  encode(message: HrpIbcRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hrp !== "") {
      writer.uint32(10).string(message.hrp);
    }
    if (message.sourceChannel !== "") {
      writer.uint32(18).string(message.sourceChannel);
    }
    if (message.icsToHeightOffset !== 0) {
      writer.uint32(24).uint64(message.icsToHeightOffset);
    }
    if (message.icsToTimeOffset !== undefined) {
      Duration.encode(message.icsToTimeOffset, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HrpIbcRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHrpIbcRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hrp = reader.string();
          break;
        case 2:
          message.sourceChannel = reader.string();
          break;
        case 3:
          message.icsToHeightOffset = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.icsToTimeOffset = Duration.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): HrpIbcRecord {
    return {
      hrp: isSet(object.hrp) ? String(object.hrp) : "",
      sourceChannel: isSet(object.sourceChannel) ? String(object.sourceChannel) : "",
      icsToHeightOffset: isSet(object.icsToHeightOffset) ? Number(object.icsToHeightOffset) : 0,
      icsToTimeOffset: isSet(object.icsToTimeOffset) ? Duration.fromJSON(object.icsToTimeOffset) : undefined,
    };
  },

  toJSON(message: HrpIbcRecord): unknown {
    const obj: any = {};
    message.hrp !== undefined && (obj.hrp = message.hrp);
    message.sourceChannel !== undefined && (obj.sourceChannel = message.sourceChannel);
    message.icsToHeightOffset !== undefined && (obj.icsToHeightOffset = Math.round(message.icsToHeightOffset));
    message.icsToTimeOffset !== undefined
      && (obj.icsToTimeOffset = message.icsToTimeOffset ? Duration.toJSON(message.icsToTimeOffset) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<HrpIbcRecord>, I>>(object: I): HrpIbcRecord {
    const message = createBaseHrpIbcRecord();
    message.hrp = object.hrp ?? "";
    message.sourceChannel = object.sourceChannel ?? "";
    message.icsToHeightOffset = object.icsToHeightOffset ?? 0;
    message.icsToTimeOffset = (object.icsToTimeOffset !== undefined && object.icsToTimeOffset !== null)
      ? Duration.fromPartial(object.icsToTimeOffset)
      : undefined;
    return message;
  },
};

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
