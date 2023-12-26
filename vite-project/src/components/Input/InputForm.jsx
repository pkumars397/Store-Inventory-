import { useEffect, useState } from "react";
import DisplayContent from "../UI/DisplayContent";

export default function InputForm(props) {
  const [prodId, setProdId] = useState("");
  const [prodPrice, setProdPrice] = useState();
  const [prodName, setProdName] = useState("");
  const [prodCategory, setProdCategory] = useState("");

  const prodIdHandler = (event) => {
    setProdId(() => {
      return event.target.value;
    });
  };

  const prodPriceHandler = (event) => {
    setProdPrice(() => {
      return event.target.value;
    });
  };

  const prodNameHandler = (event) => {
    setProdName(event.target.value);
  };
  const prodCategoryHandler = (event) => {
    setProdCategory(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const details = {
      id: prodId,
      price: prodPrice,
      name: prodName,
      category: prodCategory,
    };
    const stringfyObj = JSON.stringify(details);
    localStorage.setItem(prodId, stringfyObj);

    props.onAddProducts(prodId, prodName, prodPrice, prodCategory);
    setProdId("");
    setProdPrice("");
    setProdName("");
    setProdCategory("");
  };

  // console.log(prodId, prodPrice, prodName, prodCategory);
  return (
    <>
      <form onSubmit={formSubmitHandler}>
        {" "}
        <label>Product Id:</label>
        <input type="text" value={prodId} onChange={prodIdHandler} />
        <label>Selling Price:</label>
        <input type="number" value={prodPrice} onChange={prodPriceHandler} />
        <label>Producet Name:</label>
        <input type="text" value={prodName} onChange={prodNameHandler} />
        <label>Choose a Category:</label>
        <select onChange={prodCategoryHandler}>
          <option value="Electronics">Electronics Items</option>
          <option value="Food">Food Items</option>
          <option value="SkinCare">Skin Care Items</option>
        </select>
        <input type="submit" value="Add Product" />
      </form>
    </>
  );
}
