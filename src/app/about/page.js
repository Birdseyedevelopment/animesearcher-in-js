import styles from "./page.module.css";

export default function About() {
  return (
    
    <div className={styles.page}>
      <div className={styles.searchbox}>
      <form action="/about">
        <input type="text" className={styles.searchbar} name="animeName" placeholder="Search for an ANIME"></input> 
    
    <br/>
     <button className={styles.button} type="submit" name="animeName">HAJIME!</button>
     </form>
     </div>
      <div className={styles.main}>
      <h1 >Anime Info Page</h1>
      </div>
      <br />
        <div className={styles.body}>
          
          <div  className={styles.animeName}>
          <h1 >Anime Name</h1>
          
          <p> this is the main page</p>
          </div>
          <div  className={styles.creatorName}>
          <h1 >Creator Name</h1>
          
          <p> this is the main page</p>
          </div>

          <div  className={styles.creationDate}>
          <h1 >Creation Date</h1>
          
          <p> this is the main page</p>
          </div>

          <div  className={styles.mainCharacter}>
          <h1 >Main Character</h1>
          
          <p> this is the main page</p>
          </div>

          <div  className={styles.description}>
          <h1 >Description</h1>
          
          <p> Lorem ipsum dolor sit amet. Qui architecto sequi aut amet voluptatum sit assumenda delectus vel perferendis deserunt et tempora velit non voluptatum eius ut nobis laborum. Ut internos veniam eum autem possimus in omnis voluptatem.</p>
          </div>

        </div>
      
   </div>
  );
}