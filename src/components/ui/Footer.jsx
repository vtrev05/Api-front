import React from 'react';
import { FormattedMessage } from "react-intl";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCreativeCommons } from '@fortawesome/free-brands-svg-icons';

const desktopStartWidth = 576;

// eslint-disable-next-line no-unused-vars
const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

/* background-color:${props => props.backgroundColor === 'light' ? 'whitesmoke' : '#1f1f27'}; */
const FooterContainer = styled.div`
    
`;

const FooterUl = styled.ul`
    display: flex;
    box-sizing: border-box;
    padding: 10px;
    border-top: 1px solid #1f1f27;
    ${mobile} {
		flex-wrap: wrap
	}
`;

const FooterLi = styled.li`
    box-sizing: border-box;
    padding: 0;
    margin: 0 auto;
    list-style-type: none;
    display: flex;
`;

// color: ${props => props.color === 'light' ? '#1f1f27' : 'whitesmoke'} ;
const FooterA = styled.a`
    font-weight: 600;
    padding: 10px;
    font-size: ${props => props.copyright === 'true' ? '1rem' : '0.75rem'} ;
    text-decoration: none;
    cursor: pointer;
`;

const FooterRepo = styled.a`
    font-weight: bold;
    font-size: ${props => props.copyright === 'true' ? '1rem' : '0.75rem'} ;
    display: block;
    text-align: center;
    margin: 0 auto;
    text-decoration: none;` 

const FooterH4 = styled.h4`
    width: 100%;
    text-align: center;
    font-size: 0.75rem;
    font-weight: bold;
    padding: 10px 0px;
    margin: 0;
`;

// color: ${props => props.iconColor === 'light' ? '#1f1f27' : 'whitesmoke'};
const FooterIcon = styled.i`
    font-size: ${props => props.repo === 'true' ? '1rem' : '0.75rem'};
    padding-right: 8px;
`;

const Footer = () => {
    return (
        <FooterContainer backgroundColor="light">
            <FooterUl>
                <FooterLi>
                    <FooterA color="light" target="_blank" href="https://github.com/vtrev05">
                        <FooterIcon iconColor="light"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></FooterIcon>
                        <FormattedMessage id="footer.social.network.victor" defaultMessage="VtreV" />
                    </FooterA>
                </FooterLi>
                <FooterLi>
                    <FooterA color="light" target="_blank" href="https://github.com/javike19">
                        <FooterIcon iconColor="light"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></FooterIcon>
                        <FormattedMessage id="footer.social.network.javier" defaultMessage="Javi" />
                    </FooterA>
                </FooterLi>
                <FooterLi>
                    <FooterA color="light" target="_blank" href="https://github.com/juan1497">
                        <FooterIcon iconColor="light"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></FooterIcon>
                        <FormattedMessage id="footer.social.network.juan" defaultMessage="Juan" />
                    </FooterA>
                </FooterLi>
                <FooterLi>
                    <FooterA color="light" target="_blank" href="https://github.com/tarevalosan">
                        <FooterIcon iconColor="light"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></FooterIcon>
                        <FormattedMessage id="footer.social.network.tamara" defaultMessage="Tamara" />
                    </FooterA>
                </FooterLi>
            </FooterUl>
            <FooterRepo color="light" target="_blank" href="https://github.com/tarevalosan/frontend-api-f1">
                <FormattedMessage id="footer.social.network.repo" defaultMessage="Repo" />
                <FooterIcon repo="true" iconColor="light"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></FooterIcon>
            </FooterRepo>
            <FooterH4 copyright="true" color="light" target="_blank" href="#">
                <FooterIcon iconColor="light"><FontAwesomeIcon icon={faCreativeCommons}></FontAwesomeIcon></FooterIcon>
                <FormattedMessage id="footer.copyright" defaultMessage="Copyright" />
            </FooterH4>
        </FooterContainer>
    )
}

export default Footer;
