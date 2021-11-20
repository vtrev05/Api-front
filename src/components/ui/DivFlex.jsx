import React from 'react';
import styled from 'styled-components';

const StyleDiv = styled.div`
    display: flex;
    flex-direction: ${props => props.direction === 'row' ? 'row' : 'column'};
    justify-content: center;
    align-items: center;
`;

const DivFlex = ({ children, direction }) => {
    return (
        <StyleDiv direction={direction}>
            {children}
        </StyleDiv>
    )
}

export default DivFlex;
