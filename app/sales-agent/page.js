"use client";

import Image from "next/image";
import Link from "next/link";
import { AiOutlineLogin, AiOutlineTransaction } from "react-icons/ai";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdOutlineHotelClass, MdLocalOffer } from "react-icons/md";
import styles from "../../styles/sell.module.css";

const SaleAgent = () => {
  return (
    <main className={styles.main}>
      <div className={styles.hey}>
        <div className={styles.startGen}>
          <div className={styles.image}>
            <img src="/images/car2.jpg" />
          </div>
          <div className={styles.text}>
            <p>
              Start generating income using your smartphone by becoming a Carpro
              Direct Sales Agent (DSA). As a DSA, you will receive a regular
              monthly allowance along with commissions for each car deal you
              successfully close
            </p>
            <Link href={"/sales-agent/start"}>
              <button>Get Started</button>
            </Link>
          </div>
        </div>
        <div className={styles.howItWorks}>
          <h3>How it work</h3>
          <ul>
            <li>
              <AiOutlineLogin className={styles.icon} />
              <h1>Sign up to work with us</h1>
              Join our team by registering to collaborate with us and embark on
              a journey towards earning lucrative income.
            </li>
            <li>
              <MdOutlineHotelClass className={styles.icon} />
              <h1>Get trained </h1>
              Get trained Receive comprehensive training from us to learn the
              necessary guidelines and best practices. Once you grasp the
              concepts, you will navigate through the process effortlessly.
            </li>
            <li>
              <MdLocalOffer className={styles.icon} />
              <h1>Discover and offer assistance to clients in need </h1>
              Identify prospective car purchasers and assist them in overcoming
              obstacles that hinder them from achieving their automotive
              aspirations.
            </li>
            <li>
              <AiOutlineTransaction className={styles.icon} color="#428bca" />
              <h1>
                Finalize transactions and receive compensation for your efforts
              </h1>
              Earn your commission and a monthly allowance for each successful
              deal you secure.
            </li>
            <li>
              <FaRegMoneyBillAlt className={styles.icon} color="#428bca" />
              <h1>Earn through referrals</h1>
              Introduce a friend or family member to become an agent, and you'll
              receive a 0.5% commission from their transactions. Enroll today!
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default SaleAgent;
