"use client"

import { urlFor } from "@/utils/sanity";
import Image from "next/image";
import styles from "../styles/productDetails.module.css";

import { AiFillPhone, AiOutlineWhatsApp, AiFillMail } from 'react-icons/ai';
import { useState } from "react";
import ReactWhatsapp from 'react-whatsapp';


const CarDetails = ({ post}) => {
    const [index, setIndex] = useState(0);
    

    const click = (img) => {
        setIndex(img)
        console.log(img)
        
    }
    return (
        <div className={styles.body}>
              {/* <img className={styles.imageHead} src={urlFor( post?.images[index]).url()} /> */}


            <div className={styles.carHistory}>
                <div className={styles.title}>
                    <h2>{post.title}</h2>
                    <h5>₦{parseInt(post.price).toLocaleString() }</h5>
                </div>
                <div>
                    <div
                        loop={true}
                        spaceBetween={1}
                        className={styles.ProductDetailShowImage}
                    >
                    <div>

              <img className={styles.imageHead} src={urlFor( post?.images[index]).url()} />
                        
            </div>
            </div>

              <div className={styles.imageBody}>

{post?.images.map((item, index) => (
    <div key={index} className={styles.extraImage}
        onClick={() => click(index)}
    >
        <img
         width={50}
            
        height={50}
      src={urlFor(item).url()}
            alt="car gallery"
            className={styles.image}
      
    />
  </div>
))}
</div>

                    <div className={styles.items}>
                        <p>Litres:</p>
                        <p>{post.Liters}</p>
                    </div>
                    <div className={styles.items}>
                        <p>Seats:</p>
                        <p>{ post.seat}</p>
                    </div>
                    <div className={styles.items}>
                        <p>Model Year:</p>
                        <p>{post.modelYear}</p>
                    </div>
                    <div className={styles.items}>
                        <p>Model Name:</p>
                        <p>{ post.modelName}</p>
                    </div>
                    <div className={styles.items}>
                        <p>color:</p>
                        <p>{ post.color}</p>
                    </div>
                    <div className={styles.items}>
                        <p>Engine Capacity:</p>
                        <p>{post.enineCapacity}</p>
                    </div>
                    <div className={styles.items}>
                        <p>Condition:</p>
                        <p>{post.condition}</p>
                    </div>
                </div>
                <div className={styles.descriptions}>
                    <h2>Descriptions</h2>
                    <p>{ post?.description}</p>
             
                </div>
             </div>
            <div className={styles.contactInfo}>
        <div className={styles.buttonBody}>
        <button className={styles.button}>
                <a href="tel:+2348136809407" >

                    <div>
                       <AiFillPhone size={30} /> 
                    </div>
                    <div>
                        <h2>+234 813 680 9407</h2>
                    </div>
                    </a>
                    </button>
                    <ReactWhatsapp  className={styles.button} number="+2348136809407" message="Hello World!!!">
                    <span>

                    <div>
                    <AiOutlineWhatsApp size={30} /> 
                    </div>
                    <div>
                        <h2>+234 813 680 9407</h2>
                    </div>
                    </span>
                    </ReactWhatsapp>
        

                <button className={styles.button}>
                <a href="mail:carpro231@gmail.com" >

                    <div>
                       <AiFillMail size={30} /> 
                    </div>
                    <div>
                        <h2>Send Email</h2>
                    </div>
                    </a>
                </button>
        </div>
    </div>
    </div>
)
}
export default CarDetails;

// 	https://motoro.wpsixer.com/motoro-spide/wp-content/uploads/2021/03/contact-bg4.png