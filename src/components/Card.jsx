export default function Card({ item }) {
  return (
    <article className="card">
      <img src="" alt="" />
      <div className="card-text">
        <h3>{item.name}</h3>
        <p>{item.price}</p>
        <button>Add to cart</button>
      </div>
    </article>
  );
}
