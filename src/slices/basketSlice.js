import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      // product tan dispatch ile gönderdiğimiz itemler action payload a eşit
      state.items = [...state.items, action.payload]
    },
    removeFromBasket: (state, action) => {
      const index =  state.items.findIndex(basketItem => basketItem.id === action.payload.id);
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(`Silemezsin`);
      }
      state.items = newBasket
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Aşağıdaki gibi yapmmamızın sebebi useSelector ile başka yerlerden direk itemları çekebiliyoruz
// mesela basketteki ürünleri direk useSelector ile selecitems dan çektik
export const selectItems = (state) => state.basket.items;

{/* total bakiyeyi almak için kullanıyoruz. mantığını anlamadım */}
export const selectTotal = (state) =>
    state.basket.items.reduce((total,item)=>total + item.price, 0);

export default basketSlice.reducer;
