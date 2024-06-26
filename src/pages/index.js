import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div>
      <Banner
        title="Are you starving ?"
        text="Within a few clics, find  meals that are accessible near you"
        button="Delivery"
        button2="Pick up"
      />
    </div>
  );
}
