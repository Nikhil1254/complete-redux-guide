1. updated productsSlice to set products, loading and error state
2. fetched products data in header component and dispatched actions from their
3. we have modified cartItems state to [{productId , quantity}] from previous one.
4. We have done this because it's not good to store same details again and again
5. also for cart api from fakestoreapi, it give {productId,quantity} only. To support this feature as well
6. We will by default fetch some cartItems from api and show them in cart as well
