import ReactDOM from "react-dom/client";
import App from "./App";
import { TodoProvider } from "./store/context";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
  <TodoProvider>
    <App />
  </TodoProvider>
  // </React.StrictMode>
);
