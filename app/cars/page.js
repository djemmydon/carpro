"use client"
import Card from "@/components/Card";
import { client } from "@/utils/sanity";

export const getProduct = async () => {
    const query =`*[_type == 'cars' ]`;
  
    const products = await client.fetch(query);
    return {
      props: {
        data: products,
  
      },
    };
  };
async function Cars() {
// const [data, setData] = useState([])
const data = await getProduct()
console.log(data)

console.log(data)
    return (
        <>
          <div className="head">
        <h2>Al                                                                                                                   l Cars</h2>
        <p>People liked the most listed here</p>
            </div>
            
        <div style={{color:"#f5faff"}}>
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
            </div>
            </>
            
    )
}
export default Cars