import React from 'react';
import Header from './components/ui/Header';
import Navigation from './components/ui/Navigation';
import Footer from './components/ui/Footer';
import styled from 'styled-components';

const Body = styled.body`
    margin: 0;
    padding: 0;
    @import url("https://candyfonts.com/wp-data/2018/10/26/11543/Formula1-Regular_web_0.ttf");
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'formula1-display-regular';
    transition: all 0.50s linear;
    a, i {
      color: ${({ theme }) => theme.text}; 
    }`

function App() {
  return (
    <Body>
        <Header></Header>
        <Navigation></Navigation>
        <Footer></Footer>
    </Body>
  );
}

export default App;
