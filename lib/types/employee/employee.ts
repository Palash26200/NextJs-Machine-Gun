import { Asset } from "../asset/asset"

export type Employee = {
    name: string,
    email: string,
    phone: string,
    assets: Asset[]
}