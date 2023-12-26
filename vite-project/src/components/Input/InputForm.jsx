import { useEffect, useState } from "react";
import DisplayContent from "../UI/DisplayContent";

export default function InputForm() {
  const [prodId, setProdId] = useState("");
  const [prodPrice, setProdPrice] = useState();
  const [prodName, setProdName] = useState("");
  const [prodCategory, setProdCategory] = useState("");

  const [SkinCareArr, setSkinCareArr] = useState([]);
  const [FoodArr, setFoodArr] = useState([]);
  const [ElectronicsArr, setElectronicsArr] = useState([]);

  useEffect(() => {
    if (Object.keys(localStorage).length) {
      const values = Object.values(localStorage);
      for (let val of values) {
        val = JSON.parse(val);
        if (val.category == "SkinCare") {
          setSkinCareArr((prevState) => {
            return [
              ...prevState,
              {
                id: val.id,
                price: val.price,
                name: val.name,
                category: val.category,
              },
            ];
          });
        } else if (val.category == "Food") {
          FoodArr((prevState) => {
            return [
              ...prevState,
              {
                id: val.id,
                price: val.price,
                name: val.name,
                category: val.category,
              },
            ];
          });
        } else if (val.category == "Electronics") {
          setElectronicsArr((prevState) => {
            return [
              ...prevState,
              {
                id: val.id,
                price: val.price,
                name: val.name,
                category: val.category,
              },
            ];
          });
        }
      }
    }
  }, []);

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
    if (prodCategory == "SkinCare") {
      setSkinCareArr((prevState) => {
        return [
          ...prevState,
          {
            id: prodId,
            price: prodPrice,
            name: prodName,
            category: prodCategory,
          },
        ];
      });
    } else if (prodCategory == "Food") {
      setFoodArr((prevState) => {
        return [
          ...prevState,
          {
            id: prodId,
            price: prodPrice,
            name: prodName,
            category: prodCategory,
          },
        ];
      });
    } else {
      setElectroncsArr((prevState) => {
        return [
          ...prevState,
          {
            id: prodId,
            price: prodPrice,
            name: prodName,
            category: prodCategory,
          },
        ];
      });
    }

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
      <DisplayContent
        SkinCareArr={SkinCareArr}
        FoodArr={FoodArr}
        ElectronicsArr={ElectronicsArr}
      ></DisplayContent>
    </>
  );
}
