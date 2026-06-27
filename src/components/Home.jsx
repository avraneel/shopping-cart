import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.bgImg}>
      <header className={styles.home}>
        <h1 className={styles.homeTitle}>Welcome to My Store</h1>
        <p className={styles.homeText}>
          <em>For all your shopping needs</em>
        </p>
      </header>
    </div>
  );
}
