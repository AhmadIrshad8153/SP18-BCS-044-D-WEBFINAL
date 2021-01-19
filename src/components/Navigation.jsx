import React from "react"
import {Link, withRouter} from "react-router-dom" 
import {Nav,Navbar,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'



function Navigation(props){

return(
    <div>
  <Navbar style={{ marginTop: '-7px'}} expand="lg">
 <Navbar.Brand href="#home" >AAS  </Navbar.Brand>
 <Navbar.Toggle aria-controls="basic-navbar-nav" />
 <Navbar.Collapse id="basic-navbar-nav">
   <ul>
   <Nav className="mr-auto">
     <li style={{paddingTop:'23px'}} class={`nav-item  ${
                 props.location.pathname === "/" ? "active" : ""
               }`}>
      <Link Link class="nav-link" to='/'>Home <span class="sr-only">(current)</span> </Link>  </li>

 <li style={{paddingLeft:'15px',paddingTop:'23px'}}>   <NavDropdown title="Categories" id="basic-nav-dropdown">
       <NavDropdown.Item href="#action/3.1"  class={`nav-item  ${
                 props.location.pathname === "/rifle" ? "active" : ""
               }`}><Link class="nav-link" to='/rifle'>Rifels</Link></NavDropdown.Item>
      
       <NavDropdown.Item href="#action/3.2"  class={`nav-item  ${
                 props.location.pathname === "/pistol" ? "active" : ""
               }`}><Link class="nav-link" to='/pistol'>Pistols</Link></NavDropdown.Item>
       <NavDropdown.Item href="#action/3.3" class={`nav-item  ${
                 props.location.pathname === "/shotgun" ? "active" : ""
               }`}><Link class="nav-link" to='/shotgun'>ShotGuns</Link></NavDropdown.Item>
       <NavDropdown.Item href="#action/3.4"  class={`nav-item  ${
                 props.location.pathname === "/bullet" ? "active" : ""
               }`}><Link class="nav-link" to='/bullet'>Bullets</Link></NavDropdown.Item>
       <NavDropdown.Divider />
     </NavDropdown>
     </li>
  <li style={{paddingLeft:'15px',paddingTop:'23px'}}>  <NavDropdown title="Accessories" id="basic-nav-dropdown2">
       <NavDropdown.Item href="#action/3.5" class={`nav-item  ${
                 props.location.pathname === "/lower" ? "active" : ""
               }`}><Link class="nav-link" to='/lower'>Lower Reciever</Link></NavDropdown.Item>
       <NavDropdown.Item href="#action/3.6" class={`nav-item  ${
                 props.location.pathname === "/upper" ? "active" : ""
               }`}><Link class="nav-link" to='/upper'>Upper Reciever</Link></NavDropdown.Item>
       <NavDropdown.Item href="#action/3.7" class={`nav-item  ${
                 props.location.pathname === "/black" ? "active" : ""
               }`}><Link class="nav-link" to='/black'>Black Powder</Link></NavDropdown.Item>
       
       <NavDropdown.Divider />
     </NavDropdown>
     </li>

    <li style={{paddingLeft:'15px',paddingTop:'23px'}}> <NavDropdown title="Contact Us" id="basic-nav-dropdown3">
       <NavDropdown.Item href="#action/3.8">Cell no: 0312-1760816</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.9">Email: ahmadirshad6347@gmail.com</NavDropdown.Item>
      
       
       <NavDropdown.Divider />
     </NavDropdown>
     </li>

     <li style={{paddingLeft:'15px',paddingTop:'30px'}}><Link to="/shop">Shop</Link></li>
     <li style={{paddingLeft:'15px',paddingTop:'30px'}}><Link to="/cart">Cart</Link></li>
   </Nav>
   </ul>
   <Form style={{paddingLeft:'253px'}} inline>
     <FormControl  type="text" placeholder="Search" className="mr-sm-2" />
     <Button variant="outline-danger" style={{color: 'red'}}>Search</Button>
   </Form>
   
  
 </Navbar.Collapse>
</Navbar>
</div>
);
}

export default withRouter(Navigation);