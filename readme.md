1. updated productsSlice to set products, loading and error state
2. fetched products data in header component and dispatched actions from their
3. we have modified cartItems state to [{productId , quantity}] from previous one.
4. We have done this because it's not good to store same details again and again
5. also for cart api from fakestoreapi, it give {productId,quantity} only. To support this feature as well
6. We will by default fetch some cartItems from api and show them in cart as well
7. Made changes in cartItemsSlice
8. we have seen how to use createSelector() method from RTK to memorize selector result to avoid unnecessary rerenders.
9. Added selectors in different files and also we have seen createSelector() method and it's use case.


- We are fetching the data inside header component. As it is common in home page and cart page
  we are loading both inside products and cart items inside Header component.