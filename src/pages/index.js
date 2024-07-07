import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import axios from "axios";
import Banner from "@/components/Banner";
import CardSection from "@/components/CardSection";
import Title from "@/components/Title";
import Basket from "@/components/Basket";

export default function Home() {
  // States
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const addOneToBasket = (id) => {
    return basket.map((p) =>
      p.id === id ? { ...p, amount: p.amount + 1 } : p
    );
  };

  function handleBasket(product) {
    const find = basket.find((p) => p.id === product.id);
    let newBasket;
    if (find) {
      newBasket = addOneToBasket(product.id);
    } else {
      newBasket = [...basket, { ...product, amount: 1 }];
    }

    setBasket(newBasket);
  }

  function removeProduct(id) {
    const filteredBasket = basket.filter((p) => p.id !== id);
    setBasket(filteredBasket);
  }

  function incrementAmount(id) {
    const newBasket = addOneToBasket(id);
    setBasket(newBasket);
  }

  return (
    <div>
      <Banner
        title="Are you starving ?"
        text="Within a few clics, find  meals that are accessible near you"
        button="Delivery"
        button2="Pick up"
      />
      <Title title="Popular items" />
      <Basket
        basket={basket}
        removeProduct={removeProduct}
        incrementAmount={incrementAmount}
      />
      <CardSection products={products} handleBasket={handleBasket} />
    </div>
  );
}
