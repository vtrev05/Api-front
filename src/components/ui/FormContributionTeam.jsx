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
  display: ${(props) => (props.state === "Team" ? "block" : "none")};
`;
const ContactTitle = styled.p`
color: white;
padding-bottom: 20px;
font-size: 20px ;
`
const Label = styled.label`
  padding: 10px 0 ;
  display: ${(props) => (props.validations === "true" ? "block" : "inline")};
  font-weight: 600;
  font-size: ${props => props.FastLapSize === 'true' ? '1.35rem' : '1.15rem'};
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

const FormContributionTeam = (state) => {

  const [messageSent, setMessageSent] = useState("");

 /*  const validate = (values) => {
    const errors = {};

    if (!values.userEmail) {
      errors.userEmail = "Required";
    } else if (values.userEmail.length < 4) {
      errors.userEmail = "Must be 5 characters or more";
    }
    return errors;
  } */

  let objectModel = {
    "name": "",
    "email": "",
    "team": {},
    "circuit": {},
    "driver": {}
  }

  const formikTeams = useFormik({
    initialValues: {
      team: {
        name: "",
        nationality: "",
        logo: "",
        creation: "",
        debut: "",
        location: "",
        website: "",
        drivers: [""],
        active: "",
        chasis: "",
        engine: "",
        driversChampionships: [""],
        teamChampionships: [""]
      },
      userName: "",
      userEmail: ""
    },/* 
    validate, */
    onSubmit: (formikTeams) => {
      setMessageSent(<FormattedMessage
        id="contact.sent"
        defaultMessage="sent message" />);
      objectModel.name = formikTeams.userName
      objectModel.email = formikTeams.userEmail
      objectModel.team = formikTeams.team
      handleSubmit(objectModel);
    },
  });

  const handleSubmit = async (e) => {
    console.log(e)
    const response = await axios.post(`https://formula1s.herokuapp.com/collaboration`,
    objectModel
    );
    console.log(response)
  }

  return (
    <FormContainer state={state.state.value}>
      <FormContain onSubmit={formikTeams.handleSubmit}>
        <Label htmlFor="team.name">
          <FormattedMessage id="form.name" defaultMessage="Name" />
        </Label>
        <InputContain
          onChange={formikTeams.handleChange}
          value={formikTeams.values.team.name}
          id="team.name"
          name="team.name"
        />
        <Label htmlFor="team.nationality">
          <FormattedMessage
            id="form.nationality"
            defaultMessage="Nationality"
          />
        </Label>
        <InputContain
          onChange={formikTeams.handleChange}
          value={formikTeams.values.team.nationality}
          id="team.nationality"
          name="team.nationality"
        />
        <Label htmlFor="team.logo">
          <FormattedMessage id="form.logo" defaultMessage="Logo" />
        </Label>
        <InputContain
          onChange={formikTeams.handleChange}
          value={formikTeams.values.team.logo}
          id="team.logo"
          name="team.logo"
        />
        <Label htmlFor="team.creation">
          <FormattedMessage id="form.creation" defaultMessage="Creation" />
        </Label>
        <InputContain
          onChange={formikTeams.handleChange}
          value={formikTeams.values.team.creation}
          id="team.creation"
          name="team.creation"
        />
        <Label htmlFor="team.debut">
          <FormattedMessage id="form.debut" defaultMessage="Debut" />
        </Label>
        <InputContain
          onChange={formikTeams.handleChange}
          value={formikTeams.values.team.debut}
          id="team.debut"
          name="team.debut"
        />
        <Label htmlFor="team.location">
          <FormattedMessage id="form.location" defaultMessage="Location" />
        </Label>
        <InputContain
          onChange={formikTeams.handleChange}
          value={formikTeams.values.team.location}
          id="team.location"
          name="team.location"
        />
        <Label htmlFor="team.website">
          <FormattedMessage id="form.website" defaultMessage="Website" />
        </Label>
        <InputContain
          onChange={formikTeams.handleChange}
          value={formikTeams.values.team.website}
          id="team.website"
          name="team.website"
        />
        <Label htmlFor="team.drivers">
          <FormattedMessage id="form.drivers" defaultMessage="Drivers" />
        </Label>
        <InputContain
          onChange={formikTeams.handleChange}
          value={formikTeams.values.team.drivers}
          id="team.drivers"
          name="team.drivers"
        />
        <Label htmlFor="team.active">
          <FormattedMessage id="form.active" defaultMessage="Active" />
        </Label>
        <InputContain
          onChange={formikTeams.handleChange}
          value={formikTeams.values.team.active}
          id="team.active"
          name="team.active"
        />
        <Label htmlFor="team.chasis">
          <FormattedMessage id="form.chasis" defaultMessage="Chasis" />
        </Label>
        <InputContain
          onChange={formikTeams.handleChange}
          value={formikTeams.values.team.chasis}
          id="team.chasis"
          name="team.chasis"
        />
        <Label htmlFor="team.engine">
          <FormattedMessage id="form.engine" defaultMessage="Engine" />
        </Label>
        <InputContain
          onChange={formikTeams.handleChange}
          value={formikTeams.values.team.engine}
          id="team.engine"
          name="team.engine"
        />
        <Label htmlFor="team.driversChampionships">
          <FormattedMessage
            id="form.drivers.championships"
            defaultMessage="Drivers Championships"
          />
        </Label>
        <InputContain
          onChange={formikTeams.handleChange}
          value={formikTeams.values.team.driversChampionships}
          id="team.driversChampionships"
          name="team.driversChampionships"
        />
        <Label htmlFor="team.teamChampionships">
          <FormattedMessage
            id="form.team.championships"
            defaultMessage="Team Championships"
          />
        </Label>
        <InputContain
          onChange={formikTeams.handleChange}
          value={formikTeams.values.team.teamChampionships}
          id="team.teamChampionships"
          name="team.teamChampionships"
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
          onChange={formikTeams.handleChange}
          value={formikTeams.values.userName}
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
          onChange={formikTeams.handleChange}
          onBlur={formikTeams.handleBlur}
          value={formikTeams.values.userEmail}
          id="userEmail"
          name="userEmail"
        />
      {/*   <Label validations="true">{formikTeams.touched.userEmail && formikTeams.errors.userEmail ? (
          <div className="error">{formikTeams.errors.userEmail}</div>
        ) : null}</Label> */}
        <ButtonForm type="submit">
          <FormattedMessage id="button.enviar" defaultMessage="Send" />
        </ButtonForm>
        
        <ContactTitle>{messageSent}</ContactTitle>
      </FormContain>
    </FormContainer>
  );
};

export default FormContributionTeam;
