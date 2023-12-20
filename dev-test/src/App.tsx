import { Route, Routes } from "react-router-dom";
import "./App.css";
import { UploadProduct } from "./UploadProduct";
import { ProductList } from "./ProductList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />}></Route>
      <Route path="/uploadproduct" element={<UploadProduct />}></Route>
    </Routes>
  );
}

export default App;
