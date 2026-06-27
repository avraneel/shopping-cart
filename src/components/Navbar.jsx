import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { Link, Outlet } from "react-router";

export default function Navbar() {
  const items = [
    { id: 1, name: "Home", path: "" },
    { id: 2, name: "Shop", path: "shop" },
    { id: 3, name: "Cart", path: "cart" },
  ];

  const [cart, setCart] = useState([]);

  let cartNavComponent =
    cart.length > 0 ? (
      <>
        <span className={styles.cartWithSize}>Cart</span>
        <span className={styles.cartSize}>{cart.length}</span>
      </>
    ) : (
      <span className={styles.cartWithoutSize}>Cart</span>
    );

  const itemComponents = items.map((item) => (
    <Link to={`/${item.path}`} key={item.id}>
      <div className={styles.navItem}>
        {item.id === 3 ? cartNavComponent : item.name}
      </div>
    </Link>
  ));

  return (
    <>
      <nav className={styles.navBar}>{itemComponents}</nav>
      <Outlet context={[cart, setCart]} />
    </>
  );
}
