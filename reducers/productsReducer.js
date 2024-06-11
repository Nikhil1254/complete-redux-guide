import { products } from "../data/products";


export default function productsReducer(state=products){
    console.log('products reducer');
    return state;
}