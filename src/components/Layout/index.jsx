import React from 'react';
import { Content, LayoutContainer } from './Layout.styles';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return <LayoutContainer>

        <Link to="/">
                <h1>BIOFERTILIZANTES</h1>
            </Link>
       
        <Content>
            {children}
        </Content>
        </LayoutContainer>;
};

export default Layout;