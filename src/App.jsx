import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

//---DATA-----
import products from "./db/db";
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // ------------input filter-------
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  //------Radio ---------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //----BUTTON--------

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(Products, selected, query) {
    let filterProducts = Products;
    //----input filter----
    if (query) {
      filterProducts = filteredItems;
    }

    //------selected------
    if (selected) {
      filterProducts = filterProducts.filter(
        ({ title, newPrice, company, color, category }) =>
          title === selected ||
          newPrice === selected ||
          color === selected ||
          category === selected ||
          company === selected
      );
    }

    return filterProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
