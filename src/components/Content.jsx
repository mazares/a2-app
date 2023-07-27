import Card from "./Card";

export default function Content(params) {
  const contenttext = params.contenttext;

  const products = [
    { id: 1, name: "adidas", description: "nice shoes", price: 120 },
    { id: 2, name: "nike", description: "good shoes", price: 130 },
    { id: 3, name: "new balance", description: "awsome shoes", price: 110 },
  ];

  return (
    <div className="content">
      <h3> {contenttext}</h3>
      <div className="content-cards">
        {products.map((element) => {
          return (
            <Card
              element
              key={element.id}
              cardname={element.name}
              carddescription={element.description}
              cardprice={element.price}
            />
          );
        })}
      </div>
    </div>
  );
}
