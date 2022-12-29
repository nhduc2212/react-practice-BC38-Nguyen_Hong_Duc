import { Component } from "react";
import './Body.css';
import Banner from "./Banner.js";
import Item from "./Item.js";

class Body extends Component{
    render (){
        return(<div className="body-container">
            <Banner/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            </div>
        )
    }
}

export default Body