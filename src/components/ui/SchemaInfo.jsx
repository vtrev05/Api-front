import React from 'react'
import styled from "styled-components"

const Container=styled.div`
`;

const ContainerSchema=styled.div`
    background-color:#E5E5E5;
    
    border-radius:7px;
   
`;
const InfoSchema=styled.p`
  
`;
const TableSchema=styled.table`
font-size: 18px;
color: black;

`;
const TRow=styled.tr`

`;
const Thead=styled.th`
padding: 20px;
font-weight: bolder;
`;
const TData=styled.td`
padding: 10px;`;
//schemas
const drivers={
    headers:["Key","Type","Description"],
    data:[
        {key:"_id",type:"Number",description:"The id of the driver."},
        {key:"name",type:"String",description:"The name of the driver."},
        {key:"nationality",type:"String",description:"The nationality of the driver."},
        {key:"birthDate",type:"String",description:"The birthDate of the driver."},
        {key:"height",type:"Number",description:"The height of the driver in cm ."},
        {key:"weight",type:"Number",description:"The weight of the driver in Kg."},
        {key:"team",type:"Object",description:"The team of the driver."},
        {key:"teamHistory",type:"String",description:"The team history of the driver."},
        {key:"championship",type:"String",description:"The championship of the driver."},
        {key:"victories",type:"Number",description:"The victories of the driver."},
        {key:"podium",type:"Number",description:"The podiums of the driver."},
        {key:"debut",type:"String",description:"The debut (year) of the driver ."},
        {key:"image",type:"String",description:"The image of the driver."},
        {key:"officialSite",type:"String",description:"The site web of the driver."}
    ]
}
const teams={
    headers:["Key","Type","Description"],
    data:[
        {key:"_id",type:"Number",description:"The id of the team."},
        {key:"name",type:"String",description:"The name of the team."},
        {key:"nationality",type:"String",description:"The nationality of the team."},
        {key:"logo",type:"String",description:"The logo of the team."},
        {key:"creation",type:"String",description:"the year the team was created. "},
        {key:"debut",type:"String",description:"the year and country where the team debuted."},
        {key:"location",type:"String",description:"The location of the team."},
        {key:"website",type:"String",description:"The web site of the team."},
        {key:"drivers",type:"Object",description:"The team drivers."},
        {key:"active",type:"Boolean",description:"state of team."},
        {key:"chasis",type:"String",description:"equipment chassis type."},
        {key:"engine",type:"String",description:"."},
        {key:"Championships",type:"String[]",description:"The image of the driver."},
        {key:"officialSite",type:"String[]",description:"The site web of the driver."}
    ]
}
const circuits={
    headers:["Key","Type","Description"],
    data:[
        {key:"_id",type:"Number",description:"The id of the circuit."},
        {key:"name",type:"String",description:"The name of the circuit."},
        {key:"nationality",type:"String",description:"The nationality of the circuit."},
        {key:"length",type:"String",description:"The distance of the circuit in km."},
        {key:"corners",type:"Number",description:"The curves of the circuit."},
        {key:"fastLap",type:"Object",description:"Shows the driver, the time, the team and the year of the fast lap of the circuit."},
        {key:"creation",type:"String",description:"the year the circuit was created."},
        {key:"capacity",type:"Number",description:"the capacity of spectators in the circuit."},
        {key:"image",type:"String",description:"The image of the circuit."},
        {key:"flat",type:"String",description:"The flat of the circuit."},
    ]
}
const SchemaInfo = (props) => {
    if(props.opcion==="drivers"){
        return (
            <>
                <Container>
                    <ContainerSchema>
                        <InfoSchema>
                            <TableSchema>
                                <TRow>
                                    {drivers.headers.map(e=><Thead>{e}</Thead>)}
                                </TRow>
                                {drivers.data.map(e=><TRow><TData>{e.key}</TData><TData>{e.type}</TData><TData>{e.description}</TData></TRow>)}
                            </TableSchema>
                        </InfoSchema>
                    </ContainerSchema>
                </Container>
            </>
        )
    }else if(props.opcion==="teams"){
        return (
            <>
                <Container>
                    <ContainerSchema>
                        <InfoSchema>
                            <TableSchema>
                                <TRow>
                                    {teams.headers.map(e=><Thead>{e}</Thead>)}
                                </TRow>
                                {teams.data.map(e=><TRow><TData>{e.key}</TData><TData>{e.type}</TData><TData>{e.description}</TData></TRow>)}
                            </TableSchema>
                        </InfoSchema>
                    </ContainerSchema>
                </Container>
            </>
        )
    }else{
        return (
            <>
                <Container>
                    <ContainerSchema>
                        <InfoSchema>
                            <TableSchema>
                                <TRow>
                                    {circuits.headers.map(e=><Thead>{e}</Thead>)}
                                </TRow>
                                {circuits.data.map(e=><TRow><TData>{e.key}</TData><TData>{e.type}</TData><TData>{e.description}</TData></TRow>)}
                            </TableSchema>
                        </InfoSchema>
                    </ContainerSchema>
                </Container>
            </>
        )
    }
} 
export default SchemaInfo;
