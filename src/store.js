import { configureStore } from '@reduxjs/toolkit'; /* used to create the Redux store. */
import cartReducer from './Components/CartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer, // cartReducer is associated with the cart slice of state. This means that the state managed by the cartReducer will be stored under the cart key in the Redux store.
  }, /* Additional store configuration options can be included in the object passed to configureStore.
  For example, you can include middleware, enhancers, or other options such as devtools configuration. */
});

export default store;