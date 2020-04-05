import React,{Component} from "react";
import "./filter-items.css"

export default class FilterItems extends Component{

    render() {
const {onClickCheckboxMan,onClickCheckboxWoman,onClickCheckboxUnknown,} = this.props;

        return (
            <div className="filter-items">
                <div  className="filter-item">
                    <input type="checkbox"  defaultChecked onClick={onClickCheckboxMan} />
                    <span>Man</span>
                </div>
                <div className="filter-item">
                    <input type="checkbox" defaultChecked onClick={onClickCheckboxWoman}/>
                    <span>Woman</span>
                </div>
                <div className="filter-item">
                    <input type="checkbox" defaultChecked onClick={onClickCheckboxUnknown}/>
                    <span>Unknown</span>
                </div>
            </div>
        )
    }
}