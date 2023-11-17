import axios from "axios";

export const addProduct =
  (name,
  companyName,
  price,
  cuisine,
  brand,
  minQuantity,
  totalStock,
  isBurgainPossible,
  color,
  description,
  tags,)=> async(dispatch)=>{
    try {
        dispatch({
          type: "productCreateRequest",
        });
  
        const { data } = await axios.post(
          `http://localhost:5174/prod_buy/post`,
          name,
          companyName,
          price,
          cuisine,
          brand,
          minQuantity,
          totalStock,
          isBurgainPossible,
          color,
          description,
          tags,
        );
        dispatch({
          type: "productCreateSuccess",
          payload: data.product,
        });
      } catch (error) {
        dispatch({
          type: "productCreateFail",
          payload: error.response.data.message,
        });
      }
  }
