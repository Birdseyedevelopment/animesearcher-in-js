import Link from "next/link";
import  "./globals.css";
import styles from "./page.module.css";

export const metadata = {
  title: "Anime searcher",
  description: "Created by Birdseye Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <div className={styles.navbox}>
        <div className={styles.nav}>
        
      <nav  >
      <ul >
        <li>
        <Link href="/">
            Home
          </Link>
        
          </li>
        <li>
          <Link href="/about">About </Link>
          </li>
        <li> 
        <Link href="/animeAdder">Anime Adder</Link>
        </li>
      </ul>
    </nav>   
          </div>
        </div> 
    <div>{children}</div>
      </body>
    </html>
  );
}
