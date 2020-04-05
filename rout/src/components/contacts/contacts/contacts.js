import React from "react";
import './contacts.css'
import Contact from "../contact/contact";

const Contacts = ({contacts})=> {

   const elements = contacts.map((contact)=>{
        const {id, ...contactProps} = contact;
        return(
            <li key={id}>
            <Contact  {...contact}/>
             </li>)
        });
        return (
            <ul className="contacts">
                {elements}
            </ul>
        )
};
export default Contacts;





