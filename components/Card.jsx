import Image from "next/image";
import React from "react";
import styles from "../styles/card.module.css";
import { FaChair } from "react-icons/fa";
import { BsBuildingGear } from "react-icons/bs";
import { urlFor } from "@/utils/sanity";
import Link from "next/link";
import ReactWhatsapp from "react-whatsapp";
import { AiFillPhone, AiOutlineWhatsApp, AiFillMail } from 'react-icons/ai';


function Card({ item }) {
  console.log(urlFor(item?.images[1]))
  
  return (
    <div className={styles.body}>
      <Link href={`cars/${item.slug.current}`}>
      <Image src={urlFor(item.images[0]).url()} width={300} height={200}  className={styles.image} />
      <div className={styles.price}>
        <p>₦{parseInt(item.price).toLocaleString() }</p>
    
        
      </div>
      <div className={styles.cardContent}>
        <div className={styles.text}>
          <p>{ item.modelName}</p>
          <h3>{item.title}</h3>
        </div>

        </div>
      </Link>
      <ReactWhatsapp  className={styles.button} number="+2348136809407" message="Hello World!!!">
                    <span>

                    <div>
                    <AiOutlineWhatsApp size={20} /> 
                    </div>
                    <div>
                        <h2>Request Information</h2>
                    </div>
                    </span>
                    </ReactWhatsapp>
    </div>
  );
}

export default Card;
