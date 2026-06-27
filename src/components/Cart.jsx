import { useOutletContext } from "react-router";
import styles from "../styles/Cart.module.css";

export default function Cart() {
  const [cart, setCart] = useOutletContext();

  console.log(cart);

  const total = cart.reduce((acc, cv) => acc + cv.price, 0);
  console.log(total);
  const cartComponents = cart.map((product) => (
    <tr key={product.id}>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.qty}</td>
      <td>{product.price.toFixed(2)}</td>
      <td>{(product.qty * product.price).toFixed(2)}</td>
    </tr>
  ));

  return (
    <>
      <div className={styles.cart}>
        <header className={styles.cartHeader}>
          <h1>Here's your cart</h1>
        </header>
        <main className={styles.cartBody}>
          <section className={styles.itemList}>
            <h2>Items Ordered</h2>
            <table className={styles.orderSummary}>
              <thead>
                <tr className={styles.headerRow}>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Qty</th>
                  <th>Price ($)</th>
                  <th>Total ($)</th>
                </tr>
              </thead>
              <tbody>
                {cartComponents}
                <tr className={styles.totalRow}>
                  <th colSpan={4} className={styles.totalPrompt}>
                    Total
                  </th>
                  <th colSpan={2}>{total}</th>
                </tr>
              </tbody>
            </table>
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
