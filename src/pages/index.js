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
    const find = basket.find((p) => p.id === product.id);
    if (find) {
      const updatedBasket = basket.map((p) => {
        if (p.id === product.id) {
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      });
      setBasket(updatedBasket);
    } else {
      setBasket([...basket, { ...product, quantity: 1 }]);
    }
  }
  const incrementQuantity = (id) => {
    // Trouver le produit dans le panier en fonction de son ID
    const updatedBasket = basket.map((p) => {
      if (p.id === id) {
        return { ...p, quantity: p.quantity + 1 };
      }
      return p;
    });
    setBasket(updatedBasket);
  };

  const reduceQuantity = (id) => {
    const updatedBasket = basket.map((p) => {
      if (p.id === id) {
        return { ...p, quantity: p.quantity - 1 };
      }
      return p;
    });
    setBasket(updatedBasket);
  };

  return (
    <div>
      <Head>
        <title>Products store</title>
        <meta property="og:title" content="Product store" />
        <meta property="og:description" content="Find your product" />
        <meta
          property="og:image"
          content="https://queue-it.com/media/ppcp1twv/product-drop.jpg"
        />
        <meta
          property="og:url"
          content="https://products-store-tau.vercel.app/"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="image card" />
        <meta name="twitter:title" content="Product store" />
        <meta name="twitter:description" content="Find your product" />
        <meta
          name="twitter:image"
          content="https://queue-it.com/media/ppcp1twv/product-drop.jpg"
        />
      </Head>
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
        incrementQuantity={incrementQuantity}
        reduceQuantity={reduceQuantity}
      />

      <CardSection products={products} handleBasket={handleBasket} />
    </div>
  );
}
