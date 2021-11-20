import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import DivFlex from './DivFlex';
import styled from 'styled-components';

const CodeDiv = styled.div`
margin: 15px;
text-align: justify;
width: 200px;
font-size: 20px;
`

const ResTitle = styled.p`
font-size: 20px;
`

const Response = ({props}) => {
    return (
        <DivFlex direction={"column"}>
             <ResTitle>Response</ResTitle>
             <CodeDiv>
            <SyntaxHighlighter language="javascript" style={atomOneDark}>
                {`
    {
     "status": ${props.status},
     "message": ${props.message},
     "data": {
        ${props.data}    
     }}
     `
                }
            </SyntaxHighlighter>
            </CodeDiv>
        </DivFlex>
    )
}

export default Response
