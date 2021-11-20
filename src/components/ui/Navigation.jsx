import React, {useState} from 'react';
import styled from 'styled-components';
import { FormattedMessage } from "react-intl";
import { Link, Routes, Route, BrowserRouter as Router, HashRouter } from "react-router-dom";
import Home from "../../pages/Home";
import Documentation from "../../pages/Documentation";
import Contact from "../../pages/Contact";
import Contribution from "../../pages/Contribution";
import About from "../../pages/About";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const desktopStartWidth = 660;

// eslint-disable-next-line no-unused-vars
const desktop = `@media (min-width: ${desktopStartWidth}px)`;
// eslint-disable-next-line no-unused-vars
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

const Nav = styled.nav`
    /* margin-bottom: 40px; */
    padding: 20px 0px;
`;

const Navul = styled.ul`
    list-style:none;
    color: black;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding-inline-start: 0px;
    ${mobile} {
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
        max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
	}
   
`;

const Navli = styled.li`
    text-align:center;
    text-transform: capitalize;
    ${mobile} {
        padding: 10px;
        border: whitesmoke;
    }
`;

const NavItem = styled.span`
border: none;
font-size: 13px;
line-height: 1.5;
text-transform: uppercase;
font-weight: bolder;
color: white;
background-color: #e10600;
border-radius: 5px;
padding: 12px;
cursor: pointer;
border: 3px solid #e10600;
&&:hover{
    transition:.5s;
    background-color: white;
    color: #e10600;
}
${mobile} {
    border: 0px solid #e10600;
    border-radius: 5px;
    background-color: transparent;
    color: #e10600;
    font-size: 1.25rem;
}
`;

const CheckBtn = styled.i`
display: none;
margin: 10px;
padding-bottom: 40px;
font-size: 40px;
cursor: pointer;
position: -webkit-sticky;
    position: sticky;
    top: 20px;
:hover{
        transition: 0.2s;
        color: red;
    }
${mobile} {
    display: flex;
    
}
`




const Navigation = () => {
const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <HashRouter>
            <Nav>
            <CheckBtn onClick={() =>
            setIsOpen(!isOpen)
            }><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></CheckBtn>
                <Navul isOpen={isOpen}>
                    <Navli>
                        <Link to="/contact" style={{ "text-decoration": "none" }}>
                            <NavItem>
                                <FormattedMessage id="nav.contact" defaultMessage="Contact"></FormattedMessage>
                            </NavItem>
                        </Link>
                    </Navli>
                    <Navli>
                        <Link to="/collaborate" style={{ "text-decoration": "none" }}>
                            <NavItem>
                                <FormattedMessage id="nav.collaborate" defaultMessage="Collaborate"></FormattedMessage>
                            </NavItem>
                        </Link>
                    </Navli>
                    <Navli>

                        <Link to="/documentation" style={{ "text-decoration": "none" }}>
                            <NavItem>
                                <FormattedMessage id="nav.documentation" defaultMessage="Documentation"></FormattedMessage>
                            </NavItem>
                        </Link>
                    </Navli>
                    <Navli>
                        <Link to="/about" style={{ "text-decoration": "none" }}>
                            <NavItem>
                                <FormattedMessage id="nav.about" defaultMessage="About"></FormattedMessage>
                            </NavItem>
                        </Link>
                    </Navli>

                </Navul>
            </Nav>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/collaborate" element={<Contribution />} />
                <Route path="/documentation" element={<Documentation />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </HashRouter>
        </>
    )
}

export default Navigation;