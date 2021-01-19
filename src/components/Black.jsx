import React from "react";
import d1 from './b1.jfif'
import d2 from './b2.png'
import d3 from './b3.jfif'


import {
    Card, CardDeck,Button
   } from 'react-bootstrap';
function Black() {
  return (
    <div className="Price">
<h1 style={{textAlign:'center',fontFamily:'monospace',color:'black'}} >Black Powder</h1>  
      <div  style = {{marginTop:'20px'}}>
      <CardDeck>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d1} />
  <Card.Body>
    <Card.Title>RS: 15000</Card.Title>
    <Card.Text>
      GOEX black powder
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d2} />
  <Card.Body>
    <Card.Title>RS 8000/KG</Card.Title>
    <Card.Text>
      LOCAL BLACK POWDER
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d3} />
  <Card.Body>
    <Card.Title>RS:16000</Card.Title>
    <Card.Text>
      SWISS BLACK POWDER
    </Card.Text>
  </Card.Body>
</Card>
</CardDeck>
</div>


    </div>
  );
}

export default Black;