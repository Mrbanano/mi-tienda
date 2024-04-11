"use client";
import Card from "../Card/Card";
import { CardsContainer } from "./CardsContainer";

const Cards = ({ data }) => {
  return (
    <CardsContainer>
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
          price={item.price}
        />
      ))}
    </CardsContainer>
  );
};

export default Cards;
