import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importando o useNavigate
import Layout from '../../components/Layout';
import Preparo from '../../components/Preparo';

const Home = () => {
    const navigate = useNavigate();  // Inicializando o useNavigate

    // Função que vai ser chamada ao clicar no botão
    const handleRedirect = () => {
        navigate('/');  // Redireciona para a página inicial (Home)
    };

    return (
        <Layout>
            <h1>BIOFERTILIZANTES</h1>
            <p>This is the Home page content.</p>
            {/* Botão que chama a função handleRedirect */}
            <button onClick={handleRedirect}>BIOFERTILIZANTE </button>
        </Layout>
    );
    
};

export default Home;
