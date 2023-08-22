//!createSlice metodu named import yapılır

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//!Slice oluştururken kullanacağımız initialState tanımlanır
//içinde news, loading ve error isimli 3 state nesnesi tutulacak.
//Bu nesnelere state.news, state.loading, state.error şeklinde
//erişilebilir. news nesnesi bir array, boş array için [] kullanılır
const initialState = {
  news: [],
  loading: false,
  error: false,
};
export const getNews = createAsyncThunk(
  "getNewsFunction", //Action type name olarak string tipinde bir prefixtir
  async () => {
    //https://newsapi.org sitesine register/login olunca, API KEY alınır.
    const API_KEY = import.meta.env.VITE_APP_API_KEY;
    const COUNTRY = "us";
    //!READMe.md dosyasında belirtildiği şekilde API isteği atılır
    const url = `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&apiKey=${API_KEY}`;
    //!Gelen veri içinden destructuring ile data çekilir:
    const { data } = await axios(url);
    console.log("getNewsData:", data);
    return data.articles;
  }
);

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
  //! createAyncThunk metedo bir middleware olarak API gibi dış kaynaklı
  //isteklerin redux ortaminda oluşturulmasını sağlar. Ancak API'deki
  //durumlara gore state'lerin güncellenmesini sağlamaz. Bunun için
  //slice icersindeki extraReducer kısmı kullanilir.

  //? API isteklerinde 3 farkli alt durum meydana gelir. Bunlar baslama (pending), basarili bitme (fullfilled) ve basariz bitme (rejected) dir.

  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.news = action.payload;
        state.loading = false;
      })
      .addCase(getNews.rejected, (state) => {
        state.error = true;
        state.loading = false;
      });
  },
});

//!Slicer içinden iki şey export edilir:
//1-newsSlice.actions (named export olarak) ve
//2-newsSlice.reducer (default export olarak)
//? olusan action fonksiyonları newsSlice.actions'dan destructure edilerek export edilir.
export const { clearNews } = newsSlice.actions;

//? yazılan slice'ın reducer'ı newsSlice.reducer seklinde export edilmelidir.
export default newsSlice.reducer;
