import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { useFormik } from "formik";
import axios from "axios";
import { useState } from 'react';

const desktopStartWidth = 576;

// eslint-disable-next-line no-unused-vars
const desktop = `@media (min-width: ${desktopStartWidth}px)`;
// eslint-disable-next-line no-unused-vars
const mobile = `@media (max-width: ${desktopStartWidth}px)`;

// background-color: #15151e;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  display: ${(props) => (props.state === "Circuit" ? "block" : "none")};
`;
const ContactTitle = styled.p`
padding-bottom: 20px;
font-size: 20px ;
`
const Label = styled.label`

  padding: 10px 0 ;
  display: ${(props) => (props.validations === "true" ? "block" : "inline")};
  font-weight: 600;
  font-size: ${props => props.FastLapSize === 'true' ? '1.35rem' : '1rem'};
  ${desktop} {
  width: 60vw;
	}
`;

const FormContain = styled.form`
display: flex;
flex-direction: column;
text-align: center;
${desktop} {
  flex-direction: row;
	flex-wrap: wrap;
	}
`

const FormContributionH1 = styled.h3`
  width: 100%;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  padding: 20px 0;
  margin: 0;
  color: #e10600;
`;

const ButtonForm = styled.button`
border: none;
font-size: 13px;
line-height: 15px;
text-transform: uppercase;
font-weight: bolder;
color: white;
background-color: #e10600;
border-radius: 5px;
margin: 25px auto 30px;
width: 150px;
align-self: center;
padding: 15px;
cursor: pointer;
border: 3px solid #e10600;
&&:hover{
    transition:.5s;
    background-color: white;
    color: #e10600;
}
${desktop} {
  width: 30vw;

	}
`

const InputContain = styled.input`
margin-bottom: 10px;
max-width: 300px;
align-self: center;
color: #15151e;
font-size: 1rem;
border-radius: 5px;
`

const FormContributionCircuit = (state) => {

  const [messageSent, setMessageSent] = useState("");

  /* const validate = (values) => {
    const errors = {};
    if (!values.userEmail) {
      errors.userEmail = "Required";
    } else if (values.userEmail.length < 7) {
      errors.userEmail = "Invalid email";
    }
    return errors;
  } */

  let objectExample = {
        "name": "",
        "email": "",
        "team": {},
        "circuit": {},
        "driver": {}
      }

  const formikCircuits = useFormik({
    initialValues: {
      circuit: {
        name: "",
        nationality: "",
        length: "",
        corners: "",
        fastLap: {
          driver: "",
          time: "",
          team: "",
          year: ""
        },
        creation: "",
        capacity: "",
        image: "",
        flat: "",
      },
      userName: "",
      userEmail: ""
    },/* 
    validate, */
    onSubmit: (formikCircuits) => {
      setMessageSent(<FormattedMessage
        id="contact.sent"
        defaultMessage="sent message" />);
      objectExample.name = formikCircuits.userName
      objectExample.email = formikCircuits.userEmail
      objectExample.circuit = formikCircuits.circuit
      handleSubmit(objectExample);
    },
  });

  const handleSubmit = async (e) => {
    console.log(e)
    const response = await axios.post(`http://localhost:4000/collaboration`,
      objectExample
    );
    console.log(response)
  }


  return (
    <FormContainer state={state.state.value}>
      <FormContain onSubmit={formikCircuits.handleSubmit}>
        <Label htmlFor="circuit.name">
          <FormattedMessage id="form.name" defaultMessage="Name" />
        </Label>
        <InputContain
          onChange={formikCircuits.handleChange}
          value={formikCircuits.values.circuit.name}
          id="circuit.name"
          name="circuit.name"
        />
        <Label htmlFor="circuit.nationality">
          <FormattedMessage
            id="form.nationality"
            defaultMessage="Nationality"
          />
        </Label>
        <InputContain
          onChange={formikCircuits.handleChange}
          value={formikCircuits.values.circuit.nationality}
          id="circuit.nationality"
          name="circuit.nationality"
        />
        <Label htmlFor="circuit.length">
          <FormattedMessage id="form.length" defaultMessage="Length" />
        </Label>
        <InputContain
          onChange={formikCircuits.handleChange}
          value={formikCircuits.values.circuit.length}
          id="circuit.length"
          name="circuit.length"
        />
        <Label htmlFor="circuit.corners">
          <FormattedMessage id="form.corners" defaultMessage="Corners" />
        </Label>
        <InputContain
          onChange={formikCircuits.handleChange}
          value={formikCircuits.values.circuit.corners}
          id="circuit.corners"
          name="circuit.corners"
        />
        <FormContributionH1 FastLap="true" FastLapSize="true" htmlFor="circuit.fastLap">
          <FormattedMessage id="form.fastLap" defaultMessage="FastLap" />
        </FormContributionH1>
        <Label htmlFor="circuit.fastLap.driver">
          <FormattedMessage id="form.fastLap.driver" defaultMessage="FastLap Driver" />
        </Label>
        <InputContain
          onChange={formikCircuits.handleChange}
          value={formikCircuits.values.circuit.fastLap.driver}
          id="circuit.fastLap.driver"
          name="circuit.fastLap.driver"
        />
        <Label htmlFor="circuit.fastLap.time">
          <FormattedMessage id="form.fastLap.time" defaultMessage="FastLap Time" />
        </Label>
        <InputContain
          onChange={formikCircuits.handleChange}
          value={formikCircuits.values.circuit.fastLap.time}
          id="circuit.fastLap.time"
          name="circuit.fastLap.time"
        />
        <Label htmlFor="circuit.fastLap.team">
          <FormattedMessage id="form.fastLap.team" defaultMessage="FastLap Team" />
        </Label>
        <InputContain
          onChange={formikCircuits.handleChange}
          value={formikCircuits.values.circuit.fastLap.team}
          id="circuit.fastLap.team"
          name="circuit.fastLap.team"
        />
        <Label htmlFor="circuit.fastLap.year">
          <FormattedMessage id="form.fastLap.year" defaultMessage="FastLap year" />
        </Label>
        <InputContain
          onChange={formikCircuits.handleChange}
          value={formikCircuits.values.circuit.fastLap.year}
          id="circuit.fastLap.year"
          name="circuit.fastLap.year"
        />
        <Label htmlFor="circuit.creation">
          <FormattedMessage id="form.creation" defaultMessage="Creation" />
        </Label>
        <InputContain
          onChange={formikCircuits.handleChange}
          value={formikCircuits.values.circuit.creation}
          id="circuit.creation"
          name="circuit.creation"
        />
        <Label htmlFor="circuit.capacity">
          <FormattedMessage id="form.capacity" defaultMessage="Capacity" />
        </Label>
        <InputContain
          onChange={formikCircuits.handleChange}
          value={formikCircuits.values.circuit.capacity}
          id="circuit.capacity"
          name="circuit.capacity"
        />
        <Label htmlFor="circuit.image">
          <FormattedMessage id="form.image" defaultMessage="Image" />
        </Label>
        <InputContain
          onChange={formikCircuits.handleChange}
          value={formikCircuits.values.circuit.image}
          id="circuit.image"
          name="circuit.image"
        />
        <Label htmlFor="circuit.flat">
          <FormattedMessage id="form.flat" defaultMessage="Flat" />
        </Label>
        <InputContain
          onChange={formikCircuits.handleChange}
          value={formikCircuits.values.circuit.flat}
          id="circuit.flat"
          name="circuit.flat"
        />
        <FormContributionH1>
          <FormattedMessage
            id="collaborate.select.userInfo"
            defaultMessage="Type your personal info"
          />
        </FormContributionH1>
        <Label htmlFor="userName">
          <FormattedMessage
            id="contact.name"
            defaultMessage="Name"
          />
        </Label>
        <InputContain
          onChange={formikCircuits.handleChange}
          value={formikCircuits.values.userName}
          id="userName"
          name="userName"
        />
        <Label htmlFor="userEmail">
          <FormattedMessage
            id="contact.email"
            defaultMessage="Email"
          />
        </Label>
        <InputContain
          onChange={formikCircuits.handleChange}
          onBlur={formikCircuits.handleBlur}
          value={formikCircuits.values.userEmail}
          id="userEmail"
          name="userEmail"
        />
        {/* {formikCircuits.touched.userEmail && formikCircuits.errors.userEmail ? (
          <div className="error">{formikCircuits.errors.userEmail}</div>
        ) : null} */}
        <ButtonForm type="submit">
          <FormattedMessage id="button.enviar" defaultMessage="Send" />
        </ButtonForm>
        <ContactTitle>{messageSent}</ContactTitle>
      </FormContain>
    </FormContainer>
  );
};

export default FormContributionCircuit;
