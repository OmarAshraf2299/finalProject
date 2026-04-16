import { ProductType } from "@/types/product .type";
import { log } from "console";
import { cache } from "react";

export async function getAllProducts() : Promise<ProductType[] | undefined> {
    
    try {
         const res = await  fetch("https://ecommerce.routemisr.com/api/v1/products" , {
            cache : "force-cache",
            next : {revalidate : 60}
        })
     const finalRes = await res.json()
    //   console.log(finalRes.data);
      return finalRes.data
    } catch (error) {
        console.log(error);
    }
  }

  export async function getProductById(id:string) : Promise<ProductType | null> {
    
    try {
         const res = await  fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}` , {
            cache : "force-cache",
            next : {revalidate : 60}
        })
     const finalRes = await res.json()
      console.log(finalRes);
      return finalRes.data
    } catch (error) {
        console.log(error);
        return null
    }}