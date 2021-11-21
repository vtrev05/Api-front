import React from 'react';
import { FormattedMessage } from 'react-intl';
import {useFormik} from "formik";
import styled from 'styled-components';
import axios from  'axios';
import { useState } from 'react';

const desktopStartWidth = 576;

const mobile = `@media (max-width: ${desktopStartWidth}px)`;

// background-color: #15151e;
const ContactContainer = styled.div`
display: flex;
flex-direction: column;
justify-content:space-evenly;
align-items: center;
text-align: center;
height: 80vh;
`

const ContactTitle = styled.p`
  width: 100%;
  text-align: center;
  font-size: 1.05rem;
  padding: 30px 0;
  font-size: 1.5rem;
  font-weight: 600;
  margin-block-start: 0;
  margin-block-end: 0;
`
const FormContain = styled.form`
display: flex;
flex-direction: column;
text-align: center;
margin: 15px;
`
const TextLabel = styled.label`
    padding: 10px 0 ;
    display: ${(props) => (props.validations === "true" ? "block" : "inline")};
    font-weight: 600;
    font-size: ${props => props.FastLapSize === 'true' ? '1.35rem' : '1rem'};`

const InputContain = styled.input`
margin-bottom: 10px;
width: 300px;
align-self: center;
`

const TextContain = styled.textarea`
margin-bottom: 10px;
width: 600px;
align-self: center;
${mobile} {
    width: 300px;
}
`

const ButtonForm = styled.button`
border: none;
font-size: 13px;
line-height: 15px;
text-transform: uppercase;
font-weight: bolder;
color: white;
background-color: #e10600;
border-radius: 5px;
margin: 10px;
width: 100px;
align-self: center;
padding: 12px;
cursor: pointer;
border: 3px solid #e10600;
&&:hover{
    transition:.5s;
    background-color: white;
    color: #e10600;
}
`
const ErrorText = styled.p`
color: #e10600;
`

const FormContact = () => {

    const validate = (values) => {
        const errors = {};

        if (!values.text) {
            errors.text = <FormattedMessage
            id="contact.required"
            defaultMessage="required" />;
        } else if (values.text.length < 19) {
            errors.text = <FormattedMessage
            id="contact.text.error"
            defaultMessage="error" />;
        }

        if (!values.name) {
            errors.name = <FormattedMessage
            id="contact.required"
            defaultMessage="required" />;
        } else if (values.name.length < 2) {
            errors.name = <FormattedMessage
            id="contact.name.error"
            defaultMessage="error" />;
        }

        if (!values.email) {
            errors.email = <FormattedMessage
            id="contact.required"
            defaultMessage="required" />;
        } else if (values.email.length < 4) {
            errors.email = <FormattedMessage
            id="contact.email.error"
            defaultMessage="error" />;
        }

        return errors;
    }

    const BASEURL = "https://formula1s.herokuapp.com";
    const ITEMSURL = "/contact/email";

    const [messageSent, setMessageSent] = useState("");

    const formik = useFormik({
        initialValues: {
            text: "",
            name: "",
            email: "",
        },
        validate,
        onSubmit: (values) => { 
            console.log(values)
            axios.post(BASEURL + ITEMSURL, values).then(
                (res) => {
                    setMessageSent(<FormattedMessage
                    id="contact.sent"
                    defaultMessage="sent message" />);

                    setTimeout(function() {window.location.href="/";
                }, 3000);
                },
                (error) => {
                    console.log(error);
                }
              );
        },
    });

    return (
        <ContactContainer>
        <div>
            <ContactTitle><FormattedMessage
            id="contact.title"
            defaultMessage="contact" /> </ContactTitle>
        </div>
        <FormContain onSubmit={formik.handleSubmit}>

            <FormattedMessage id="contact.placeholder.example"
            defaultMessage="text-here">
                {placeholder =>
                <TextContain
                id="text"
                name="text"
                 onChange={formik.handleChange}
                 value={formik.values.text}
                 placeholder={placeholder} rows="8" cols="100" />}
            </FormattedMessage>
            {formik.touched.text && formik.errors.text ? (
                <ErrorText>{formik.errors.text}</ErrorText>
            ) : null}

            <TextLabel htmlFor="name"><FormattedMessage
            id="contact.name"
            defaultMessage="name" /></TextLabel>
            <InputContain
            id="name"
            name="name"
             onChange={formik.handleChange}
             value={formik.values.name}></InputContain>
             {formik.touched.name && formik.errors.name ? (
                <ErrorText>{formik.errors.name}</ErrorText>
            ) : null}

             <TextLabel htmlFor="email"><FormattedMessage
             id="contact.email"
             defaultMessage="email" /></TextLabel>
             <InputContain
             id="email"
             name="email"
             onChange={formik.handleChange}
             value={formik.values.email}></InputContain>
             {formik.touched.email && formik.errors.email ? (
                <ErrorText>{formik.errors.email}</ErrorText>
            ) : null}

             <ButtonForm type="submit"><FormattedMessage
             id="contact.button"
             defaultMessage="send" /></ButtonForm>
             <p>{messageSent}</p>
        </FormContain>
        </ContactContainer>
    )
}

export default FormContact;
