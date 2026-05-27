import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <Link href="/" className="logo">
            <Image
              src="/icons/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="w-auto h-auto"
            />
            <p>DoEvents</p>
          </Link>
          <ul className="list-none">
            <li>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/events" className={styles.navLink}>
                Events
              </Link>
            </li>
            <li>
              <Link href="/about" className={styles.navLink}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
