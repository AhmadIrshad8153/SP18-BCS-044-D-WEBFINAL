import React from "react";
import d1 from './d1.jpg'
import d2 from './d2.jpg'
import d3 from './d3.jpg'


import {
    Card, CardDeck,Button
   } from 'react-bootstrap';
function Pistol() {
  return (
    <div className="Price">
<h1 style={{textAlign:'center',fontFamily:'monospace',color:'black'}} >Pistols</h1>  
      <div  style = {{marginTop:'20px'}}>
      <CardDeck>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d1} />
  <Card.Body>
    <Card.Title>RS: 80000</Card.Title>
    <Card.Text>
    WAL 5100301 PPQ TAC 22LR 4IN BLK 12RD
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d2} />
  <Card.Body>
    <Card.Title>RS: 60000</Card.Title>
    <Card.Text>
    SPG XD9802 CA 40 SC 3IN BLK
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d3} />
  <Card.Body>
    <Card.Title>RS: 100000</Card.Title>
    <Card.Text>
    SPG XD9802 CA 40 SC 3IN BLK
    </Card.Text>
  </Card.Body>
</Card>
</CardDeck>
</div>


    </div>
  );
}

export default Pistol;