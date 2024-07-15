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
    axios.get(process.env.NEXT_PUBLIC_API_URL).then((res) => {
      setProducts(res.data);
    });
  }, []);

  function handleBasket(product) {
    let newBasket;
    newBasket = [...basket, product];
    setBasket(newBasket);
  }

  function removeProduct(id) {
    const filteredBasket = basket.filter((p) => p.id !== id);
    setBasket(filteredBasket);
  }

  return (
    <div>
      <header>
        <Banner
          title="Are you starving ?"
          text="Within a few clics, find  meals that are accessible near you"
          button="Delivery"
          button2="Pick up"
        />
      </header>

      <Basket
        basket={basket}
        removeProduct={removeProduct}
        incrementQuantity={() => incrementQuantity(quantity)}
      />

      <CardSection products={products} handleBasket={handleBasket} />
    </div>
  );
}
