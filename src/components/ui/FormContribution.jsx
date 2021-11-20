/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import FormContributionCircuit from "./FormContributionCircuit";
import FormContributionDriver from "./FormContributionDriver";
import FormContributionTeam from "./FormContributionTeam";

// background-color: #15151e;
const FormContributionContainer = styled.div`
  
`;

const FormContributionH1 = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 1.05rem;
  padding: 30px 0;
  font-size: 1.5rem;
  font-weight: 600;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const FormContributionSelect = styled.select`
  margin: 0 auto;
  width: 100px;
  height: 30px;
  display: block;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  color: whitesmoke;
  background-color: #e10600;
  border-radius: 5px;
  `

const FormContribution = () => {
  const [option, setOption] = useState("");

  const handleChange = (e) => {
    setOption({ value: e.target.value });
  };

  return (
    <>
      <FormContributionContainer>
        <FormContributionH1>
          <FormattedMessage
            id="collaborate.title"
            defaultMessage="If you want to contribute to the collections you can do it here:"
          />
        </FormContributionH1>
        <FormContributionSelect options={option} onChange={handleChange}>
          <FormattedMessage
            id="collaborate.select.driver"
            defaultMessage="Driver"
          >
            {(id) => <option value={id}>{id}</option>}
          </FormattedMessage>
          <FormattedMessage id="collaborate.select.team" defaultMessage="Team">
            {(id) => <option value={id}>{id}</option>}
          </FormattedMessage>
          <FormattedMessage
            id="collaborate.select.circuit"
            defaultMessage="Circuit"
          >
            {(id) => <option value={id}>{id}</option>}
          </FormattedMessage>
        </FormContributionSelect>
      </FormContributionContainer>
      <FormContributionDriver state={option}></FormContributionDriver>
      <FormContributionTeam state={option}></FormContributionTeam>
      <FormContributionCircuit state={option}></FormContributionCircuit>
    </>
  );
};

export default FormContribution;
