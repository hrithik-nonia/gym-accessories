import CardItem from "./card-item";
const Card = ({ data = [] }) => {
  return (
    <>
      {data.map((cart) => (
        <CardItem key={cart.id} cart={cart} />
      ))}
    </>
  );
};
export default Card;
