import styles from "../styles/Card.module.css";
import btnStyles from "../styles/Button.module.css";
import cartIcon from "../assets/cart.svg";

export default function Card({ item, state, setState }) {
  function addToCart(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const qty = formData.get("qty");

    setState([
      ...state,
      { id: item.id, name: item.title, qty: qty, price: item.price },
    ]);
  }

  return (
    <article className={styles.card}>
      <div className={styles.cardImage}>
        <img src={item.image} alt={item.title} />
      </div>
      <div className={styles.cardText}>
        <h3>{item.title}</h3>
        <p>${item.price.toFixed(2)}</p>
        <form action="" className={styles.productForm} onSubmit={addToCart}>
          <label htmlFor="qty" className={styles.qtyContainer}>
            Quantity:{" "}
            <input
              type="number"
              id="qty"
              name="qty"
              className={styles.qty}
              defaultValue={1}
            />
          </label>
          <button className={btnStyles.cartBtn} type="submit">
            <img
              src={cartIcon}
              alt="Add to cart"
              width={24}
              height={24}
              className={styles.cartIcon}
            />
          </button>
        </form>
      </div>
    </article>
  );
}
