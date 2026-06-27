import styles from "../styles/Cart.module.css";

export default function Cart() {
  return (
    <>
      <div className={styles.cart}>
        <header className={styles.cartHeader}>
          <h1>Here's your cart</h1>
        </header>
        <main className={styles.cartBody}>
          <section className={styles.itemList}>
            <h2>Items Ordered</h2>
          </section>
          <section className={styles.bill}>
            <h2>Summary</h2>
          </section>
          <button className={styles.checkout}>Checkout</button>
        </main>
      </div>
    </>
  );
}
