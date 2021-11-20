import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from "react-intl";

const desktopStartWidth = 500;

// eslint-disable-next-line no-unused-vars
const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

const ContainerHome = styled.div`
    display: flex;
    ${mobile} {
        height: 150px;
	}
    ${desktop} {
        height: 300px;
	}
    text-align: center;
    justify-content: space-around;
    align-items: center;
`;

const Title = styled.h1`
    /* margin: 15px; */
    text-align: center;
    /* z-index: 1; */
    font-size: 4rem;
    color: white;
`;

const HomeImage = styled.img`
    position: absolute;
    object-fit: cover;
    object-position: center center;
    width: 100%;
    ${mobile} {
        height: 40%;
	}
    ${desktop} {
        height: 40%;
	}
    z-index: -1;
    filter: blur(1px);
`;

const BannerHome = () => {
    return (
        <ContainerHome>
            <Title>
                <FormattedMessage
                    id="banner.home"
                    defaultMessage="API F1" />
            </Title>
            <HomeImage src="https://lapagina.com.sv/wp-content/uploads/2021/10/Hamilton-vs-Verstappen.jpg" alt="f1" />
        </ContainerHome>
    )
}

export default BannerHome;
