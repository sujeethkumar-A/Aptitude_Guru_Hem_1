import React from "react";
import './symbol-of-excellence.css';
const SymbolOfExcellence = (props) => {
    return (<div className= "symbol-parent">
    
    <div className="symbol-child-1">
       <div className="symbol-child-1-1">
        <h1>{props.title}</h1>
        </div>
        <div className="symbol-child-1-2">
        <p>{props.subtitle}</p>
    </div>
    </div>
    <div className="vision-mision-container">
     <div className="symbol-child-2">
        <div className="symbol-child-2-1">
        <h1>Our Vision</h1>
        </div>
        <div className="symbol-child-2-2">
        <p>{props.vision}</p>
    </div>
    </div>
    <div className="symbol-child-3">
        <div className="symbol-child-3-1">
        <h1>Our Mission</h1>
        </div>
        <div className="symbol-child-3-2">
        <p>{props.mission}</p>
        </div>
    </div>
    </div>
    <div className="symbol-child-4">
        <div className="symbol-child-4-1">
        <h3>Learners Today, Leaders Tomorrow</h3>
       </div>
       <div className="symbol-child-4-2">
        <p>With our continuous research and development, we provide you with an excellent Aptitude training.</p>
       </div>
    </div>
    </div>
);
}
export default SymbolOfExcellence;