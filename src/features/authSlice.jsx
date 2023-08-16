//!createSlice metodu named import yapılır
import { createSlice } from "@reduxjs/toolkit";

//!Slice oluştururken kullanacağımız initialState tanımlanır
//içinde sadece user isimli bir state nesnesi tutulacak. Bu nesneye
//state.user şeklinde erişilebilir.
const initialState = {
  user: "",
};

//!adı "auth" olan, başlangıç değeri initialState olan bir slice yazılır
//slice içinde reducers: keyinde, {} içinde reducer nesnesi tanımlanır
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //!action creator fonksiyonları, bir veya iki parametre alır:
    //1-state, 2-action
    //!setUser fonksiyonu, gelen state parametresi içindeki user nesnesine
    //action içinde gelen payload değerini atar.
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = "";
    },
  },
});
