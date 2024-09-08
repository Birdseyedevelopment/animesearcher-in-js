import "./globals.css";
import styles from "./page.module.css";

export default function Home() {
  return (
    
    <div className={styles.main}>
     <div className={styles.body}>
    
     <br/><br/>
     
     <div className={styles.title}><h1>Anime Finder</h1></div>
      
      <br/>
      <div className={styles.searchbox}>
        <form action="/about">
        <input type="text" className={styles.searchbar} name="animeName" placeholder="Search for an ANIME"></input> 
    
    <br/><br/><br/><br/>
     <button className={styles.button} type="submit" name="animeName">HAJIME!</button>
     </form>
     </div>
     </div>
     </div>
     )
}