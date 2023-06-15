"use client"

import Card from "@/components/Card";
import Hero from "@/components/Hero";
import { client } from "@/utils/sanity";
import { groq } from "next-sanity";
import Image from "next/image";
import { useEffect } from "react";
import styles from "./page.module.css";

export const getProduct = async () => {
  const query =`*[_type == 'cars' ]`;

  const products = await client.fetch(query);
  return {
    props: {
      data: products,

    },
  };
};


export default async function Home () {
  const data =await getProduct()
  console.log(data)

  return (
    <main>
      <Hero />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: 10,
          flexWrap: "wrap",
          gap: 20,
          margin: 20,
        }}
      >

        {data.props.data.map((item) => (
        <Card
        item={item}
        />

        ))}
      </div>

  
    </main>
  );
}


