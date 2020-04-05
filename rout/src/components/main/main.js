import React from "react";
import {Switch, Route} from 'react-router-dom'
import Home from "../home/home";
import Posts from "../posts/posts";
import Gallery from "../gallery/gallery";
import Contacts from "../contacts/contacts";

const Main = ()=>(
    <main>
        <Switch>
            <Route exact path='/' component = {Home}/>
            <Route path = '/posts' component = {Posts}/>
            <Route path = '/gallery' component = {Gallery}/>
            <Route path = '/contacts' component = {Contacts}/>
        </Switch>
    </main>
);
export default Main;