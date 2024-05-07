import React from "react";
import { Link } from "react-router-dom";
// import Movies from "./Movies";
import "./MyCard.css"
// import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
function MyCard(props){

    return(<>
    
     {/* <div className="card p-2 m-2 col-3 bg-black text-center " style={{width: '16rem'}} >
  <img className="card-img-top" src={ `https://image.tmdb.org/t/p/w500/${props.img} `}alt="Card image cap"/>
  <div className="card-body">
    <Link  style={{ textDecoration: 'none'}} to={`/company/${props.id}`} classNameName="card-text text-light">{props.name}</Link>
     <p className="card-text"></p>
    <p className="card-text"></p>
    </div>
    </div> */}
    <div id="card-area">
            <div className="wrapper">
                <div className="box">
                    <img src={ `https://image.tmdb.org/t/p/w500/${props.img} `} alt=""/>
                    <div className="overlay">

                        <h3>{props.name}</h3>
                        <p>{props.desc}/</p>

                    </div>
                </div>
            </div>
            <Link className="btn btn-dark" to={`/Movies/${props.id}`}>more</Link>
        </div>
       

  
 
  
    

   

    </>)
}
export default MyCard;
