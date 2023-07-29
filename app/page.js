"use client";

import Card from "@/components/Card";
import Hero from "@/components/Hero";
import { client } from "@/utils/sanity";
import Link from "next/link";

export const getProduct = async () => {
  const query = `*[_type == 'cars' ]`;

  const products = await client.fetch(query);
  return products.slice(1, 7).sort((a, b) => b._updatedAt.localeCompare(a._updatedAt))

};

export default async function Home() {
  const data = await getProduct();
  const single = data[0];

  return (
    <main>
      <Hero data={single} />

      <div className="head">
        <h2>Popular Cars</h2>
        <p>People liked the most listed here</p>
      </div>
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
        {data.map((item) => (
          <Card key={item._id} item={item} />
        ))}
      </div>
      <div className="buttons">
        <Link href="/cars">
          <button>Sales Agent</button>
        </Link>
      </div>
    </main>
  );
}
