"use client";
import Hamburger from "hamburger-react";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../styles/navbar.module.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const user = Cookies.get("user");
  const userObject = user ? JSON.parse(user) : null;
  const firstWord = user && userObject?.user.name?.split(" ")[0];
  console.log(firstWord);

  return (
    <div className={styles.navBody}>
      <div className={styles.navLogo}>
        <Image src="/images/carlogo1.png" width={100} height={50} />
      </div>

      <div
        className={
          open ? ` ${styles.navList} ${styles.navListMobile}` : styles.navList
        }
      >
        <ul>
          <li onClick={() => setOpen(false)}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link href="/cars">New Motors</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link href="/sell-car">Sell Cars</Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link href="/">Contact</Link>
          </li>
          <li onClick={() => setOpen(false)} className={styles.sale}>
            {userObject ? (
              <div>
                <p style={{ color: "#428bca" }}>{firstWord}</p>
              </div>
            ) : (
          
                <Link href="/signup">Sales Agent</Link>
         
            )}
          </li>
        </ul>
      </div>

      <div className={styles.change}>
        {userObject ? (
          <div>
            <p style={{ color: "#428bca" }}>{firstWord}</p>
          </div>
        ) : (
          <div className={styles.button}>
            <Link href="/signup">
              <button>Sales Agent</button>
            </Link>
          </div>
        )}
      </div>
      <div className={styles.searchInput}>
        <Hamburger size={26} toggled={open} toggle={setOpen} color="#428bca" />
      </div>
    </div>
  );
}

export default Navbar;
