import React from "react";
import d1 from './u1.jfif'
import d2 from './u2.jfif'
import d3 from './u3.jfif'


import {
    Card, CardDeck,Button
   } from 'react-bootstrap';
function Upper() {
  return (
    <div className="Price">
<h1 style={{textAlign:'center',fontFamily:'monospace',color:'black'}} >Upper Recievers</h1>  
      <div  style = {{marginTop:'20px'}}>
      <CardDeck>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d1} />
  <Card.Body>
    <Card.Title>RS: 15000</Card.Title>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d2} />
  <Card.Body>
    <Card.Title>RS: 27000</Card.Title>
   

  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d3} />
  <Card.Body>
    <Card.Title>RS: 21000</Card.Title>
    

  </Card.Body>
</Card>
</CardDeck>
</div>


    </div>
  );
}

export default Upper;