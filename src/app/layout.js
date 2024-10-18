import Link from "next/link";
import  "./globals.css";
import styles from "./page.module.css";
import SearchBar from "./components/SearchBar/SearchBar";

export const metadata = {
  title: "Anime searcher",
  description: "Created by Birdseye Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className={styles.navbox}>
        
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
      <SearchBar/>

    </nav>   
          </div>
    <div className={styles.layout}>{children}</div>
      </body>
    </html>
  );
}
