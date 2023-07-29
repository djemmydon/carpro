"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { styled } from "styled-components";
import styles from "../styles/hero.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { urlFor } from "@/utils/sanity";

function Hero({ data }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>{data?.modelName}</h1>
          <h3>₦{parseInt(data?.price).toLocaleString()}</h3>

          <Link href={`cars/${data.slug.current}`}>
            <button>Get Started</button>
          </Link>
        </div>

        <div className="images">
          <Image
            src={urlFor(data?.images[0]).url()}
            alt="Carpro Cars is the best place to get a car"
            width={700}
            height={550}
            className={styles.image}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

const Body = styled.div`
  background-color: #fff;
  height: 600px;
  padding: 2rem;
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text {
      h3 {
        color: "#000";
      }
    }
  }
`;
