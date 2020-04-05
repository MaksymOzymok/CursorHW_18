import React , {Component}from "react";
import "./contacts-app.css"
import Header from "../header/header";
import SearchPanel from "../search-panel/search-panel.";
import Contacts from "../contacts/contacts";
import FilterItems from "../filter-items/filter-items";
export default  class ContactsApp extends Component {
    state = {
        contacts : [{
            firstName: "Барней",
            lastName: "Стинсовский",
            phone: "+380956319521",
            gender: "male",
            id : 1
        }, {
            firstName: "Робин",
            lastName: "Щербатская",
            phone: "+380931460123",
            gender: "female",
            id : 2
        }, {
            firstName: "Аномный",
            lastName: "Анонимус",
            phone: "+380666666666",
            id : 3
        }, {
            firstName: "Лилия",
            lastName: "Олдровна",
            phone: "+380504691254",
            gender: "female",
            id : 4
        }, {
            firstName: "Маршэн",
            lastName: "Эриксонян",
            phone: "+380739432123",
            gender: "male",
            id : 5
        }, {
            firstName: "Теодор",
            lastName: "Мотсбэс",
            phone: "+380956319521",
            gender: "male",
            id : 6

        }],
        term: '',
        filter: {
            man: true,
            woman: true,
            unknown: true
        }
    };
  /*  getContact = (id)=>{
        const contact = this.state.filter(value=>value.id === id);
        return contact;
    };*/
    search = (items,term)=> {
        if (term === "") {
            return items;
        }
        const byLastName = items.filter((item) => {
            return item.lastName.indexOf(term) > -1;
        });
        const byFirstName = items.filter((item) => {
            return item.firstName.indexOf(term) > -1;
        });
        const byPhone = items.filter((item)=>{
            return item.phone.indexOf(term) > -1;
        });
        return [...byFirstName,...byLastName,...byPhone]
    };
    onSearchChange = (term) =>{
        this.setState({term});
    };
    onClickCheckboxMan = ()=>{
       this.setState(state=>{

           return {
               filter : {
                   man:!state.filter.man,
                   woman : state.filter.woman,
                   unknown : state.filter.unknown
               }
           }
       })
    };
    onClickCheckboxWoman = ()=>{
        this.setState(state=>{

            return {
                filter : {
                    man:state.filter.man,
                    woman : !state.filter.woman,
                    unknown : state.filter.unknown
                }
            }
        })
    };
    onClickCheckboxUnknown = ()=>{
        this.setState(state=>{

            return {
                filter : {
                    man:state.filter.man,
                    woman : state.filter.woman,
                    unknown :!state.filter.unknown
                }
            }
        })
    };
    filter = (items,filter)=>{
        let mans=[],womans=[],unknowns=[];
        if(filter.man) {
            console.log('mans');
            mans = items.filter((item)=>item.gender ==='male');
        }if(filter.woman) {
            console.log('womans');
            womans = items.filter((item)=>item.gender ==='female');
        }
        if(filter.unknown) {
            console.log('unknowns');
            unknowns = items.filter((item)=>!Object.keys(item).includes('gender'));
        }
        let k = new Set([...mans,...womans,...unknowns]);
            return Array.from(k);
        };

    render() {
        const {contacts,term,filter} = this.state;
        const visibleItems = this.filter(this.search(contacts, term),filter);
        return(
            <div className="contacts-app">
                <Header/>
                <SearchPanel onSearhChange = {this.onSearchChange}/>
                <FilterItems onClickCheckboxMan = {this.onClickCheckboxMan}
                             onClickCheckboxWoman = {this.onClickCheckboxWoman}
                             onClickCheckboxUnknown = {this.onClickCheckboxUnknown}/>
                <Contacts  contacts = {visibleItems} />
            </div>
        )
    }

}