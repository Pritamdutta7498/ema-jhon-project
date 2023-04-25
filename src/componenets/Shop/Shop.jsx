import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../assets/utilities/fakedb";

const Shop = () => {
  //Data load

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // get data from localStorage-------

  useEffect(() => {
    const storeCart = getShoppingCart();
    const savedCart = [];
    // step1: get the id----------
    for (const id in storeCart) {
      //step2: get the product by using id-------
      const addedProduct = products.find((product) => product.id === id);
      // step3: get quantity of the product
      if (addedProduct) {
        const quantity = storeCart[id];
        addedProduct.quantity = quantity;
        // step4: add the added product to the savedCart--------
        savedCart.push(addedProduct);
      }
      // console.log(addedProduct);
    }
    // step5: set the cart------
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    // console.log(product);
    let newCart = [];
    // const newCart = [...cart, product];
    // setCart(newCart);
    // addToDb(product.id);

    // another example:-------
    const exist = cart.find((pd) => pd.id === product.id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exist];
    }
    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <Cart cart={cart}></Cart>
    </div>
  );
};

export default Shop;
