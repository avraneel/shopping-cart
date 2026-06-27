import styles from "../styles/Card.module.css";
import btnStyles from "../styles/Button.module.css";
import cartIcon from "../assets/cart.svg";

export default function Card({ item, state, setState }) {
  function addToCart() {
    console.log(item.id);
    setState([...state, { id: item.id, name: item.title, price: item.price }]);
  }

  return (
    <article className={styles.card}>
      <div className={styles.cardImage}>
        <img src={item.image} alt={item.title} />
      </div>
      <div className={styles.cardText}>
        <h3>{item.title}</h3>
        <p>${item.price.toFixed(2)}</p>
        <label htmlFor="qty">Quantity</label>
        <input type="number" name="Quantity" id="qty" className="qty" />
        <button className={btnStyles.cartBtn} onClick={addToCart}>
          <img src={cartIcon} alt="Add to cart" />
        </button>
      </div>
    </article>
  );
}
