import { AssetStatus } from "./assetStatus"
import { AssetType } from "./assetType"

export type Asset = {
    assetId: number,
    assetName: string,
    assetType: AssetType[],
    description: string,
    details: {},
    status: AssetStatus
}