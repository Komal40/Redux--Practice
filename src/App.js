import Products from "./Products";
import "./styles.css";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Products />
      </div>
    </Provider>
  );
}
