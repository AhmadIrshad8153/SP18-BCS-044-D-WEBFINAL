import React from "react"
import './App.css';
import {Link, withRouter} from "react-router-dom" 




function Topbar(props){

return(
    <div>
   <div style ={{  backgroundColor:'black', marginTop: '-4px'  ,position:'relative'}}>
    <h1 style={{ color: 'red',display:'inline', fontStyle: 'italic'}}>ASK ARMS & SHOTS </h1>
     </div>


<div className="si" style={{ width:'15%',height:'30px',left:'84%'}}  >
<h7  style={{color:'red',paddingLeft:'30px'}} class={`nav-item  ${
  props.location.pathname === "/acc" ? "active" : ""
}`} > <Link style={{color:'red',display:'inline'}} class="nav-link" to='/'>Create Account</Link></h7>
     </div>
     </div>   
);
}

export default withRouter(Topbar);