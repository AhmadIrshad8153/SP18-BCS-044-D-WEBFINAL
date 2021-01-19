import React from "react";
import d1 from './l1.jfif'
import d2 from './l2.jfif'
import d3 from './l3.jfif'


import {
    Card, CardDeck,Button
   } from 'react-bootstrap';
function Lower() {
  return (
    <div className="Price">
<h1 style={{textAlign:'center',fontFamily:'monospace',color:'black'}} >Lower Recievers</h1>  
      <div  style = {{marginTop:'20px'}}>
      <CardDeck>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d1} />
  <Card.Body>
    <Card.Title>RS: 25000</Card.Title>
    <Card.Text>
    COLT LOWER RECIEVER LOCAL FOR RIFFLE
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d2} />
  <Card.Body>
    <Card.Title>RS: 37000</Card.Title>
    <Card.Text>
     COLT LOWER RECIEVER IMPOERTED FOR RIFLE
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d3} />
  <Card.Body>
    <Card.Title>RS: 15000</Card.Title>
    <Card.Text>
    Colt lower reciever imported for pistol
    </Card.Text>
  </Card.Body>
</Card>
</CardDeck>
</div>


    </div>
  );
}

export default Lower;