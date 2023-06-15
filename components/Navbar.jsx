import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/navbar.module.css";
import Search from "./Search";


function Navbar() {
  return (
    <div className={styles.navBody}>
      <div className={styles.navLogo}>
        <Image src="/images/carlogo1.png" width={100} height={50} />
      </div>

      <div className={styles.navList}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">New Motors</Link>
          </li>
          <li>
            <Link href="/">About Us</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>

      {/* <div className={styles.searchInput}>

      </div> */}
    </div>
  );
}

export default Navbar;
