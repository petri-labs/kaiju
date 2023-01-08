/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { HrpIbcRecord } from "./types";

export const protobufPackage = "bech32ibc.bech32ibc.v1beta1";

export interface GenesisState {
  nativeHRP: string;
  hrpIBCRecords: HrpIbcRecord[];
}

function createBaseGenesisState(): GenesisState {
  return { nativeHRP: "", hrpIBCRecords: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nativeHRP !== "") {
      writer.uint32(10).string(message.nativeHRP);
    }
    for (const v of message.hrpIBCRecords) {
      HrpIbcRecord.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nativeHRP = reader.string();
          break;
        case 2:
          message.hrpIBCRecords.push(HrpIbcRecord.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      nativeHRP: isSet(object.nativeHRP) ? String(object.nativeHRP) : "",
      hrpIBCRecords: Array.isArray(object?.hrpIBCRecords)
        ? object.hrpIBCRecords.map((e: any) => HrpIbcRecord.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.nativeHRP !== undefined && (obj.nativeHRP = message.nativeHRP);
    if (message.hrpIBCRecords) {
      obj.hrpIBCRecords = message.hrpIBCRecords.map((e) => e ? HrpIbcRecord.toJSON(e) : undefined);
    } else {
      obj.hrpIBCRecords = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.nativeHRP = object.nativeHRP ?? "";
    message.hrpIBCRecords = object.hrpIBCRecords?.map((e) => HrpIbcRecord.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
