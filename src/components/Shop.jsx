import Card from "./Card";
import styles from "../styles/Shop.module.css";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";

export default function Shop() {
  const [productList, setProductList] = useState([]);
  const [cart, setCart] = useOutletContext();

  useEffect(() => {
    let ignore = false;

    async function startFetching() {
      const fetchedItems = await getData();
      if (!ignore) {
        setProductList(fetchedItems);
      }
    }

    startFetching();

    return () => {
      ignore = false;
    };
  }, []);

  const itemComponents = productList.map((product) => (
    <Card key={product.id} item={product} state={cart} setState={setCart} />
  ));

  return (
    <>
      <div className={styles.bgImg}>
        <div className={styles.shop}>
          <header className={styles.shopHeader}>
            <h1>What do you want to buy?</h1>
          </header>
          <main className={styles.productList}>{itemComponents}</main>
        </div>
      </div>
    </>
  );
}

async function getData() {
  const url = "https://fakestoreapi.com/products";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response Status : ${response.status}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
}
