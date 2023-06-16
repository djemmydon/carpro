import Image from "next/image";


function Loading() {
    
    return (
        <div style={{display:"flex", width:"100%", justifyContent:"center", alignItems:"center"}} className="loading">
      <Image src="/images/car.gif" width={100} height={100} />
        </div>
    )
}

export default Loading