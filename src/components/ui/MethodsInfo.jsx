import React from 'react'
import styled from 'styled-components';

const Container=styled.div`
    width: 80%;
    

`;
const ContainerMethod=styled.div`
    background-color:#E5E5E5;
    padding: 20px;
    border-radius: 5px;
    font-size: 20px;
    color: black;
`;
const Method=styled.span`
    font-size: 20px;
    color:#1EB40A;
    font-weight:bold;
`;
const MethodInfo=styled.p`
font-size: 20px;
color: black;
`;
const Filters =styled.p`
font-size: 20px;
color: black;
`;
const FilterUl=styled.ul`
font-size: 20px;
list-style:none;
color: black;
`;
const FilterLi=styled.li`
font-size: 20px;
font-style:italic;
color: black;
`;
const drivers={
    method:"GET",
    all:"http://localhost:4000/drivers/",
    id:"http://localhost:4000/drivers/id/618d3d...",
    filter:"http://localhost:4000/drivers/items?debut=2007"
   
}
const circuits={
    method:"GET",
    all:"http://localhost:4000/circuits/",
    id:"http://localhost:4000/circuits/id/618a9a2...", 
  
}
const teams={
    method:"GET",
    all:"http://localhost:4000/teams/",
    id:"http://localhost:4000/teams/id/618d1c2b...", 
    filter:"http://localhost:4000/teams/items?teamChampionships=2003" 
    
}
const MethodsInfo = (props) => {
    if(props.schema==="drivers"&&props.method==="all"){
        return (
            <>
                <Container>
                    <ContainerMethod>
                        <Method>{drivers.method}   </Method>{drivers.all}
                    </ContainerMethod>
                </Container>
                
            </>
        )
    }else if(props.schema==="drivers"&&props.method==="id"){
        return (
            <>
                <Container>
                    <ContainerMethod>
                        <Method>{drivers.method}   </Method>{drivers.id}
                    </ContainerMethod>
                </Container>
                
            </>
        )
    }else if(props.schema==="drivers"&&props.method==="filter"){
        return (
            <>
                <Container>
                    <ContainerMethod>

                        <MethodInfo><Method>{drivers.method}   </Method>{drivers.filter}</MethodInfo>
                        <Filters>
                            You can filter by the following fields:
                            <FilterUl>
                                <FilterLi>debut</FilterLi>
                                <FilterLi>championsship</FilterLi>
                                <FilterLi>victories</FilterLi>
                                <FilterLi>podium</FilterLi>
                                <FilterLi>...</FilterLi>
                            </FilterUl>
                        </Filters>
                    </ContainerMethod>
                </Container>
                
            </>
        )
    }else if(props.schema==="teams"&&props.method==="all"){
        return (
            <>
                <Container>
                    <ContainerMethod>
                        <Method>{teams.method}   </Method>{teams.all}
                    </ContainerMethod>
                </Container>
                
            </>
        )
    }else if(props.schema==="teams"&&props.method==="id"){
        return (
            <>
                <Container>
                    <ContainerMethod>
                        <Method>{teams.method}</Method> {teams.id}
                    </ContainerMethod>
                </Container>
                
            </>
        )
    }else if(props.schema==="teams"&&props.method==="filter"){
        return (
            <>
                <Container>
                    <ContainerMethod>
                        <MethodInfo><Method>{teams.method}</Method> {teams.filter}</MethodInfo>
                        <Filters>
                            You can filter by the following fields:
                            <FilterUl>
                                <FilterLi>name</FilterLi>
                                <FilterLi>nationality</FilterLi>
                                <FilterLi>location</FilterLi>
                                <FilterLi>engine</FilterLi>
                                <FilterLi>...</FilterLi>
                            </FilterUl>
                        </Filters>
                    </ContainerMethod>
                </Container>
                
            </>
        )
    }else if(props.schema==="circuits"&&props.method==="all"){
        return (
            <>
                <Container>
                    <ContainerMethod>
                        <Method>{circuits.method}</Method> {circuits.all}
                    </ContainerMethod>
                </Container>
                
            </>
        )
    }else if(props.schema==="circuits"&&props.method==="id"){
        return (
            <>
                <Container>
                    <ContainerMethod>
                        <Method>{circuits.method}</Method> {circuits.id}
                    </ContainerMethod>
                </Container>
                
            </>
        )
    }
}

export default MethodsInfo
