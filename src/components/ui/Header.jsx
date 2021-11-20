import React, { useContext } from 'react';
import { ThemeProvider } from "styled-components";
import styled from 'styled-components';
import UseDarkMode from '../../theme/UseDarkMode';
import { lightTheme, darkTheme } from '../../theme/themes';
import Toggle from '../ui/Toggle';
import GlobalStyles from '../../theme/globalStyles';
import { Context } from '../../context/WrapperLang';

const HeaderDiv = styled.div`
padding: 10px;
display: flex;
flex-direction: column;
`;

// background-color:${props => props === 'light' ? 'whitesmoke' : '#1f1f27'};
const ContainerLogo = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 0px auto;
width: 100%;
z-index: 1;
`;

const LogoImage = styled.img`
width: 100px;
height: 100%;
cursor: pointer;
&:hover {
    opacity: 50%;
}
`;

const ContainerUtils = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
align-items: center;
align-content: center;
`;

const Select = styled.select`
    margin-right: 20px;
    width: 70px;
    height: 30px;
    display: block;
    text-align: center;
    font-size: 0.6rem;
    font-weight: bold;
    border-radius: 5px;
    background-color: #1f1f27;
    color: #F5F5F5;
    border: 2px solid #F5F5F5;
`;

// const UserImage = styled.img`
// width: 25px;
// height: 100%;
// margin: 20px;
// cursor: pointer;
// &:hover {
//     opacity: 50%;
// }
// `;

const Header = () => {
    const context = useContext(Context);

    const [theme, themeToggler] = UseDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <HeaderDiv>
                <ContainerLogo backgroundColor='light'>
                    <a href="/">
                        <LogoImage src="https://logodownload.org/wp-content/uploads/2016/11/formula-1-logo-7.png" alt="" />
                    </a>
                    <ContainerUtils>
                        <Select value={context.locale} onChange={context.selectLanguage}>
                            <option value="es-ES">Español</option>
                            <option value="en">English</option>
                        </Select>
                        <Toggle theme={theme} toggleTheme={themeToggler} />
                        {/* <UserImage src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" /> */}
                    </ContainerUtils>
                </ContainerLogo>
            </HeaderDiv>
        </ThemeProvider>
    )
}

export default Header;