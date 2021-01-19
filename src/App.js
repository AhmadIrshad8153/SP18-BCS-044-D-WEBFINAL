import React from "react"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom" 
import {Navigation,Price,acc,Rifle,Pistol,Shotgun,Bullet,Lower,Upper,Black} from './components'
import {Topbar,Home} from './components'
import logo from './logo.svg'
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"
import './App.css'
import Shop from './components/Shop'
import Cart from './components/Cart'




function App(props) {
  return (
    <div className="App">
<Router>   
    
    <Topbar/>   
    <Navigation/>    
    
  
<Switch>
<Route path="/" exact component={() => <Home />} />
<Route path ="/price" exact component={() => <Price/>} />
<Route path ="/rifle" exact component={() => <Rifle/>} />
<Route path ="/pistol" exact component={() => <Pistol/>} />
<Route path ="/shotgun" exact component={() => <Shotgun/>} />
<Route path ="/bullet" exact component={() => <Bullet/>} />
<Route path ="/lower" exact component={() => <Lower/>} />
<Route path ="/upper" exact component={() => <Upper/>} />
<Route path ="/black" exact component={() => <Black/>} />
<Route exact path="/shop" component={Shop}/>
<Route path="/cart" component={Cart}/>

</Switch>
</Router>
    </div>
    

  );
}

export default App;
