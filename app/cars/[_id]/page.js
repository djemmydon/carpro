"use client"

import CarDetails from "@/components/ProductDetails"
import { client } from "@/utils/sanity"
import { groq } from "next-sanity"
import { useParams } from "next/navigation"
import { useState } from "react"

async function Details({ params: { _id } }) {
    
    const query = groq`*[_type == "cars" && slug.current == $_id][0]`
    const post = await client.fetch(query, {_id})

    return (
        <div style={{backgroundColor:"#010"}}>
          <CarDetails key={post._id}  post={post} />
        </div>
    )
}
export default Details