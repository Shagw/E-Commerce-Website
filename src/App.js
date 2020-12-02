import "./App.css";
import ProductList from "./components/ProductList";
import { BrowserRouter, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { listProducts } from "./actions/productlistaction";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <BrowserRouter>
      <div>
        <Route path="/" component={ProductList} />
      </div>
    </BrowserRouter>
  );
}

export default App;
