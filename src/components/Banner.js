import { Component } from "react";
import './Banner.css';
import Button1 from "./Button1";
class Banner extends Component{
render(){
    return (
        <div className="Banner">
        <h1>A Warm Welcome!</h1>
        <h2>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</h2>
        <Button1/>
        </div>)
}
}

export default Banner