import ReactDOM from "react-dom/client";
import App from "@/App";
import { Provider } from "react-redux";
import store from "@/store";
import "./index.css";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
    <Toaster />
  </Provider>
);
