import { createRoot } from "react-dom/client";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

// render(
//     <Router>
//         <App/>
//     </Router>,
//     document.getElementById("root")
// );
const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <Router>
    <App />
  </Router>
);
