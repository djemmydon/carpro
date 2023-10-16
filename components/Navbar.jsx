"use client";
import Hamburger from "hamburger-react";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import styles from "../styles/navbar.module.css";
import { FaSearch } from "react-icons/fa";
import { client, urlFor } from "@/utils/sanity";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const user = Cookies.get("user");
  const userObject = user ? JSON.parse(user) : null;
  const firstWord = user && userObject?.data?.name?.split(" ")[0];
  console.log(firstWord);

  const router = useRouter();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching product data asynchronously
    const query = `*[_type == 'cars' ]`;

    const Fetch = async () => {
      client.fetch(query).then((response) => setProducts(response));
    };
    Fetch();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    // Perform the search logic here
    const filteredProducts = products.filter((product) =>
      product.modelName.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(filteredProducts);
  };

  useEffect(() => {
    if (searchTerm.length === 0) {
      setSearchResults([]);
    }
  }, [searchTerm]);

  return (
    <div className={styles.navBody}>
      <div className={styles.navLogo}>
        <Image
          src="/images/carlogo1.png"
          alt="Carpro Cars is the best place to get a car"
          width={100}
          height={50}
        />
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
            <Link href="/sales-agent">Sales Agent</Link>
          </li>

          <li onClick={() => setOpen(false)} className={styles.sale}>
            {userObject ? (
              <div>
                <p
                  onClick={() => {
                    Cookies.remove("user");
                    router.reload(window.location.pathname);
                    toast("Logout successfully✔️");
                  }}
                  style={{ color: "#fe2020" }}
                >
                  Logout
                </p>
              </div>
            ) : (
              <Link href="/signin">Signup / Login</Link>
            )}
          </li>
        </ul>
      </div>

      <div
        style={{
          display: "flex",
          gap: 2,
          alignContent: "center",
        }}
      >
        <div className={styles.change}>
          {userObject ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p style={{ color: "#428bca" }}>{firstWord}</p>
              <div className={styles.button}>
                <button
                  style={{
                    backgroundColor: "#fe2020",
                    borderRadius: 10,
                    width: 100,
                  }}
                  onClick={() => {
                    Cookies.remove("user");
                    router.reload(window.location.pathname);
                    toast("Logout successfully✔️");
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className={styles.button}>
              <Link href="/signin">
                <button>Signup / Login</button>
              </Link>
            </div>
          )}
        </div>
        <FaSearch
          onClick={() => setOpenSearch(!openSearch)}
          color="#428bca"
          size={25}
          className={styles.searchIconDesktop}
        />
      </div>

      <div className={styles.searchInput}>
        <FaSearch
          onClick={() => setOpenSearch(!openSearch)}
          color="#428bca"
          size={25}
        />
        <Hamburger size={26} toggled={open} toggle={setOpen} color="#428bca" />
      </div>

      {openSearch && (
        <div className={styles.searchBox}>
          <div className={styles.form}>
            <input
              type="text"
              placeholder="Search for cars..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>

          <ul>
            {searchResults.map((product) => (
              <li key={product._id}>
                <Link href={`cars/${product.slug.current}`}>
                  <Image
                    src={urlFor(product?.images[0]).url()}
                    alt="Carpro Cars is the best place to get a car"
                    width={30}
                    height={30}
                    className={styles.image}
                  />
                  {product.modelName}
                </Link>
              </li>
            ))}
          </ul>

          {searchTerm.length === 0 && (
            <p style={{ margin: 0, color: "#000" }}>No Results</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
