import { ConfigureStore} from "@reduxjs/toolkit";
import { productReducer } from "./reducers/Product";



const store = ConfigureStore({
    reducer: {
       
       
        products: productReducer,
     
      },
    
});

export default store;