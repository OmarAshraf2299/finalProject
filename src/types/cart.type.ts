import { ProductType } from "./product .type"

export interface CartResType{
    cartId: string,
    message : string,
    status : string,
    numOfItems : number

    data: {
        totalCartPrice : number,
        products : CartitemType[]
    }
}

export  interface CartitemType {

    count : number,
    price : number,
    product : ProductType
}