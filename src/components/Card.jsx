import styles from "../styles/Card.module.css";
import btnStyles from "../styles/Button.module.css";
import cartIcon from "../assets/cart.svg";

export default function Card({ item, state, setState }) {
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
