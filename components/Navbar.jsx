"use client"
import Hamburger from "hamburger-react";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/navbar.module.css";
import Search from "./Search";


function Navbar() {
  const [open, setOpen] = useState(false)
  const user = Cookies.get('user') 
  const userObject = user ? JSON.parse(user) : null
  const firstWord = user && userObject.name.split(" ")[0];
  console.log(firstWord)
  
  return (
    <div className={styles.navBody}>
      <div className={styles.navLogo}>
        <Image src="/images/carlogo1.png" width={100} height={50} />
      </div>

      <div className={open ?` ${styles.navList } ${styles.navListMobile}`: styles.navList }>
 
      
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/cars">New Motors</Link>
          </li>
          <li>
            <Link href="/sell-car">Sell Cars</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>

      <div className={styles.button}>
      <Link href="/signup">
        <button >Sales Agent</button>
        </Link>
     
      </div>
   
      
      <div className={styles.searchInput}>
  
        <Hamburger toggled={open} toggle={setOpen} color="#428bca" />
        
      
      
      </div>
    </div>
  );
}

export default Navbar;
