import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from "react-intl";

const CardStyled = styled.div`
    font-size: 1rem;
    border-style: solid;
    border-radius: 5px;
    width: 100%;
    height: 400px;
    background-color: #15151e;
    padding: 30px 10px;
`;

const DivImg = styled.div` 
    width: 350px;
    height: 200px;
    display: flex;
    align-items: center;
    text-align: center;
    overflow: hidden;
`;

const Div = styled.div`

`;

const ImgStyled = styled.img`
    width: 100%;
    background-color: #fff;
    border-radius: 5px;
    object-fit: cover;
    object-position: center center;
`;

const TextStyled = styled.p`
    padding: 10px;
    margin: 10px;
    text-align: center;
    color: whitesmoke;
    font-weight: 600;
    font-size: 1rem;
    display: block;
    padding: 3px 10px;
    border: #e10600 5px double;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

const CardExampleInfo = ({ infoExample }) => {
    return (
        <CardStyled>
            <DivImg>
                <ImgStyled src={infoExample.image ? infoExample.image : infoExample.logo} alt={infoExample.name} href={infoExample.link}></ImgStyled>
            </DivImg>
            <Div>
                {infoExample.birthDate && (
                    <> 
                        <TextStyled>{infoExample.name}</TextStyled>
                        <TextStyled>
                            <FormattedMessage id="form.debut" defaultMessage="Debut" /> : {infoExample.debut}
                        </TextStyled>
                        <TextStyled>
                            <FormattedMessage id="form.nationality" defaultMessage="Nationality" /> :  {infoExample.nationality}
                        </TextStyled>
                    </>
                )}
                {infoExample.active && (
                    <>
                        <TextStyled>{infoExample.name}</TextStyled>
                        <TextStyled>
                            <FormattedMessage id="form.creation" defaultMessage="Creation" /> : {infoExample.creation}
                        </TextStyled>
                        <TextStyled>
                            <FormattedMessage id="form.team.championships" defaultMessage="Team Championships" /> : {infoExample.teamChampionships.length}
                        </TextStyled>
                    </>
                )}
                {infoExample.fastLap && (
                    <>
                        <TextStyled>{infoExample.name}</TextStyled>
                        <TextStyled>
                            <FormattedMessage id="form.creation" defaultMessage="Creation" /> : {infoExample.creation}
                        </TextStyled>
                        <TextStyled>
                            <FormattedMessage id="form.nationality" defaultMessage="Nationality" /> : {infoExample.nationality}
                        </TextStyled>
                    </>
                )}
            </Div>
        </CardStyled>
    )
};

export default CardExampleInfo;
