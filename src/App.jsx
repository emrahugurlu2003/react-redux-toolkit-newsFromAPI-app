import AppRouter from "./router/AppRouter";
//!store için provider nesnesi named import yapılır
import { Provider } from "react-redux";
//!Oluşturulmuş olan store nesnesi named import yapılır
import { store } from "./app/store";

function App() {
  return (
    //!store prop'u olan bir Provider nesnesi ile uygulama sarmalanır
    //Böylece store içindeki global veriler tüm komponentlere sunulur
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
