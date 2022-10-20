
import { useEffect, useState } from "react";
import {IntlProvider, FormattedMessage, FormattedNumber} from "react-intl"

const messages = {
 "tr-TR" : {
 title: "Selam Türkçe",
 description:"3 yeni mesajınız var"
 },

 "en-US":{
 title: "Hello Turkey",
 description: "you have 3 new message"
 }
}

function App() {
  const [lang, setLang] = useState("tr-TR");

  return (
    <div className="App"> 
    <IntlProvider  messages={messages[lang]}>
     

      <FormattedMessage
          id="title" />

          <p>
          <FormattedMessage
          id="description" />
          </p>
            <br/>
          <button onClick={() => setLang("tr-TR")}>TR</button>

          <button onClick={() => setLang("en-US")}>EN</button>
    </IntlProvider>

    </div>
  );
}
export default App;
