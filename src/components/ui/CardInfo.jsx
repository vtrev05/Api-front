import React from 'react';
import styled from 'styled-components';
import CardExampleInfo from './CardExampleInfo';
import DivFlex from './DivFlex';

import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const InfoDocStyled = styled.div`
    padding: 20px;
    border: 2px '#e10600' solid;
`;

const TitleStyled = styled.h2`
    color: whitesmoke;
    border: 2px solid whitesmoke;
    padding: 5px 0;
    width: 200px;
    text-align: center;
    font-size: 2.1rem;
    background-color: #15151e;
    border-radius: 8px;
`;

const TextStyled = styled.p`
    padding: 10px 0px;
    font-size: 1.6rem;
    font-weight: 700;
`;

const AncorStyled = styled.a`
    text-decoration: none;
    padding-top: 20px;
    cursor: help;
    font-size: 1.1rem;
    font-weight: 600;
`;

const ArrowIcon = styled.i`
    padding: 0px 5px;
    color: #e10600;
`;

const CardInfo = ({ info, direction }) => {
    return (
        <InfoDocStyled>
            <DivFlex direction={direction}>
                <> 
                    <TitleStyled>
                        <FormattedMessage id={`title.${info.title}`} defaultMessage="Total" />
                    </TitleStyled>
                </>
                <> 
                    <DivFlex direction={"row"}>
                        <TextStyled>
                            <FormattedMessage id="home.total" />: {info.total}
                        </TextStyled>
                    </DivFlex>
                </>
                <> 
                    <AncorStyled href={info.link} target='_blank'>
                        <CardExampleInfo infoExample={info.card}></CardExampleInfo>
                    </AncorStyled>
                </>
                <> 
                    <AncorStyled href={info.linkDoc}>
                        <FormattedMessage id="home.review.docs" />
                        <ArrowIcon>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </ArrowIcon>
                    </AncorStyled>
                </>
            </DivFlex>
        </InfoDocStyled>
    )
};

export default CardInfo;
