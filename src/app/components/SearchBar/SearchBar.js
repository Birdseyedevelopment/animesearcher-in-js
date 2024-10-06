import React from 'react';
import styles from './index.module.css'

export default function SearchBar() {
  return (
    <div className={styles.searchbox}>
    <form action="/about">
      <input type="text" className={styles.searchbar} name="animeName" placeholder="Search for an ANIME"></input> 
  
  <br/>
   <button className={styles.button} type="submit" name="animeName">HAJIME!</button>
   </form>
   </div>
  );
}
