

import CarDetails from "@/components/ProductDetails"
import { client } from "@/utils/sanity"
import { groq } from "next-sanity"

async function Details({ params: { slug } }) {
    const query = groq`*[_type == "cars" && slug.current == $slug][0]`
  const post = await client.fetch(query, { slug })

    return (
        <div style={{backgroundColor:"#010"}}>
          <CarDetails key={post._id}  post={post} />
        </div>
    )
}
export default Details