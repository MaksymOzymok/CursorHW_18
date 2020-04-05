import React, {Component} from "react";
import './contact.css'
import {Link} from 'react-router-dom'
export default class Contact extends Component{
    state = {
        active : false,
        gender : this.props.gender
    };



    render() {
        const {firstName="a", lastName="b",phone="v",id,gender="-"} = this.props;
        const {active} = this.state;
        let genderIconClass = {
            male : "fas fa-mars",
            female : "fas fa-venus"
        };
        let classNames = "contact-sub-menu";

        if(active){
            classNames += "active";
        }
        return(
            <ul className="contact">
            <li className="contact-item" onClick={this.openSubMenu}>
                <Link to = {`/contacts/${id}`}>
                {lastName}
             <i className={genderIconClass[this.state.gender]}></i>
                </Link>

            </li>
                {/*<ul className={classNames}>
                    <li className="contact-sub-item">name: {firstName}</li>
                     <li className="contact-sub-item"> phone: {phone}</li>
                     <li className="contact-sub-item">gender: {gender}</li>
                 </ul>*/}
            </ul>
        )
    }
}