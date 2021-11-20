import React from 'react'
import { FormattedMessage } from "react-intl";
import styled from 'styled-components';
import MethodsInfo from './MethodsInfo';
import SchemaInfo from './SchemaInfo';
import Request from './Request';
import Response from './Response';

const desktopStartWidth = 1000;

// eslint-disable-next-line no-unused-vars
const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

const Allcircuits = {
    method: "GET",
    url: "http://localhost:3000/circuits"
}

const CircuitById = {
    method: "GET",
    url: "http://localhost:3000/circuits/id/618a9a28dffaf9002fc1ca24"
}

const AllDrivers = {
    method: "GET",
    url: "http://localhost:3000/drivers"
}

const DriverById = {
    method: "GET",
    url: "http://localhost:3000/drivers/id/618d3d32948f3b19da8696ab"
}

const FilterDrivers = {
    method: "GET",
    url: "http://localhost:3000/drivers/items",
    qs: "{debut: 2007}"
}

const AllTeams = {
    method: "GET",
    url: "http://localhost:3000/teams"
}

const TeamById = {
    method: "GET",
    url: "http://localhost:3000/teams/id/618d1c2bd38f2b5a312e0f28"
}

const FilterTeams = {
    method: "GET",
    url: "http://localhost:3000/teams/items",
    qs: "{nationality: 'Italian'}"
}

const CircuitsResponse = {
    status: 200,
    message: "OK",
    data: "'circuits': [...]"
}
const DriversResponse = {
    status: 200,
    message: "OK",
    data: "'circuits': [...]"
}
const TeamsResponse = {
    status: 200,
    message: "OK",
    data: "'circuits': [...]"
}
const OneCircuitResponse = {
    status: 200,
    message: "OK",
    data: "'circuit': {...}"
}

const OneDriverResponse = {
    status: 200,
    message: "OK",
    data: "'driver': {...}"
}

const OneTeamResponse = {
    status: 200,
    message: "OK",
    data: "'team': {...}"
}
/* background-color:${props => props.backgroundColor === 'light' ? 'whitesmoke' : '#1f1f27'}; */
const PageContainer = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 1px solid #ccd0d6;
    
    ${mobile} {
        overflow-x: hidden;
    }
    `
/* background-color:${props => props.backgroundColor === 'light' ? 'whitesmoke' : '#1f1f27'}; */
const MenuContainer = styled.div`
padding: 20px;
    width: 20vh;
    height: 150vh;
    position: -webkit-sticky;
    position: sticky;
    top: 20px;
    ${mobile} {
        display: none;
    }
;`

const ContentContainer = styled.div`
    max-width: 60vw;
    margin: 0 auto;
    float: inline-start;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    ${mobile} {
        width:90%;
        padding-inline:0 ;
    }
    `

const MenuUl = styled.ul`
    width: 300px;
    padding-left: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 30px;
    border-right: 1px solid #ccd0d6;
`;

const MenuLi = styled.li`
    margin: 15px;
    box-sizing: border-box;
    display: inline-block;
    list-style-type: none;
    display: flex;
    text-align: left;
    flex-direction: column;
    cursor: pointer;
    font-weight: ${props => props.title === 'true' ? 'bold' : '400'};
    font-size: ${props => props.big === 'true' ? '1.6rem' : '1.1rem'};
`;

const BodyH1 = styled.h3`
    display: block;
    text-align: center;
    font-weight: bolder;
    font-size: 25px ;
    padding-bottom: 30px;
    margin: 0;
    color: #e10600; 
`;
/* color: #000000; */
const MenuA = styled.a`
    font-weight: 600;
    font-weight: ${props => props.title === 'true' ? 'bold' : '400'};
    font-size: ${props => props.big === 'true' ? '1.6rem' : '1.1rem'};
    &:hover {
        color: #e10600;
    }
`;
const BodyP = styled.p`
    font-size: 20px;
    text-align: center;
    margin: 10px;
    `

const DivBodyH1 = styled.div`
    justify-content:space-between;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 0 auto;
`

const ReqResContain = styled.div`
    display: flex;
    width: 100%;
    margin: 0 auto;
    ${mobile} {
        flex-direction: column;
    }
`

const DivBodyComponents = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    ${mobile} {
        flex-direction: column;
    }
`


const DocumentationLeftMenu = () => {
    return (
        <PageContainer backgroundColor="light">

            <MenuContainer backgroundColor="light">
                <MenuUl>
                    <MenuLi big="">
                        <MenuA href="#intro" style={{ "text-decoration": "none" }} title="true" big="true">
                            <FormattedMessage
                                id="docs.leftSideBar.intro"
                                defaultMessage="Introduction" />
                        </MenuA>
                    </MenuLi>
                    {/* <MenuLi>
                        <MenuA href="#auth" style={{ "text-decoration": "none" }} title="false" big="false">
                            <FormattedMessage
                                id="docs.leftSideBar.auth"
                                defaultMessage="Authentication" />
                        </MenuA>
                    </MenuLi> */}
                    <MenuLi>
                        <MenuA href="#rest" style={{ "text-decoration": "none" }} title="false" big="false">
                            <FormattedMessage
                                id="docs.leftSideBar.rest"
                                defaultMessage="Rest API" />
                        </MenuA>
                    </MenuLi>
                   {/*  <MenuLi>
                        <MenuA href="#info" style={{ "text-decoration": "none" }} title="false" big="false">
                            <FormattedMessage
                                id="docs.leftSideBar.info"
                                defaultMessage="Info" />
                        </MenuA>
                    </MenuLi> */}
                    <MenuLi>
                        <MenuA href="#driver" style={{ "text-decoration": "none" }} title="true" big="true">
                            <FormattedMessage
                                id="docs.leftSideBar.drivers"
                                defaultMessage="Driver" />
                        </MenuA>
                    </MenuLi>
                    <MenuLi>
                        <MenuA href="#driverSchema" style={{ "text-decoration": "none" }} title="false" big="false">
                            <FormattedMessage
                                id="docs.leftSideBar.drivers.schema"
                                defaultMessage="Drivers schema" />
                        </MenuA>
                    </MenuLi>
                    <MenuLi>
                        <MenuA href="#getAllDrivers" style={{ "text-decoration": "none" }} title="false" big="false">
                            <FormattedMessage
                                id="docs.leftSideBar.drivers.getAll"
                                defaultMessage="Get all drivers" />
                        </MenuA>
                    </MenuLi>
                    <MenuLi>
                        <MenuA href="#getOneDriver" style={{ "text-decoration": "none" }} title="false" big="false">
                            <FormattedMessage
                                id="docs.leftSideBar.drivers.getSingle"
                                defaultMessage="Get a single driver" />
                        </MenuA>
                    </MenuLi>
                    <MenuLi>
                        <MenuA href="#filterDriver" style={{ "text-decoration": "none" }} title="false" big="false">
                            <FormattedMessage
                                id="docs.leftSideBar.drivers.filter"
                                defaultMessage="Filter drivers" />
                        </MenuA>
                    </MenuLi>

                    <MenuLi>
                        <MenuA href="#team" style={{ "text-decoration": "none" }} title="true" big="true">
                            <FormattedMessage
                                id="docs.leftSideBar.teams"
                                defaultMessage="Team" />
                        </MenuA>
                    </MenuLi>
                    <MenuLi>
                        <MenuA href="#teamSchema" style={{ "text-decoration": "none" }} title="false" big="false">
                            <FormattedMessage
                                id="docs.leftSideBar.teams.schema"
                                defaultMessage="Teams schema" />
                        </MenuA>
                    </MenuLi>
                    <MenuLi>
                        <MenuA href="#getAllTeams" style={{ "text-decoration": "none" }} title="false" big="false">
                            <FormattedMessage
                                id="docs.leftSideBar.teams.getAll"
                                defaultMessage="Get all Teams" />
                        </MenuA>
                    </MenuLi>
                    <MenuLi>
                        <MenuA href="#getOneTeam" style={{ "text-decoration": "none" }} title="false" big="false">
                            <FormattedMessage
                                id="docs.leftSideBar.teams.getSingle"
                                defaultMessage="Get a single team" />
                        </MenuA>
                    </MenuLi>
                    <MenuLi>
                        <MenuA href="#filterTeams" style={{ "text-decoration": "none" }} title="false" big="false">
                            <FormattedMessage
                                id="docs.leftSideBar.teams.filter"
                                defaultMessage="Filter teams" />
                        </MenuA>
                    </MenuLi>

                    <MenuLi>
                        <MenuA href="#circuits" style={{ "text-decoration": "none" }} title="true" big="true">
                            <FormattedMessage
                                id="docs.leftSideBar.circuits"
                                defaultMessage="Circuits" />
                        </MenuA>
                    </MenuLi>
                    <MenuLi>
                        <MenuA href="#circuitSchema" style={{ "text-decoration": "none" }} title="false" big="false">
                            <FormattedMessage
                                id="docs.leftSideBar.circuits.schema"
                                defaultMessage="Circuits schema" />
                        </MenuA>
                    </MenuLi>
                    <MenuLi>
                        <MenuA href="#getAllCircuits" style={{ "text-decoration": "none" }} title="false" big="false">
                            <FormattedMessage
                                id="docs.leftSideBar.circuits.getAll"
                                defaultMessage="Get all Circuits" />
                        </MenuA>
                    </MenuLi>
                    <MenuLi>
                        <MenuA href="#getOneCircuit" style={{ "text-decoration": "none" }} title="false" big="false">
                            <FormattedMessage
                                id="docs.leftSideBar.circuits.getSingle"
                                defaultMessage="Get a single Circuit" />
                        </MenuA>
                    </MenuLi>
                </MenuUl>
            </MenuContainer>
            <ContentContainer>
                <DivBodyH1 id="intro">
                <BodyH1>
                    <FormattedMessage
                        id="docs.leftSideBar.intro"
                        defaultMessage="Introduction" />
                    </BodyH1>
                    <BodyP>
                    <FormattedMessage
                        id="docs.intro"
                        defaultMessage="This documentation will help you get familiar with the resources of the Formula 1's API and show you how to make different queries, so that you can get the most out of it." />
                    </BodyP>
                </DivBodyH1>

                {/* <DivBodyH1 id="auth">
                    <BodyH1>
                        <FormattedMessage
                            id="docs.leftSideBar.auth"
                            defaultMessage="Authentication" />
                    </BodyH1>
                </DivBodyH1> */}

                <DivBodyH1 id="rest">
                    <BodyH1 id="rest">
                        <FormattedMessage
                            id="docs.leftSideBar.rest"
                            defaultMessage="Rest API" />
                    </BodyH1>
                        <BodyP>
                        <FormattedMessage
                            id="docs.rest.base"
                            defaultMessage="Base url: http://localhost:3000/" />
                        </BodyP>
                        <BodyP>
                        <FormattedMessage
                            id="docs.rest.text"
                            defaultMessage="The base url contains information about all available API's resources. All requests are GET requests and go over https. All responses will return data in json." />
                        </BodyP>
                        <BodyP>
                        <FormattedMessage
                            id="docs.rest.text2"
                            defaultMessage="There are currently three available resources:" />
                        </BodyP>
                </DivBodyH1>

                {/* <DivBodyH1 id="info">
                    <BodyH1>
                        <FormattedMessage
                            id="docs.leftSideBar.info"
                            defaultMessage="Info" />
                    </BodyH1>
                </DivBodyH1> */}

                <DivBodyH1 id="driver">
                    <BodyH1>
                        <FormattedMessage
                            id="docs.leftSideBar.drivers"
                            defaultMessage="Driver" />
                    </BodyH1>
                </DivBodyH1>
                <DivBodyH1 id="driverSchema">
                    <BodyH1>
                        <FormattedMessage
                            id="docs.leftSideBar.drivers.schema"
                            defaultMessage="Drivers schema" />
                            </BodyH1>
                        <SchemaInfo opcion="drivers" />
                    
                </DivBodyH1>

                <DivBodyH1 id="getAllDrivers">
                    <BodyH1 >
                    <FormattedMessage
                            id="docs.leftSideBar.drivers.getAll"
                            defaultMessage="Get all drivers" />
                    </BodyH1>
                        <DivBodyComponents>
                            <MethodsInfo schema="drivers" method="all" />
                            <ReqResContain>
                                <Request props={AllDrivers}></Request>
                                <Response props={DriversResponse}></Response>
                            </ReqResContain>
                            </DivBodyComponents>
                </DivBodyH1>

                <DivBodyH1 id="getOneDriver">
                    <BodyH1>
                        <FormattedMessage
                            id="docs.leftSideBar.drivers.getSingle"
                            defaultMessage="Get a single driver" />
                            </BodyH1>
                        <DivBodyComponents>
                            <MethodsInfo schema="drivers" method="id" />
                            <ReqResContain>
                                <Request props={DriverById}></Request>
                                <Response props={OneDriverResponse}></Response>
                            </ReqResContain>
                        </DivBodyComponents>
                    
                </DivBodyH1>

                <DivBodyH1 id="filterDriver">
                    <BodyH1>
                        <FormattedMessage
                            id="docs.leftSideBar.drivers.filter"
                            defaultMessage="Filter drivers" />
                            </BodyH1>
                        <DivBodyComponents>
                            <MethodsInfo schema="drivers" method="filter" />
                            <ReqResContain>
                                <Request props={FilterDrivers}></Request>
                                <Response props={DriversResponse}></Response>
                            </ReqResContain>
                        </DivBodyComponents>
                    
                </DivBodyH1>

                <DivBodyH1 id="team">
                    <BodyH1>
                        <FormattedMessage
                            id="docs.leftSideBar.teams"
                            defaultMessage="Team" />
                    </BodyH1>
                </DivBodyH1>
                <DivBodyH1 id="teamSchema">
                    <BodyH1>
                        <FormattedMessage
                            id="docs.leftSideBar.teams.schema"
                            defaultMessage="Teams schema" />
                            </BodyH1>
                        <SchemaInfo opcion="teams" />
                    
                </DivBodyH1>

                <DivBodyH1 id="getAllTeams">
                    <BodyH1>
                        <FormattedMessage
                            id="docs.leftSideBar.teams.getAll"
                            defaultMessage="Get all teams" />
                            </BodyH1>
                        <DivBodyComponents>
                            <MethodsInfo schema="teams" method="all" />
                            <ReqResContain>
                                <Request props={AllTeams}></Request>
                                <Response props={TeamsResponse}></Response>
                            </ReqResContain>
                        </DivBodyComponents>
                    
                </DivBodyH1>

                <DivBodyH1 id="getOneTeam">
                    <BodyH1>
                        <FormattedMessage
                            id="docs.leftSideBar.teams.getSingle"
                            defaultMessage="Get a single team" />
                            </BodyH1>
                        <DivBodyComponents>
                            <MethodsInfo schema="teams" method="id" />
                            <ReqResContain>
                                <Request props={TeamById}></Request>
                                <Response props={OneTeamResponse}></Response>
                            </ReqResContain>
                        </DivBodyComponents>
                    
                </DivBodyH1>

                <DivBodyH1 id="filterTeams">
                    <BodyH1>
                        <FormattedMessage
                            id="docs.leftSideBar.teams.filter"
                            defaultMessage="Filter teams" />
                            </BodyH1>
                        <DivBodyComponents>
                            <MethodsInfo schema="teams" method="filter" />
                            <ReqResContain>
                                <Request props={FilterTeams}></Request>
                                <Response props={TeamsResponse}></Response>
                            </ReqResContain>
                        </DivBodyComponents>
                    
                </DivBodyH1>

                <DivBodyH1 id="circuits">
                    <BodyH1>
                        <FormattedMessage
                            id="docs.leftSideBar.circuits"
                            defaultMessage="Circuit" />
                    </BodyH1>
                    <BodyH1 id="circuitSchema">
                        <FormattedMessage
                            id="docs.leftSideBar.circuits.schema"
                            defaultMessage="Circuits schema" />
                            </BodyH1>
                        <SchemaInfo />
                    
                </DivBodyH1>

                <DivBodyH1 id="getAllCircuits">
                    <BodyH1>
                        <FormattedMessage
                            id="docs.leftSideBar.circuits.getAll"
                            defaultMessage="Get all circuits" />
                            </BodyH1>
                        <DivBodyComponents>
                            <MethodsInfo schema="circuits" method="all" />
                            <ReqResContain>
                                <Request props={Allcircuits}></Request>
                                <Response props={CircuitsResponse}></Response>
                            </ReqResContain>
                        </DivBodyComponents>
                    
                </DivBodyH1>

                <DivBodyH1 id="getOneCircuit">
                    <BodyH1>
                        <FormattedMessage
                            id="docs.leftSideBar.circuits.getSingle"
                            defaultMessage="Get a single circuit" />
                            </BodyH1>
                        <DivBodyComponents>
                            <MethodsInfo schema="circuits" method="id" />
                            <ReqResContain>
                                <Request props={CircuitById}></Request>
                                <Response props={OneCircuitResponse}></Response>
                            </ReqResContain>
                        </DivBodyComponents>
                    
                </DivBodyH1>

            </ContentContainer>
        </PageContainer>
    )
}

export default DocumentationLeftMenu
