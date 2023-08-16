//!createSlice metodu named import yapılır
import { createSlice } from "@reduxjs/toolkit";

//!Slice oluştururken kullanacağımız initialState tanımlanır
//içinde news, loading ve error isimli 3 state nesnesi tutulacak.
//Bu nesnelere state.news, state.loading, state.error şeklinde
//erişilebilir. news nesnesi bir array, boş array için [] kullanılır
const initialState = {
  news: [],
  loading: false,
  error: false,
};

//!adı "news" olan, başlangıç değeri initialState olan bir slice yazılır
//slice içinde reducers: keyinde, {} içinde reducer nesnesi tanımlanır
const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    //!action creator fonksiyonları, bir veya iki parametre alır:
    //1-state, 2-action
    //!clearNews fonksiyonu, gelen state parametresi içindeki news nesnesine
    //[] ile boş array değerini atar.
    clearNews: (state) => {
      state.news = [];
    },
  },
});

//!Slicer içinden iki şey export edilir:
//1-newsSlice.actions (named export olarak) ve
//2-newsSlice.reducer (default export olarak)
//? olusan action fonksiyonları newsSlice.actions'dan destructure edilerek export edilir.
export const { clearNews } = newsSlice.actions;

//? yazılan slice'ın reducer'ı newsSlice.reducer seklinde export edilmelidir.
export default newsSlice.reducer;
