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
  display: ${(props) => (props.state === "Team" ||  props.state === "Circuit" ? "none" : "block")};
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
  font-size: ${props => props.FastLapSize === 'true' ? '1.05rem' : '1.15rem'};
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

const FormContributionDriver = (option) => {

  const [messageSent, setMessageSent] = useState("");

  /* const validate = (values) => {
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

  const formik = useFormik({
    initialValues: {
      driver: {
      name: "",
      nationality: "",
      birthDate: "",
      height: "",
      weight: "",
      team: [""],
      teamHistory: [""],
      championship: [""],
      victories: "",
      podium: "",
      debut: "",
      image: "",
      officialSite: [""]
      },
      userName: "",
      userEmail: ""
    },/* 
    validate, */
    onSubmit: (formik) => {
      setMessageSent(<FormattedMessage
        id="contact.sent"
        defaultMessage="sent message" />);
      objectModel.name = formik.userName
      objectModel.email = formik.userEmail
      objectModel.driver = formik.driver
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
    <FormContainer state={option.state.value}>
      <FormContain onSubmit={formik.handleSubmit}>
        <Label htmlFor="driver.name">
          <FormattedMessage id="form.name" defaultMessage="Name" />
        </Label>
        <InputContain
          onChange={formik.handleChange}
          value={formik.values.driver.name}
          id="driver.name"
          name="driver.name"
        />
        <Label htmlFor="driver.nationality">
          <FormattedMessage
            id="form.nationality"
            defaultMessage="Nationality"
          />
        </Label>
        <InputContain
          onChange={formik.handleChange}
          value={formik.values.driver.nationality}
          id="driver.nationality"
          name="driver.nationality"
        />
        <Label htmlFor="driver.birthDate">
          <FormattedMessage id="form.birthDate" defaultMessage="BirthDate" />
        </Label>
        <InputContain
          onChange={formik.handleChange}
          value={formik.values.driver.birthDate}
          id="driver.birthDate"
          name="driver.birthDate"
        />
        <Label htmlFor="driver.height">
          <FormattedMessage id="form.height" defaultMessage="Height" />
        </Label>
        <InputContain
          onChange={formik.handleChange}
          value={formik.values.driver.height}
          id="driver.height"
          name="driver.height"
        />
        <Label htmlFor="driver.weight">
          <FormattedMessage id="form.weight" defaultMessage="Weight" />
        </Label>
        <InputContain
          onChange={formik.handleChange}
          value={formik.values.driver.weight}
          id="driver.weight"
          name="driver.weight"
        />
        <Label htmlFor="driver.team">
          <FormattedMessage id="form.team" defaultMessage="Team" />
        </Label>
        <InputContain
          onChange={formik.handleChange}
          value={formik.values.driver.team}
          id="driver.team"
          name="driver.team"
        />
        <Label htmlFor="driver.teamHistory">
          <FormattedMessage
            id="form.teamHistory"
            defaultMessage="TeamHistory"
          />
        </Label>
        <InputContain
          onChange={formik.handleChange}
          value={formik.values.driver.teamHistory}
          id="driver.teamHistory"
          name="driver.teamHistory"
        />
        <Label htmlFor="driver.championship">
          <FormattedMessage
            id="form.championship"
            defaultMessage="Championship"
          />
        </Label>
        <InputContain
          onChange={formik.handleChange}
          value={formik.values.driver.championship}
          id="driver.championship"
          name="driver.championship"
        />
        <Label htmlFor="driver.victories">
          <FormattedMessage id="form.victories" defaultMessage="Victories" />
        </Label>
        <InputContain
          onChange={formik.handleChange}
          value={formik.values.driver.victories}
          id="driver.victories"
          name="driver.victories"
        />
        <Label htmlFor="driver.podium">
          <FormattedMessage id="form.podium" defaultMessage="Podium" />
        </Label>
        <InputContain
          onChange={formik.handleChange}
          value={formik.values.driver.podium}
          id="driver.podium"
          name="driver.podium"
        />
        <Label htmlFor="driver.debut">
          <FormattedMessage id="form.debut" defaultMessage="Debut" />
        </Label>
        <InputContain
          onChange={formik.handleChange}
          value={formik.values.driver.debut}
          id="driver.debut"
          name="driver.debut"
        />
        <Label htmlFor="driver.image">
          <FormattedMessage id="form.image" defaultMessage="Image" />
        </Label>
        <InputContain
          onChange={formik.handleChange}
          value={formik.values.driver.image}
          id="driver.image"
          name="driver.image"
        />
        <Label htmlFor="driver.officialSite">
          <FormattedMessage
            id="form.official.site"
            defaultMessage="OfficialSite"
          />
        </Label>
        <InputContain
          onChange={formik.handleChange}
          value={formik.values.driver.officialSite}
          id="driver.officialSite"
          name="driver.officialSite"
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
          onChange={formik.handleChange}
          value={formik.values.userName}
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
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userEmail}
          id="userEmail"
          name="userEmail"
        />
      {/*   {formik.touched.userEmail && formik.errors.userEmail ? (
          <div className="error">{formik.errors.userEmail}</div>
        ) : null} */}
        <ButtonForm type="submit">
          <FormattedMessage id="button.enviar" defaultMessage="Send" />
        </ButtonForm>
        <ContactTitle>{messageSent}</ContactTitle>
      </FormContain>
    </FormContainer>
  );
};

export default FormContributionDriver;
