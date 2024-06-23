1. We are going to fetch the products and cartItems data inside custom middlewares.
2. we will see how to create custom middlewares and use them with configureStore().
3. we are dispatching two different actions for fetching products and cart items.
4. The actions which reach to reducer only be shown in redux devtools
5. Also if we pass functions in payload it will not be shown in devtools, that's why we are just passing types
6. In devtools only serialized data/ JSON data will be shown.