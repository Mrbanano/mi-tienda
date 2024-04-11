import { CardContainer } from "./CardContainer";

const Card = ({ image, title, description, price }) => {
  return (
    <CardContainer>
      <img
        src={image}
        alt={title}
        style={{ width: "10em", borderRadius: "10px" }}
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>$ {price}</p>
    </CardContainer>
  );
};

export default Card;
