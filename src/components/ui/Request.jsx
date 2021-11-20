import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import DivFlex from './DivFlex';
import styled from 'styled-components';

const desktopStartWidth = 576;

// eslint-disable-next-line no-unused-vars
const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

const CodeDiv = styled.div`
margin: 15px;
text-align: justify;
width: 550px;
font-size: 20px;
${mobile} {
    width: 350px;
}
`

const ReqTitle = styled.p`
font-size: 20px;
width: 100%;
margin: 0 auto;
`

const Request = ({props}) => {
    return (
        <DivFlex direction={"column"}>
        <ReqTitle>Request</ReqTitle>
        <CodeDiv>
            <SyntaxHighlighter language="javascript" style={atomOneDark}>
                {`  
    var request = require("request");
            
    var options = {
        method: "${props.method}",
        url: "${props.url}",
        ${props.qs ? `qs: ${props.qs}` : ''}
        };
                    
        request(options, function (error, response, body) {    
            if (error) throw new Error(error);
            console.log(body);
    });
    `}

            </SyntaxHighlighter>
        </CodeDiv>
        </DivFlex>
    )
}

export default Request
