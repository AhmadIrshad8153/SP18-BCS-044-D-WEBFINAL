import React from "react";
import d1 from './d6.jpg'
import d2 from './d9.jfif'
import d3 from './d8.jfif'


import {
    Card, CardDeck,Button
   } from 'react-bootstrap';
function Rifle() {
  return (
    <div className="Price">
<h1 style={{textAlign:'center',fontFamily:'monospace',color:'black'}} >Riffles</h1>  
      <div  style = {{marginTop:'20px'}}>
      <CardDeck>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d1} />
  <Card.Body>
    <Card.Title>RS: 200000</Card.Title>
    <Card.Text>
   AK 47 black
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d2} />
  <Card.Body>
    <Card.Title>RS: 350000</Card.Title>
    <Card.Text>
      Military G3 riffle
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d3} />
  <Card.Body>
    <Card.Title>RS: 300000</Card.Title>
    <Card.Text>
    Colt Made M16 riffle
    </Card.Text>
  </Card.Body>
</Card>
</CardDeck>
</div>


    </div>
  );
}

export default Rifle;