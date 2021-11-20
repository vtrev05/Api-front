import React, { useState, useEffect } from "react";
import DivFlex from './ui/DivFlex';
import CardInfo from './ui/CardInfo';
import axios from "axios";
import styled from "styled-components";
import { URL_BASE } from '../utils/const';

const Div = styled.div`
    width: 100%;
    height: 100%;
    padding: 30px 0px;
    overflow: hidden;
`;

let direction = "column";

let infoDrivers = {
    title: 'drivers',
    total: 0,
    card: {},
    link: '',
    linkDoc: ''
};
let infoTeams = {
    title: 'teams',
    total: 0,
    card: {},
    link: '',
    linkDoc: ''
};
let infoCircuits = {
    title: 'circuits',
    total: 0,
    card: {},
    link: '',
    linkDoc: ''
};

const CardsExample = () => {

    const [width, setWidth] = useState(0);

    useEffect(() => {
        const updateWidth = () => {
            const width = document.body.clientWidth;
            setWidth(width);
            width > 1000 ? direction = 'row' : direction = 'column';
        };
        updateWidth();

        window.addEventListener("resize", updateWidth);

        return () => {
            window.removeEventListener("resize", updateWidth);
        };
    });

    const ITEM_URL_DRIVER = "/drivers";
    const ITEM_URL_TEAM = "/teams";
    const ITEM_URL_CIRCUIT = "/circuits";

    const [error, setError] = useState(null);
    const [isLoadedDriver, setIsLoadedDriver] = useState(false);
    const [isLoadedTeam, setIsLoadedTeam] = useState(false);
    const [isLoadedCircuit, setIsLoadedCircuit] = useState(false);

    useEffect(() => {
        axios(URL_BASE + ITEM_URL_DRIVER).then(
            (res) => {
                infoDrivers.total = res.data.data.drivers.length;
                const driver = res.data.data.drivers.sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, 1);
                infoDrivers.link = `${URL_BASE}${ITEM_URL_DRIVER}/id/${driver[0]._id}`;
                infoDrivers.linkDoc = `${URL_BASE}/documentation#drive`;
                infoDrivers.card = driver[0];
                setIsLoadedDriver(true);
            },
            (error) => {
                setIsLoadedDriver(true);
                setError(error);
            }
        );
        axios(URL_BASE + ITEM_URL_TEAM).then(
            (res) => {
                infoTeams.total = res.data.data.teams.length;
                const team = res.data.data.teams.sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, 1);
                infoTeams.link = `${URL_BASE}${ITEM_URL_TEAM}/id/${team[0]._id}`;
                infoDrivers.linkDoc = `${URL_BASE}/documentation#team`;
                infoTeams.card = team[0];
                setIsLoadedTeam(true);
            },
            (error) => {
                setIsLoadedTeam(true);
                setError(error);
            }
        );
        axios(URL_BASE + ITEM_URL_CIRCUIT).then(
            (res) => {
                infoCircuits.total = res.data.data.circuits.length;
                const circuit = res.data.data.circuits.sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, 1);
                infoCircuits.link = `${URL_BASE}${ITEM_URL_CIRCUIT}/id/${circuit[0]._id}`;
                infoDrivers.linkDoc = `${URL_BASE}/documentation#circuit`;
                infoCircuits.card = circuit[0];
                setIsLoadedCircuit(true);
            },
            (error) => {
                setIsLoadedCircuit(true);
                setError(error);
            }
        );
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoadedDriver && !isLoadedTeam && !isLoadedCircuit) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                <Div>
                    <DivFlex direction={direction}>
                        <CardInfo info={infoDrivers}></CardInfo>
                        <CardInfo info={infoTeams}></CardInfo>
                        <CardInfo info={infoCircuits}></CardInfo>
                    </DivFlex>
                </Div>
            </>
        );
    }
}

export default CardsExample;