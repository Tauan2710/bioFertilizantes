import React from "react";
import { Content, LayoutContainer } from "./Layout.styles";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Link to="/">
        <marquee>
          <h1>BioFertilizante</h1>
        </marquee>
      </Link>
      <Content>{children}</Content>
    </LayoutContainer>
  );
};

export default Layout;
