import React from 'react';

const LanguageSwitch = ({ language, location }) => {
    let languageList = { es: "Spanish", en: "English" }
    let links = [];
    if('es-ES' === location) {
        links.push(languageList.en);
    } else {
        links.push(languageList.es);
    }
  return <div>{links}</div>
}

export default LanguageSwitch;
