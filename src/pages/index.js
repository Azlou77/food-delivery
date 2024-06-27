import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import axios from "axios";
import Banner from "@/components/Banner";
import CardSection from "@/components/CardSection";
import Title from "../components/Title";

// Data import from https://fakestoreapi.com/products

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);
  return (
    <div>
      {/* Banner component */}
      <Banner
        title="Are you starving ?"
        text="Within a few clics, find  meals that are accessible near you"
        button="Delivery"
        button2="Pick up"
      />
      <Title title="Popular items" />

      {/* Card Section component */}
      <CardSection sectionData={products} />
    </div>
  );
}
