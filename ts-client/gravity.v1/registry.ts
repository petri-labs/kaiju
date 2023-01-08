import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgConfirmBatch } from "./types/gravity/v1/msgs";
import { MsgLogicCallExecutedClaim } from "./types/gravity/v1/msgs";
import { MsgCancelSendToEth } from "./types/gravity/v1/msgs";
import { MsgSubmitBadSignatureEvidence } from "./types/gravity/v1/msgs";
import { MsgSendToEth } from "./types/gravity/v1/msgs";
import { MsgERC20DeployedClaim } from "./types/gravity/v1/msgs";
import { MsgRequestBatch } from "./types/gravity/v1/msgs";
import { MsgValsetUpdatedClaim } from "./types/gravity/v1/msgs";
import { MsgSetOrchestratorAddress } from "./types/gravity/v1/msgs";
import { MsgBatchSendToEthClaim } from "./types/gravity/v1/msgs";
import { MsgConfirmLogicCall } from "./types/gravity/v1/msgs";
import { MsgValsetConfirm } from "./types/gravity/v1/msgs";
import { MsgSendToCosmosClaim } from "./types/gravity/v1/msgs";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/gravity.v1.MsgConfirmBatch", MsgConfirmBatch],
    ["/gravity.v1.MsgLogicCallExecutedClaim", MsgLogicCallExecutedClaim],
    ["/gravity.v1.MsgCancelSendToEth", MsgCancelSendToEth],
    ["/gravity.v1.MsgSubmitBadSignatureEvidence", MsgSubmitBadSignatureEvidence],
    ["/gravity.v1.MsgSendToEth", MsgSendToEth],
    ["/gravity.v1.MsgERC20DeployedClaim", MsgERC20DeployedClaim],
    ["/gravity.v1.MsgRequestBatch", MsgRequestBatch],
    ["/gravity.v1.MsgValsetUpdatedClaim", MsgValsetUpdatedClaim],
    ["/gravity.v1.MsgSetOrchestratorAddress", MsgSetOrchestratorAddress],
    ["/gravity.v1.MsgBatchSendToEthClaim", MsgBatchSendToEthClaim],
    ["/gravity.v1.MsgConfirmLogicCall", MsgConfirmLogicCall],
    ["/gravity.v1.MsgValsetConfirm", MsgValsetConfirm],
    ["/gravity.v1.MsgSendToCosmosClaim", MsgSendToCosmosClaim],
    
];

export { msgTypes }