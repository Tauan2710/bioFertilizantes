import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importando o useNavigate
import Layout from "../../components/Layout";

import { Titulo } from "../../components/Titulo/Titulo.styles";
import { Text } from "../../components/Text/Text.styles";
import { Subtitle } from "../../components/Subtitle/Subtitle.styles";
import DisplayCard from "../../components/DisplayCard";
import { cards } from "../../data/Cards";
import {
  CardsContainer,
  CardsWrapper,
} from "../../components/DisplayCard/DisplayCard.style";

const Home = () => {
  const [allcards, setAllCards] = useState([]);

  useEffect(() => {
    setAllCards(cards);
  }, [cards]);

  return (
    <Layout>
      <Titulo>
        BioFertilizante: Guia Completo de Preparo, Beneficios e Diferenças
      </Titulo>
      <Text>
        Descubra o poder do BioFertilizante uma alternativa natural e
        sustentavel para impulsionar o crescimento das suas plantas.Este guia
        completo vai explorar o modo de preparo .aos incriveis Beneficios e as
        principais diferenças em relaçao aos fertilizantes tradicionais.
      </Text>
      <CardsWrapper>
        {allcards &&
          allcards.map((card) => <DisplayCard key={card.title} card={card} />)}
      </CardsWrapper>

      {/* <Subtitle>BioFertilizantes vs. Fertilizantes</Subtitle>
      <Text>
        Entenda as Diferenças entre o BioFertilizante e os Fertilizantes
        quimicos convencionais.Descubra como o BioFertilizante e uma escolha
        mais sustentavel e benefica para o meio Ambiente.
      </Text> */}
    </Layout>
  );
};

export default Home;
