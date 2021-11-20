import React from 'react';
import { FormattedMessage } from "react-intl";
import styled from 'styled-components';

// background-color:${props => props.backgroundColor === 'light' ? 'whitesmoke' : '#1f1f27'};
const QuestionContainer = styled.div`
    
    margin: 0 auto;
    padding: 0px 1.5rem;
    max-width: 960px;
    min-height: 50vh;`

const QuestionH1 = styled.h1`
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 1.6rem;
    margin-top: 0;
    padding: 25px 0;
    color: ${props => props.color === 'light' ? '#e10600' : 'whitesmoke'};
    `
const QuestionH2 = styled.h2`
    width: 100%;
    text-align: left;
    font-weight: bold;
    font-size: 1.75rem;
    padding: 20px 0;
    text-decoration: underline;
    `

const QuestionContent = styled.p`
    width: 100%;
    text-align: left;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.75;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-bottom: ${props => props.borderBottom === 'true' ? '20px' : '0px'};
`

const QuestionA = styled.a`
    color: ${props => props.color === 'light' ? '#e10600' : 'whitesmoke'} ;
    font-weight: 700;
    font-size: 1.05rem ;
    text-decoration: #1f1f27;
    cursor: pointer;
    `

const Question = () => {
    return (
        <QuestionContainer backgroundColor="light">
            <QuestionH1 color="light">
            <FormattedMessage
                    id="about.title"
                    defaultMessage="Information about the project"/>
            </QuestionH1>
            <QuestionH2 color="light">
            <FormattedMessage
                    id="about.question.what"
                    defaultMessage="What is this?"/>
            </QuestionH2>
            <QuestionContent color="light">
            <FormattedMessage
                    id="about.response.what"
                    defaultMessage="The Formula 1's API is a REST(ish) and GraphQL API based on the Formula 1 competition. You will have access to about lot of drivers, teams and circuits."/>
            </QuestionContent>
            <QuestionH2 color="light">
            <FormattedMessage
                    id="about.question.who"
                    defaultMessage="Who are you?"/>
            </QuestionH2>
            <QuestionContent color="light">
            <FormattedMessage
                    id="about.response.who"
                    defaultMessage="We are Project F1, a group of people who likes to develop things. We are students from Upgrade Hub, which is a tech school based in Madrid, Spain. All of us are Full-Stack developers."/>
            </QuestionContent>
            <QuestionH2 color="light">
            <FormattedMessage
                    id="about.question.why"
                    defaultMessage="Why did you build this?"/>
            </QuestionH2>
            <QuestionContent color="light">
            <FormattedMessage
                    id="about.response.why"
                    defaultMessage="Because we were really interested in the idea of writing an open source project and also because this project has done us the opportunity to improve a lot of developer skills."/>
            </QuestionContent>
            <QuestionH2 color="light">
            <FormattedMessage
                    id="about.question.stuff"
                    defaultMessage="Technical stuff?"/>
            </QuestionH2>
            <QuestionContent color="light">
            <FormattedMessage
                    id="about.response.stuff"
                    defaultMessage="We use Node and MongoDB to serve the API. All the data is formatted in json and the entire project is done with React native, Styled Components and React Intl in order to translate the project."/>
            </QuestionContent>
            <QuestionH2 color="light">
            <FormattedMessage
                    id="about.question.how"
                    defaultMessage="How can I contribute to the project?"/>
            </QuestionH2>
            <QuestionContent color="light">
                <FormattedMessage
                    id="about.response.how"
                    defaultMessage="You can help us to keep the collections alive. Also, you can collab with us here:"/>
            <QuestionA color="light"
                target="_blank"
                href="https://vtrev05.github.io/Api-front/#/collaborate">
                <FormattedMessage
                    id="about.response.how.link"
                    defaultMessage="http://localhost:3000/contribution"/>
            </QuestionA>
            </QuestionContent>
            <QuestionH2 color="light">
            <FormattedMessage
                    id="about.question.copyright"
                    defaultMessage="Copyright?"/>
            </QuestionH2>
            <QuestionContent borderBottom="true" color="light">
            <FormattedMessage
                    id="about.response.copyright"
                    defaultMessage="Formula 1's API is created by student team for academy Upgrade. The data and images are used without claim of ownership and belong to their respective owners."/>
            </QuestionContent>
            
        </QuestionContainer>
    )
}

export default Question;
