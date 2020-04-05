import React,{Component} from "react";
import "./search-panel.css"

export default  class SearchPanel extends Component{
    state = {
        term : ''
    };
    onSearchChange = (e)=>{
        const term = e.target.value;
        this.setState({term});
        this.props.onSearhChange(term);
    };
    render() {
        return <input className="search-panel" type="text" placeholder="search" onChange={this.onSearchChange}></input>
    }
}