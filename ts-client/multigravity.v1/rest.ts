/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface Gravityv1MsgConfirmBatch {
  /** @format uint64 */
  nonce?: string;
  token_contract?: string;
  eth_signer?: string;
  orchestrator?: string;
  signature?: string;
}

export interface Gravityv1MsgConfirmLogicCall {
  invalidation_id?: string;

  /** @format uint64 */
  invalidation_nonce?: string;
  eth_signer?: string;
  orchestrator?: string;
  signature?: string;
}

/**
* MsgValsetConfirm
this is the message sent by the validators when they wish to submit their
signatures over the validator set at a given block height. A validator must
first call MsgSetEthAddress to set their Ethereum address to be used for
signing. Then someone (anyone) must make a ValsetRequest, the request is
essentially a messaging mechanism to determine which block all validators
should submit signatures over. Finally validators sign the validator set,
powers, and Ethereum addresses of the entire validator set at the height of a
ValsetRequest and submit that signature with this message.

If a sufficient number of validators (66% of voting power) (A) have set
Ethereum addresses and (B) submit ValsetConfirm messages with their
signatures it is then possible for anyone to view these signatures in the
chain store and submit them to Ethereum to update the validator set
-------------
*/
export interface Gravityv1MsgValsetConfirm {
  /** @format uint64 */
  nonce?: string;
  orchestrator?: string;
  eth_address?: string;
  signature?: string;
}

/**
* unbond_slashing_valsets_window

The unbond slashing valsets window is used to determine how many blocks after starting to unbond
a validator needs to continue signing blocks. The goal of this paramater is that when a validator leaves
the set, if their leaving creates enough change in the validator set to justify an update they will sign
a validator set update for the Ethereum bridge that does not include themselves. Allowing us to remove them
from the Ethereum bridge and replace them with the new set gracefully.

valset_reward

These parameters allow for the bridge oracle to resolve a fork on the Ethereum chain without halting
the chain. Once set reset bridge state will roll back events to the nonce provided in reset_bridge_nonce
if and only if those events have not yet been observed (executed on the Cosmos chain). This allows for easy
handling of cases where for example an Ethereum hardfork has occured and more than 1/3 of the vlaidtor set
disagrees with the rest. Normally this would require a chain halt, manual genesis editing and restar to resolve
with this feature a governance proposal can be used instead

bridge_active

This boolean flag can be used by governance to temporarily halt the bridge due to a vulnerability or other issue
In this context halting the bridge means prevent the execution of any oracle events from Ethereum and preventing
the creation of new batches that may be relayed to Ethereum.
This does not prevent the creation of validator sets
or slashing for not submitting validator set signatures as either of these might allow key signers to leave the validator
set and steal funds on Ethereum without consequence.
The practical outcome of this flag being set to 'false' is that deposits from Ethereum will not show up and withdraws from
Cosmos will not execute on Ethereum.
*/
export interface Gravityv1Params {
  gravity_id?: string;
  contract_source_hash?: string;
  bridge_ethereum_address?: string;

  /** @format uint64 */
  bridge_chain_id?: string;

  /** @format uint64 */
  signed_valsets_window?: string;

  /** @format uint64 */
  signed_batches_window?: string;

  /** @format uint64 */
  signed_logic_calls_window?: string;

  /** @format uint64 */
  target_batch_timeout?: string;

  /** @format uint64 */
  average_block_time?: string;

  /** @format uint64 */
  average_ethereum_block_time?: string;

  /** @format byte */
  slash_fraction_valset?: string;

  /** @format byte */
  slash_fraction_batch?: string;

  /** @format byte */
  slash_fraction_logic_call?: string;

  /** @format uint64 */
  unbond_slashing_valsets_window?: string;

  /** @format byte */
  slash_fraction_bad_eth_signature?: string;

  /**
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  valset_reward?: V1Beta1Coin;
  bridge_active?: boolean;

  /**
   * addresses on this blacklist are forbidden from depositing or withdrawing
   * from Ethereum to the bridge
   */
  ethereum_blacklist?: string[];
}

export type Multigravityv1MsgBatchSendToEthClaimResponse = object;

export type Multigravityv1MsgCancelSendToEthResponse = object;

export type Multigravityv1MsgConfirmBatchResponse = object;

export type Multigravityv1MsgConfirmLogicCallResponse = object;

export type Multigravityv1MsgERC20DeployedClaimResponse = object;

export type Multigravityv1MsgExecuteIbcAutoForwardsResponse = object;

export type Multigravityv1MsgLogicCallExecutedClaimResponse = object;

export type Multigravityv1MsgRequestBatchResponse = object;

export type Multigravityv1MsgSendToCosmosClaimResponse = object;

export type Multigravityv1MsgSendToEthResponse = object;

export type Multigravityv1MsgSubmitBadSignatureEvidenceResponse = object;

export type Multigravityv1MsgValsetConfirmResponse = object;

export type Multigravityv1MsgValsetUpdatedClaimResponse = object;

export interface Multigravityv1QueryAttestationsResponse {
  attestations?: V1Attestation[];
}

export interface Multigravityv1QueryBatchConfirmsResponse {
  confirms?: Gravityv1MsgConfirmBatch[];
}

export interface Multigravityv1QueryBatchFeeResponse {
  batch_fees?: V1BatchFees[];
}

export interface Multigravityv1QueryBatchRequestByNonceResponse {
  batch?: V1OutgoingTxBatch;
}

export interface Multigravityv1QueryCurrentValsetResponse {
  valset?: V1Valset;
}

export interface Multigravityv1QueryDenomToERC20Response {
  erc20?: string;
  cosmos_originated?: boolean;
}

export interface Multigravityv1QueryERC20ToDenomResponse {
  denom?: string;
  cosmos_originated?: boolean;
}

export interface Multigravityv1QueryLastEventNonceByAddrResponse {
  /** @format uint64 */
  event_nonce?: string;
}

export interface Multigravityv1QueryLastPendingBatchRequestByAddrResponse {
  batch?: V1OutgoingTxBatch[];
}

export interface Multigravityv1QueryLastPendingLogicCallByAddrResponse {
  call?: V1OutgoingLogicCall[];
}

export interface Multigravityv1QueryLastPendingValsetRequestByAddrResponse {
  valsets?: V1Valset[];
}

export interface Multigravityv1QueryLastValsetRequestsResponse {
  valsets?: V1Valset[];
}

export interface Multigravityv1QueryLogicConfirmsResponse {
  confirms?: Gravityv1MsgConfirmLogicCall[];
}

export interface Multigravityv1QueryOutgoingLogicCallsResponse {
  calls?: V1OutgoingLogicCall[];
}

export interface Multigravityv1QueryOutgoingTxBatchesResponse {
  batches?: V1OutgoingTxBatch[];
}

export interface Multigravityv1QueryParamsResponse {
  /**
   * unbond_slashing_valsets_window
   *
   * The unbond slashing valsets window is used to determine how many blocks after starting to unbond
   * a validator needs to continue signing blocks. The goal of this paramater is that when a validator leaves
   * the set, if their leaving creates enough change in the validator set to justify an update they will sign
   * a validator set update for the Ethereum bridge that does not include themselves. Allowing us to remove them
   * from the Ethereum bridge and replace them with the new set gracefully.
   * valset_reward
   * These parameters allow for the bridge oracle to resolve a fork on the Ethereum chain without halting
   * the chain. Once set reset bridge state will roll back events to the nonce provided in reset_bridge_nonce
   * if and only if those events have not yet been observed (executed on the Cosmos chain). This allows for easy
   * handling of cases where for example an Ethereum hardfork has occured and more than 1/3 of the vlaidtor set
   * disagrees with the rest. Normally this would require a chain halt, manual genesis editing and restar to resolve
   * with this feature a governance proposal can be used instead
   * bridge_active
   * This boolean flag can be used by governance to temporarily halt the bridge due to a vulnerability or other issue
   * In this context halting the bridge means prevent the execution of any oracle events from Ethereum and preventing
   * the creation of new batches that may be relayed to Ethereum.
   * This does not prevent the creation of validator sets
   * or slashing for not submitting validator set signatures as either of these might allow key signers to leave the validator
   * set and steal funds on Ethereum without consequence.
   * The practical outcome of this flag being set to 'false' is that deposits from Ethereum will not show up and withdraws from
   * Cosmos will not execute on Ethereum.
   */
  params?: Gravityv1Params;
}

export interface Multigravityv1QueryPendingIbcAutoForwardsResponse {
  pending_ibc_auto_forwards?: V1PendingIbcAutoForward[];
}

export interface Multigravityv1QueryPendingSendToEthResponse {
  transfers_in_batches?: V1OutgoingTransferTx[];
  unbatched_transfers?: V1OutgoingTransferTx[];
}

export interface Multigravityv1QueryValsetConfirmResponse {
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
  confirm?: Gravityv1MsgValsetConfirm;
}

export interface Multigravityv1QueryValsetConfirmsByNonceResponse {
  confirms?: Gravityv1MsgValsetConfirm[];
}

export interface Multigravityv1QueryValsetRequestResponse {
  valset?: V1Valset;
}

/**
* `Any` contains an arbitrary serialized protocol buffer message along with a
URL that describes the type of the serialized message.

Protobuf library provides support to pack/unpack Any values in the form
of utility functions or additional generated methods of the Any type.

Example 1: Pack and unpack a message in C++.

    Foo foo = ...;
    Any any;
    any.PackFrom(foo);
    ...
    if (any.UnpackTo(&foo)) {
      ...
    }

Example 2: Pack and unpack a message in Java.

    Foo foo = ...;
    Any any = Any.pack(foo);
    ...
    if (any.is(Foo.class)) {
      foo = any.unpack(Foo.class);
    }

 Example 3: Pack and unpack a message in Python.

    foo = Foo(...)
    any = Any()
    any.Pack(foo)
    ...
    if any.Is(Foo.DESCRIPTOR):
      any.Unpack(foo)
      ...

 Example 4: Pack and unpack a message in Go

     foo := &pb.Foo{...}
     any, err := anypb.New(foo)
     if err != nil {
       ...
     }
     ...
     foo := &pb.Foo{}
     if err := any.UnmarshalTo(foo); err != nil {
       ...
     }

The pack methods provided by protobuf library will by default use
'type.googleapis.com/full.type.name' as the type URL and the unpack
methods only use the fully qualified type name after the last '/'
in the type URL, for example "foo.bar.com/x/y.z" will yield type
name "y.z".


JSON
====
The JSON representation of an `Any` value uses the regular
representation of the deserialized, embedded message, with an
additional field `@type` which contains the type URL. Example:

    package google.profile;
    message Person {
      string first_name = 1;
      string last_name = 2;
    }

    {
      "@type": "type.googleapis.com/google.profile.Person",
      "firstName": <string>,
      "lastName": <string>
    }

If the embedded message type is well-known and has a custom JSON
representation, that representation will be embedded adding a field
`value` which holds the custom JSON in addition to the `@type`
field. Example (for message [google.protobuf.Duration][]):

    {
      "@type": "type.googleapis.com/google.protobuf.Duration",
      "value": "1.212s"
    }
*/
export interface ProtobufAny {
  /**
   * A URL/resource name that uniquely identifies the type of the serialized
   * protocol buffer message. This string must contain at least
   * one "/" character. The last segment of the URL's path must represent
   * the fully qualified name of the type (as in
   * `path/google.protobuf.Duration`). The name should be in a canonical form
   * (e.g., leading "." is not accepted).
   *
   * In practice, teams usually precompile into the binary all types that they
   * expect it to use in the context of Any. However, for URLs which use the
   * scheme `http`, `https`, or no scheme, one can optionally set up a type
   * server that maps type URLs to message definitions as follows:
   * * If no scheme is provided, `https` is assumed.
   * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
   *   value in binary format, or produce an error.
   * * Applications are allowed to cache lookup results based on the
   *   URL, or have them precompiled into a binary to avoid any
   *   lookup. Therefore, binary compatibility needs to be preserved
   *   on changes to types. (Use versioned type names to manage
   *   breaking changes.)
   * Note: this functionality is not currently available in the official
   * protobuf release, and it is not used for type URLs beginning with
   * type.googleapis.com.
   * Schemes other than `http`, `https` (or the empty scheme) might be
   * used with implementation specific semantics.
   */
  "@type"?: string;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

/**
* The actual content of the claims is passed in with the transaction making the claim
and then passed through the call stack alongside the attestation while it is processed
the key in which the attestation is stored is keyed on the exact details of the claim
but there is no reason to store those exact details becuause the next message sender
will kindly provide you with them.
*/
export interface V1Attestation {
  observed?: boolean;
  votes?: string[];

  /** @format uint64 */
  height?: string;

  /**
   * `Any` contains an arbitrary serialized protocol buffer message along with a
   * URL that describes the type of the serialized message.
   *
   * Protobuf library provides support to pack/unpack Any values in the form
   * of utility functions or additional generated methods of the Any type.
   * Example 1: Pack and unpack a message in C++.
   *     Foo foo = ...;
   *     Any any;
   *     any.PackFrom(foo);
   *     ...
   *     if (any.UnpackTo(&foo)) {
   *       ...
   *     }
   * Example 2: Pack and unpack a message in Java.
   *     Any any = Any.pack(foo);
   *     if (any.is(Foo.class)) {
   *       foo = any.unpack(Foo.class);
   *  Example 3: Pack and unpack a message in Python.
   *     foo = Foo(...)
   *     any = Any()
   *     any.Pack(foo)
   *     if any.Is(Foo.DESCRIPTOR):
   *       any.Unpack(foo)
   *  Example 4: Pack and unpack a message in Go
   *      foo := &pb.Foo{...}
   *      any, err := anypb.New(foo)
   *      if err != nil {
   *        ...
   *      }
   *      ...
   *      foo := &pb.Foo{}
   *      if err := any.UnmarshalTo(foo); err != nil {
   * The pack methods provided by protobuf library will by default use
   * 'type.googleapis.com/full.type.name' as the type URL and the unpack
   * methods only use the fully qualified type name after the last '/'
   * in the type URL, for example "foo.bar.com/x/y.z" will yield type
   * name "y.z".
   * JSON
   * ====
   * The JSON representation of an `Any` value uses the regular
   * representation of the deserialized, embedded message, with an
   * additional field `@type` which contains the type URL. Example:
   *     package google.profile;
   *     message Person {
   *       string first_name = 1;
   *       string last_name = 2;
   *     {
   *       "@type": "type.googleapis.com/google.profile.Person",
   *       "firstName": <string>,
   *       "lastName": <string>
   * If the embedded message type is well-known and has a custom JSON
   * representation, that representation will be embedded adding a field
   * `value` which holds the custom JSON in addition to the `@type`
   * field. Example (for message [google.protobuf.Duration][]):
   *       "@type": "type.googleapis.com/google.protobuf.Duration",
   *       "value": "1.212s"
   */
  claim?: ProtobufAny;
}

export interface V1BatchFees {
  token?: string;
  total_fees?: string;

  /** @format uint64 */
  tx_count?: string;
}

export interface V1BridgeValidator {
  /** @format uint64 */
  power?: string;
  ethereum_address?: string;
}

export interface V1ERC20Token {
  contract?: string;
  amount?: string;
}

export type V1MsgSetOrchestratorAddressResponse = object;

export interface V1OutgoingLogicCall {
  transfers?: V1ERC20Token[];
  fees?: V1ERC20Token[];
  logic_contract_address?: string;

  /** @format byte */
  payload?: string;

  /** @format uint64 */
  timeout?: string;

  /** @format byte */
  invalidation_id?: string;

  /** @format uint64 */
  invalidation_nonce?: string;

  /** @format uint64 */
  block?: string;
}

export interface V1OutgoingTransferTx {
  /** @format uint64 */
  id?: string;
  sender?: string;
  dest_address?: string;
  erc20_token?: V1ERC20Token;
  erc20_fee?: V1ERC20Token;
}

export interface V1OutgoingTxBatch {
  /** @format uint64 */
  batch_nonce?: string;

  /** @format uint64 */
  batch_timeout?: string;
  transactions?: V1OutgoingTransferTx[];
  token_contract?: string;

  /** @format uint64 */
  block?: string;
}

export interface V1PendingIbcAutoForward {
  /** the destination address. sdk.AccAddress does not preserve foreign prefixes */
  foreign_receiver?: string;

  /**
   * the token sent from ethereum to the ibc-enabled chain over `IbcChannel`
   * Coin defines a token with a denomination and an amount.
   *
   * NOTE: The amount field is an Int which implements the custom method
   * signatures required by gogoproto.
   */
  token?: V1Beta1Coin;

  /** the IBC channel to send `Amount` over via ibc-transfer module */
  ibc_channel?: string;

  /**
   * the EventNonce from the MsgSendToCosmosClaim, used for ordering the queue
   * @format uint64
   */
  event_nonce?: string;
}

export interface V1QueryChainsResponse {
  chain_identifiers?: string[];
}

export interface V1QueryDelegateKeysByEthAddressResponse {
  validator_address?: string;
  orchestrator_address?: string;
}

export interface V1QueryDelegateKeysByOrchestratorAddressResponse {
  validator_address?: string;
  eth_address?: string;
}

export interface V1QueryDelegateKeysByValidatorAddressResponse {
  eth_address?: string;
  orchestrator_address?: string;
}

export interface V1Valset {
  /** @format uint64 */
  nonce?: string;
  members?: V1BridgeValidator[];

  /** @format uint64 */
  height?: string;
  reward_amount?: string;

  /** the reward token in it's Ethereum hex address representation */
  reward_token?: string;
}

/**
* Coin defines a token with a denomination and an amount.

NOTE: The amount field is an Int which implements the custom method
signatures required by gogoproto.
*/
export interface V1Beta1Coin {
  denom?: string;
  amount?: string;
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title multigravity/v1/genesis.proto
 * @version version not set
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Query
   * @name QueryLastEventNonceByAddr
   * @request GET:/gravity/v1beta/oracle/eventnonce/{address}
   */
  queryLastEventNonceByAddr = (address: string, query?: { chain_identifier?: string }, params: RequestParams = {}) =>
    this.request<Multigravityv1QueryLastEventNonceByAddrResponse, RpcStatus>({
      path: `/gravity/v1beta/oracle/eventnonce/${address}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgBatchSendToEthClaim
   * @request POST:/multigravity/v1/batch_send_to_eth_claim
   */
  msgBatchSendToEthClaim = (
    query?: {
      event_nonce?: string;
      block_height?: string;
      batch_nonce?: string;
      token_contract?: string;
      orchestrator?: string;
      chain_identifier?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Multigravityv1MsgBatchSendToEthClaimResponse, RpcStatus>({
      path: `/multigravity/v1/batch_send_to_eth_claim`,
      method: "POST",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgCancelSendToEth
   * @request POST:/multigravity/v1/cancel_send_to_eth
   */
  msgCancelSendToEth = (
    query?: { transaction_id?: string; sender?: string; chain_identifier?: string },
    params: RequestParams = {},
  ) =>
    this.request<Multigravityv1MsgCancelSendToEthResponse, RpcStatus>({
      path: `/multigravity/v1/cancel_send_to_eth`,
      method: "POST",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgConfirmLogicCall
   * @request POST:/multigravity/v1/confim_logic
   */
  msgConfirmLogicCall = (
    query?: {
      invalidation_id?: string;
      invalidation_nonce?: string;
      eth_signer?: string;
      orchestrator?: string;
      signature?: string;
      chain_identifier?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Multigravityv1MsgConfirmLogicCallResponse, RpcStatus>({
      path: `/multigravity/v1/confim_logic`,
      method: "POST",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgConfirmBatch
   * @request POST:/multigravity/v1/confirm_batch
   */
  msgConfirmBatch = (
    query?: {
      nonce?: string;
      token_contract?: string;
      eth_signer?: string;
      orchestrator?: string;
      signature?: string;
      chain_identifier?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Multigravityv1MsgConfirmBatchResponse, RpcStatus>({
      path: `/multigravity/v1/confirm_batch`,
      method: "POST",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgErc20DeployedClaim
   * @request POST:/multigravity/v1/erc20_deployed_claim
   */
  msgErc20DeployedClaim = (
    query?: {
      event_nonce?: string;
      block_height?: string;
      cosmos_denom?: string;
      token_contract?: string;
      name?: string;
      symbol?: string;
      decimals?: string;
      orchestrator?: string;
      chain_identifier?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Multigravityv1MsgERC20DeployedClaimResponse, RpcStatus>({
      path: `/multigravity/v1/erc20_deployed_claim`,
      method: "POST",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgExecuteIbcAutoForwards
   * @request POST:/multigravity/v1/execute_ibc_auto_forwards
   */
  msgExecuteIbcAutoForwards = (
    query?: { forwards_to_clear?: string; executor?: string; chain_identifier?: string },
    params: RequestParams = {},
  ) =>
    this.request<Multigravityv1MsgExecuteIbcAutoForwardsResponse, RpcStatus>({
      path: `/multigravity/v1/execute_ibc_auto_forwards`,
      method: "POST",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgLogicCallExecutedClaim
   * @request POST:/multigravity/v1/logic_call_executed_claim
   */
  msgLogicCallExecutedClaim = (
    query?: {
      event_nonce?: string;
      block_height?: string;
      invalidation_id?: string;
      invalidation_nonce?: string;
      orchestrator?: string;
      chain_identifier?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Multigravityv1MsgLogicCallExecutedClaimResponse, RpcStatus>({
      path: `/multigravity/v1/logic_call_executed_claim`,
      method: "POST",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgRequestBatch
   * @request POST:/multigravity/v1/request_batch
   */
  msgRequestBatch = (
    query?: { sender?: string; denom?: string; chain_identifier?: string },
    params: RequestParams = {},
  ) =>
    this.request<Multigravityv1MsgRequestBatchResponse, RpcStatus>({
      path: `/multigravity/v1/request_batch`,
      method: "POST",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgSendToCosmosClaim
   * @request POST:/multigravity/v1/send_to_cosmos_claim
   */
  msgSendToCosmosClaim = (
    query?: {
      event_nonce?: string;
      block_height?: string;
      token_contract?: string;
      amount?: string;
      ethereum_sender?: string;
      cosmos_receiver?: string;
      orchestrator?: string;
      chain_identifier?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Multigravityv1MsgSendToCosmosClaimResponse, RpcStatus>({
      path: `/multigravity/v1/send_to_cosmos_claim`,
      method: "POST",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgSendToEth
   * @request POST:/multigravity/v1/send_to_eth
   */
  msgSendToEth = (
    query?: {
      sender?: string;
      eth_dest?: string;
      "amount.denom"?: string;
      "amount.amount"?: string;
      "bridge_fee.denom"?: string;
      "bridge_fee.amount"?: string;
      chain_identifier?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Multigravityv1MsgSendToEthResponse, RpcStatus>({
      path: `/multigravity/v1/send_to_eth`,
      method: "POST",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgSetOrchestratorAddress
   * @request POST:/multigravity/v1/set_orchestrator_address
   */
  msgSetOrchestratorAddress = (
    query?: { validator?: string; orchestrator?: string; eth_address?: string },
    params: RequestParams = {},
  ) =>
    this.request<V1MsgSetOrchestratorAddressResponse, RpcStatus>({
      path: `/multigravity/v1/set_orchestrator_address`,
      method: "POST",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgSubmitBadSignatureEvidence
   * @request POST:/multigravity/v1/submit_bad_signature_evidence
   */
  msgSubmitBadSignatureEvidence = (
    query?: {
      "subject.type_url"?: string;
      "subject.value"?: string;
      signature?: string;
      sender?: string;
      chain_identifier?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Multigravityv1MsgSubmitBadSignatureEvidenceResponse, RpcStatus>({
      path: `/multigravity/v1/submit_bad_signature_evidence`,
      method: "POST",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgValsetConfirm
   * @request POST:/multigravity/v1/valset_confirm
   */
  msgValsetConfirm = (
    query?: {
      nonce?: string;
      orchestrator?: string;
      eth_address?: string;
      signature?: string;
      chain_identifier?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Multigravityv1MsgValsetConfirmResponse, RpcStatus>({
      path: `/multigravity/v1/valset_confirm`,
      method: "POST",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Msg
   * @name MsgValsetUpdateClaim
   * @request POST:/multigravity/v1/valset_updated_claim
   */
  msgValsetUpdateClaim = (
    query?: {
      event_nonce?: string;
      valset_nonce?: string;
      block_height?: string;
      reward_amount?: string;
      reward_token?: string;
      orchestrator?: string;
      chain_identifier?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Multigravityv1MsgValsetUpdatedClaimResponse, RpcStatus>({
      path: `/multigravity/v1/valset_updated_claim`,
      method: "POST",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBatchConfirms
   * @request GET:/multigravity/v1beta/batch/confirms
   */
  queryBatchConfirms = (
    query?: { nonce?: string; contract_address?: string; chain_identifier?: string },
    params: RequestParams = {},
  ) =>
    this.request<Multigravityv1QueryBatchConfirmsResponse, RpcStatus>({
      path: `/multigravity/v1beta/batch/confirms`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLastPendingBatchRequestByAddr
   * @request GET:/multigravity/v1beta/batch/last_pending_request_by_addr
   */
  queryLastPendingBatchRequestByAddr = (
    query?: { address?: string; chain_identifier?: string },
    params: RequestParams = {},
  ) =>
    this.request<Multigravityv1QueryLastPendingBatchRequestByAddrResponse, RpcStatus>({
      path: `/multigravity/v1beta/batch/last_pending_request_by_addr`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOutgoingLogicCalls
   * @request GET:/multigravity/v1beta/batch/outgoinglogic
   */
  queryOutgoingLogicCalls = (query?: { chain_identifier?: string }, params: RequestParams = {}) =>
    this.request<Multigravityv1QueryOutgoingLogicCallsResponse, RpcStatus>({
      path: `/multigravity/v1beta/batch/outgoinglogic`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryOutgoingTxBatches
   * @request GET:/multigravity/v1beta/batch/outgoingtx
   */
  queryOutgoingTxBatches = (query?: { chain_identifier?: string }, params: RequestParams = {}) =>
    this.request<Multigravityv1QueryOutgoingTxBatchesResponse, RpcStatus>({
      path: `/multigravity/v1beta/batch/outgoingtx`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBatchRequestByNonce
   * @request GET:/multigravity/v1beta/batch/request_by_nonce
   */
  queryBatchRequestByNonce = (
    query?: { nonce?: string; contract_address?: string; chain_identifier?: string },
    params: RequestParams = {},
  ) =>
    this.request<Multigravityv1QueryBatchRequestByNonceResponse, RpcStatus>({
      path: `/multigravity/v1beta/batch/request_by_nonce`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryBatchFees
   * @request GET:/multigravity/v1beta/batchfees
   */
  queryBatchFees = (query?: { chain_identifier?: string }, params: RequestParams = {}) =>
    this.request<Multigravityv1QueryBatchFeeResponse, RpcStatus>({
      path: `/multigravity/v1beta/batchfees`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryValsetConfirmsByNonce
   * @request GET:/multigravity/v1beta/confirms/{nonce}
   */
  queryValsetConfirmsByNonce = (nonce: string, query?: { chain_identifier?: string }, params: RequestParams = {}) =>
    this.request<Multigravityv1QueryValsetConfirmsByNonceResponse, RpcStatus>({
      path: `/multigravity/v1beta/confirms/${nonce}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryDenomToErc20
   * @request GET:/multigravity/v1beta/cosmos_originated/denom_to_erc20
   */
  queryDenomToErc20 = (query?: { denom?: string; chain_identifier?: string }, params: RequestParams = {}) =>
    this.request<Multigravityv1QueryDenomToERC20Response, RpcStatus>({
      path: `/multigravity/v1beta/cosmos_originated/denom_to_erc20`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryErc20ToDenom
   * @request GET:/multigravity/v1beta/cosmos_originated/erc20_to_denom
   */
  queryErc20ToDenom = (query?: { erc20?: string; chain_identifier?: string }, params: RequestParams = {}) =>
    this.request<Multigravityv1QueryERC20ToDenomResponse, RpcStatus>({
      path: `/multigravity/v1beta/cosmos_originated/erc20_to_denom`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLogicConfirms
   * @request GET:/multigravity/v1beta/logic/confirms
   */
  queryLogicConfirms = (
    query?: { invalidation_id?: string; invalidation_nonce?: string; chain_identifier?: string },
    params: RequestParams = {},
  ) =>
    this.request<Multigravityv1QueryLogicConfirmsResponse, RpcStatus>({
      path: `/multigravity/v1beta/logic/confirms`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLastPendingLogicCallByAddr
   * @request GET:/multigravity/v1beta/logic/{address}
   */
  queryLastPendingLogicCallByAddr = (
    address: string,
    query?: { chain_identifier?: string },
    params: RequestParams = {},
  ) =>
    this.request<Multigravityv1QueryLastPendingLogicCallByAddrResponse, RpcStatus>({
      path: `/multigravity/v1beta/logic/${address}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryParams
   * @request GET:/multigravity/v1beta/params
   */
  queryParams = (query?: { chain_identifier?: string }, params: RequestParams = {}) =>
    this.request<Multigravityv1QueryParamsResponse, RpcStatus>({
      path: `/multigravity/v1beta/params`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetAttestations
   * @request GET:/multigravity/v1beta/query_attestations
   */
  queryGetAttestations = (
    query?: {
      limit?: string;
      order_by?: string;
      claim_type?: string;
      nonce?: string;
      height?: string;
      chain_identifier?: string;
    },
    params: RequestParams = {},
  ) =>
    this.request<Multigravityv1QueryAttestationsResponse, RpcStatus>({
      path: `/multigravity/v1beta/query_attestations`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetDelegateKeyByEth
   * @request GET:/multigravity/v1beta/query_delegate_keys_by_eth
   */
  queryGetDelegateKeyByEth = (query?: { eth_address?: string }, params: RequestParams = {}) =>
    this.request<V1QueryDelegateKeysByEthAddressResponse, RpcStatus>({
      path: `/multigravity/v1beta/query_delegate_keys_by_eth`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetDelegateKeyByOrchestrator
   * @request GET:/multigravity/v1beta/query_delegate_keys_by_orchestrator
   */
  queryGetDelegateKeyByOrchestrator = (query?: { orchestrator_address?: string }, params: RequestParams = {}) =>
    this.request<V1QueryDelegateKeysByOrchestratorAddressResponse, RpcStatus>({
      path: `/multigravity/v1beta/query_delegate_keys_by_orchestrator`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetDelegateKeyByValidator
   * @request GET:/multigravity/v1beta/query_delegate_keys_by_validator
   */
  queryGetDelegateKeyByValidator = (query?: { validator_address?: string }, params: RequestParams = {}) =>
    this.request<V1QueryDelegateKeysByValidatorAddressResponse, RpcStatus>({
      path: `/multigravity/v1beta/query_delegate_keys_by_validator`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetPendingIbcAutoForwards
   * @request GET:/multigravity/v1beta/query_pending_ibc_auto_forwards
   */
  queryGetPendingIbcAutoForwards = (
    query?: { limit?: string; chain_identifier?: string },
    params: RequestParams = {},
  ) =>
    this.request<Multigravityv1QueryPendingIbcAutoForwardsResponse, RpcStatus>({
      path: `/multigravity/v1beta/query_pending_ibc_auto_forwards`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryGetPendingSendToEth
   * @request GET:/multigravity/v1beta/query_pending_send_to_eth
   */
  queryGetPendingSendToEth = (
    query?: { sender_address?: string; chain_identifier?: string },
    params: RequestParams = {},
  ) =>
    this.request<Multigravityv1QueryPendingSendToEthResponse, RpcStatus>({
      path: `/multigravity/v1beta/query_pending_send_to_eth`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryValsetRequest
   * @request GET:/multigravity/v1beta/valset
   */
  queryValsetRequest = (query?: { nonce?: string; chain_identifier?: string }, params: RequestParams = {}) =>
    this.request<Multigravityv1QueryValsetRequestResponse, RpcStatus>({
      path: `/multigravity/v1beta/valset`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryValsetConfirm
   * @request GET:/multigravity/v1beta/valset/confirm
   */
  queryValsetConfirm = (
    query?: { nonce?: string; address?: string; chain_identifier?: string },
    params: RequestParams = {},
  ) =>
    this.request<Multigravityv1QueryValsetConfirmResponse, RpcStatus>({
      path: `/multigravity/v1beta/valset/confirm`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryCurrentValset
   * @request GET:/multigravity/v1beta/valset/current
   */
  queryCurrentValset = (query?: { chain_identifier?: string }, params: RequestParams = {}) =>
    this.request<Multigravityv1QueryCurrentValsetResponse, RpcStatus>({
      path: `/multigravity/v1beta/valset/current`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLastPendingValsetRequestByAddr
   * @request GET:/multigravity/v1beta/valset/last
   */
  queryLastPendingValsetRequestByAddr = (
    query?: { address?: string; chain_identifier?: string },
    params: RequestParams = {},
  ) =>
    this.request<Multigravityv1QueryLastPendingValsetRequestByAddrResponse, RpcStatus>({
      path: `/multigravity/v1beta/valset/last`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });

  /**
   * No description
   *
   * @tags Query
   * @name QueryLastValsetRequests
   * @request GET:/multigravity/v1beta/valset/requests
   */
  queryLastValsetRequests = (query?: { chain_identifier?: string }, params: RequestParams = {}) =>
    this.request<Multigravityv1QueryLastValsetRequestsResponse, RpcStatus>({
      path: `/multigravity/v1beta/valset/requests`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
}
