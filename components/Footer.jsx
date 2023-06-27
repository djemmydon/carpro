import Link from "next/link";
import styles from "../styles/footer.module.css";
import {
  AiFillTwitterSquare,
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBody}>
        <div>
          <div className={styles.headers}>
            <h2>Useful Links</h2>
          </div>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <hr />
            <li>
              <Link href="/cars">All Cars</Link>
            </li>
            <hr />
            <li>
              <Link href="/signin">Login</Link>
            </li>
            <hr />
            <li>
              <Link href="/signup">Sign Up</Link>
            </li>
            <hr />
          </ul>
        </div>

        <div>
          <div className={styles.headers}>
            <h2>Follow Us</h2>
          </div>
          <ul>
            <li>
              <a href="">
                <AiFillTwitterSquare size={30} />
              </a>
            </li>
            <li>
              <a href="">
                <AiFillFacebook size={30} />
              </a>
            </li>
            <li>
              <a href="">
                <AiFillLinkedin size={30} />
              </a>
            </li>
            <li>
              <a href="">
                <AiFillInstagram size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
