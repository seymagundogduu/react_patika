
import { useEffect, useState } from "react";
import {IntlProvider, FormattedMessage, FormattedNumber} from "react-intl"

const messages = {
 "tr-TR" : {
 title: "Selam Türkçe",
 description:"{count} yeni mesajınız var"
 },

 "en-US":{
 title: "Hello Turkey",
 description: "you have {count} new message"
 }
}

function Lang() {
  const isLocale = localStorage.getItem("locale");
  const defaultLocale = isLocale ? isLocale : navigator.language; // tarayıcının dilini tanımlar
  console.log(defaultLocale);
  const [lang, setLang] = useState("tr-TR");


  useEffect(() => {
       localStorage.setItem('locale' , lang)
  },[lang])

  return (
    <div className="App"> 
    <IntlProvider locale={lang} messages={messages[lang]}>
     

      <FormattedMessage
          id="title" />

          <p>
          <FormattedMessage
          id="description"  values={{ count: 3}} />
          </p>
            <br/>
          <button onClick={() => setLang("tr-TR")}>TR</button>

          <button onClick={() => setLang("en-US")}>EN</button>
    </IntlProvider>

    </div>
  );
}
export default Lang;
