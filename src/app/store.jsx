//!redux-toolkit içinden configureStore metodu named import edilir.
import { configureStore } from "@reduxjs/toolkit";
//!yazdığımız slice'lar default import şeklinde import edilir:
import authReducer from "../features/authSlice";
import newsReducer from "../features/newsSlice";

//!İki reducer burada birleştirilerek bir store oluşturulur
export const store = configureStore({
  reducer: {
    auth: authReducer,
    api: newsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  //! eger geliştirme aşaması production ise o zaman
  //yukarıdaki ifade false döndürür ve dolayısıyla
  //devTool kullanıma kapalı olur.
  //daimi olarak kapalı yapmak için-> devTools:false,
});
