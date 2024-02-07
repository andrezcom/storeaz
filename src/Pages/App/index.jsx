import { BrowserRouter } from "react-router-dom";

import AppRoutes from "../../Components/Routes/Routes";
import Nav from "../../Components/Nav";

import "./Index.css";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
