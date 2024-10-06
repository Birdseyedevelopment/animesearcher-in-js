import styles from "./page.module.css";

export default function About() {
  return (
    
    <div className={styles.page}>
      <div className={styles.main}>
      <h1 >Anime Adder</h1>
      
      </div>
      <br/><br/>
        <div className={styles.newAnimeform}>
          
          <form action="/about">
          <label for="animeName" className={styles.formlabel}>Anime Name: </label>
          <input type="text" name="animeName" className={styles.formInput}></input>
          <br/><br/>
          <label for="creatorName" className={styles.formlabel}>Creator Name: </label>
          <input type="text" name="creatorName" className={styles.formInput}></input>
          <br/><br/>
          <label for="animeDate" className={styles.formlabel}>Anime Date: </label>
          <input type="text" name="animeDate" className={styles.formInput}></input>
          <br/><br/>
          <label for="mainCharacter" className={styles.formlabel}>Main Character: </label>
          <input type="text" name="mainCharacter" className={styles.formInput}></input>
          <br/><br/>
          <label for="description" className={styles.formlabel}>Description: </label>
          <textarea type="text" name="description" className={styles.formInput}></textarea>
          <br/><br/><br/><br/>
          <button className={styles.button} type="submit" name="animeName">HAJIME!</button>
          </form>
          </div>

        </div>
      
   
  );
}