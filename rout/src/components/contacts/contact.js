import React, {Fragment} from "react";
import ContactsApp from "./contacts-app/contacts-app";
import {Link} from "react-router-dom"
const Contact = (props)=>{
    const newObj = new ContactsApp();
    const id = parseInt(props.match.params.id,10) - 1;
    return(
        <Fragment>
        <h2>name : {newObj.state.contacts[id].firstName}</h2>
        <h2>lastname : {newObj.state.contacts[id].lastName}</h2>
        <h2>phone : {newObj.state.contacts[id].phone}</h2>
        <h2>gender : {newObj.state.contacts[id].gender}</h2>
            <Link to='/contacts'>Back</Link>

        </Fragment>
    )
};
export default Contact;