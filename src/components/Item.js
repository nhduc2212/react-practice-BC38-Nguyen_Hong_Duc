import { Component } from "react";
import './Item.css'
class Item extends Component{
    render(){
        return(
            <div className="card" style={{width: "18rem"}}>
  <img src="" width={"500px"} height={"325px"} className="card-img-top" alt=""/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Find Out More!</a>
  </div>
</div>
        )
    }
}
export default Item