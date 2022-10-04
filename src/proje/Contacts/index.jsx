import {useState, useEffect} from 'react'

import Form from './Form'
import List from './List'
import "./styles.css";



function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "Şeyma",
            phone_number: 1111,
        },
        {
            fullname: "Sude",
            phone_number: 2222,
        },
        {
            fullname: "Feyza",
            phone_number: 3333,
        }
    ]);

    useEffect(() => {
    console.log(contacts);
    }, [contacts]);
    
  return (
    <div id='container'>
        <h1>Contacts</h1>
        <List contacts={contacts}/>
        <Form  addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts