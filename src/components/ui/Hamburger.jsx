import React from 'react'
import styled from 'styled-components';

const HamburgerNav = styled.nav`
    `

const Hamburger = () => {
    return (
      <div>
        <div class="hamburger">
          <div class="_layer -top"></div>
          <div class="_layer -mid"></div>
          <div class="_layer -bottom"></div>
        </div>
        <nav class="menuppal">
          <ul>
           {/*  <li>
              <a href="#">Opcion 1</a>
            </li>
            <li>
              <a href="#">Opcion 2</a>
            </li>
            <li>
              <a href="#">Opcion 3</a>
            </li>
            <li>
              <a href="#">Opcion 4</a>
            </li> */}
          </ul>
        </nav>
      </div>
    );
}

export default Hamburger
