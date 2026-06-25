import Card from "./Card";

export default function Shop() {
  const item = {
    name: "Ring",
    img: "https://picsum.photos/300/",
    price: "200",
  };

  return (
    <>
      <header>What do you want to buy?</header>
      <main className="product-list">
        <Card item={item} />
      </main>
    </>
  );
}
