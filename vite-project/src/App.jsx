import { useState, useEffect } from "react";
import InputForm from "./components/Input/InputForm";
import DisplayContent from "./components/UI/DisplayContent";
function App() {
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

  const addProductsHandler = (prodId, prodName, prodPrice, prodCategory) => {
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
      setElectronicsArr((prevState) => {
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
  };
  return (
    <>
      <InputForm onAddProducts={addProductsHandler} />
      <DisplayContent
        SkinCareArr={SkinCareArr}
        FoodArr={FoodArr}
        ElectronicsArr={ElectronicsArr}
      ></DisplayContent>
    </>
  );
}

export default App;
