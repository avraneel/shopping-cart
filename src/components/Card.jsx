import styles from "../styles/Card.module.css";
import btnStyles from "../styles/Button.module.css";
import cartIcon from "../assets/cart.svg";
import { useState } from "react";

export default function Card({ item, state, setState }) {
  const [qty, setQty] = useState(1);

  function addToCart(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const qty = formData.get("qty");

    const idArray = state.map((product) => product.id);

    console.log(idArray);
    if (idArray.indexOf(item.id) < 0) {
      // item not present in array, add it
      setState([
        ...state,
        { id: item.id, name: item.title, qty: qty, price: item.price },
      ]);
    } else {
      console.log("else block");
      const updatedProducts = state.map((p) => {
        if (item.id === p.id) {
          // we find the repeated product
          return { ...p, qty: Number(p.qty) + Number(qty) };
        } else {
          return p;
        }
      });
      setState(updatedProducts);
    }
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
          <div className={styles.quantity}>
            <label htmlFor="qty">Quantity</label>
            <div className={styles.quantityWidget}>
              <button type="button" onClick={() => qty < 50 && setQty(qty + 1)}>
                +
              </button>
              <input
                type="number"
                name="qty"
                id="qty"
                min={1}
                max={50}
                value={qty}
                onChange={(e) => setQty(Number(e.target.value))}
              />
              <button type="button" onClick={() => qty > 1 && setQty(qty - 1)}>
                -
              </button>
            </div>
          </div>
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
