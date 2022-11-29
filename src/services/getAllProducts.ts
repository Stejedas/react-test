
import { Product } from "../utils/interfaces"

export const getAllProducts = async (): Promise<Array<Product>> => {
    const respose = await fetch('https://fakestoreapi.com/products').then(resp => resp.json())
    return respose
}