import { products } from "../data/products";

// reducer
export default function productsReducer(state=products){
    console.log('products reducer');
    return state;
}