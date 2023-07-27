export default function Card(params) {
  const cardname = params.cardname;

  const carddescription = params.carddescription;

  const cardprice = params.cardprice;

  const handleClick = (element) => {
    console.log(cardname);
  };
  return (
    <div className="card">
      <h3>name: {cardname.toUpperCase()}</h3>

      <p>description: {carddescription}</p>

      <p>price: {cardprice} $</p>

      <div className="card-actions">
        <button onClick={handleClick} className="add-to-favorites">
          ❤️
        </button>
        <button onClick={handleClick} className="add-to-cart">
          buy
        </button>
      </div>
    </div>
  );
}
