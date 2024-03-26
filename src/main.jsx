import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import "swiper/css";
import "swiper/css/navigation";
import App from "./App.jsx";
import "./animate.min.css";
import "./index.css";
import "./normalize.css";
import "./responsive.css";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Toaster position="top-right" richColors />
    <App />
  </Provider>
);
