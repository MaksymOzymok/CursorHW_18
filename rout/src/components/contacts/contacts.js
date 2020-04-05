import React, {Fragment} from "react";
import {Switch, Route} from 'react-router-dom'
import ContactsApp from "../contacts/contacts-app/contacts-app";
import Contact from './contact'
const Contacts = ()=>{
    return(
        <Switch>
            <Route exact path='/contacts' component = {ContactsApp}/>
            <Route path = '/contacts/:id' component = {Contact}/>
        </Switch>
    )
};
export default Contacts;