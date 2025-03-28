import styled from 'styled-components';
import bg from '../../assets/images/bg.jpg';

export const LayoutContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url('${bg}');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width: 768px) {
        background-size: contain;
    }
`;