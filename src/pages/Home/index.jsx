import React from 'react';
import { Link, useNavigate } from 'react-router-dom';  // Importando o useNavigate
import Layout from '../../components/Layout';
import Preparo from '../../components/Preparo';
import ModoDePreparo from '../../components/Preparo';

const Home = () => {
    const navigate = useNavigate();  // Inicializando o useNavigate

    // Função que vai ser chamada ao clicar no botão
    const handleRedirect = () => {
        navigate('/');  // Redireciona para a página inicial (Home)
    };

    return (
        <Layout>
            
           <ModoDePreparo />
           
        </Layout>
    );
    
};

export default Home;
