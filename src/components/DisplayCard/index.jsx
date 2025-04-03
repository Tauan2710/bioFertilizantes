import { Link } from "react-router-dom";
import { Subtitle } from "../Subtitle/Subtitle.styles";
import { Text } from "../Text/Text.styles";
import { CardsContainer, DefaultLink } from "./DisplayCard.style";

const DisplayCard = (props) => {
  const card = props.card;
  return (
    <CardsContainer>
      <DefaultLink to={"#"}>
        <Subtitle>{card.title}</Subtitle>
      </DefaultLink>
      <Text>{card.description}</Text>
    </CardsContainer>
  );
};
export default DisplayCard;
