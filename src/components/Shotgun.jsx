import React from "react";
import d1 from './d11.jfif'
import d2 from './d12.png'
import d3 from './d13.jpg'


import {
    Card, CardDeck,Button
   } from 'react-bootstrap';
function Shotgun() {
  return (
    <div className="Price">
<h1 style={{textAlign:'center',fontFamily:'monospace',color:'black'}} >ShotGuns</h1>  
      <div  style = {{marginTop:'20px'}}>
      <CardDeck>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d1} />
  <Card.Body>
    <Card.Title>RS: 200000</Card.Title>
    <Card.Text>
      Shot Duo
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d2} />
  <Card.Body>
    <Card.Title>RS: 100000</Card.Title>
    <Card.Text>
      AMERICAN SHOTSGUN
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d3} />
  <Card.Body>
    <Card.Title>RS:110000</Card.Title>
    <Card.Text>
      RUSSIAN MONSTER
    </Card.Text>
  </Card.Body>
</Card>
</CardDeck>
</div>


    </div>
  );
}

export default Shotgun;