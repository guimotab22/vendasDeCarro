import { IAddress } from "./IAddress"
import { IRevenueStore } from "./IRevenueStore"
import { IStockStore } from "./IStockStore"

export interface IStore {
  id: string
  idCompany: string
  name: string
  address: IAddress
  stock: IStockStore
  revenue: IRevenueStore
}