import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgRequestBatch } from "./types/multigravity/v1/msgs";
import { MsgValsetConfirm } from "./types/multigravity/v1/msgs";
import { MsgLogicCallExecutedClaim } from "./types/multigravity/v1/msgs";
import { MsgBatchSendToEthClaim } from "./types/multigravity/v1/msgs";
import { MsgConfirmBatch } from "./types/multigravity/v1/msgs";
import { MsgSendToEth } from "./types/multigravity/v1/msgs";
import { MsgConfirmLogicCall } from "./types/multigravity/v1/msgs";
import { MsgERC20DeployedClaim } from "./types/multigravity/v1/msgs";
import { MsgCancelSendToEth } from "./types/multigravity/v1/msgs";
import { MsgValsetUpdatedClaim } from "./types/multigravity/v1/msgs";
import { MsgSubmitBadSignatureEvidence } from "./types/multigravity/v1/msgs";
import { MsgSendToCosmosClaim } from "./types/multigravity/v1/msgs";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/multigravity.v1.MsgRequestBatch", MsgRequestBatch],
    ["/multigravity.v1.MsgValsetConfirm", MsgValsetConfirm],
    ["/multigravity.v1.MsgLogicCallExecutedClaim", MsgLogicCallExecutedClaim],
    ["/multigravity.v1.MsgBatchSendToEthClaim", MsgBatchSendToEthClaim],
    ["/multigravity.v1.MsgConfirmBatch", MsgConfirmBatch],
    ["/multigravity.v1.MsgSendToEth", MsgSendToEth],
    ["/multigravity.v1.MsgConfirmLogicCall", MsgConfirmLogicCall],
    ["/multigravity.v1.MsgERC20DeployedClaim", MsgERC20DeployedClaim],
    ["/multigravity.v1.MsgCancelSendToEth", MsgCancelSendToEth],
    ["/multigravity.v1.MsgValsetUpdatedClaim", MsgValsetUpdatedClaim],
    ["/multigravity.v1.MsgSubmitBadSignatureEvidence", MsgSubmitBadSignatureEvidence],
    ["/multigravity.v1.MsgSendToCosmosClaim", MsgSendToCosmosClaim],
    
];

export { msgTypes }