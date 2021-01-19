import React from "react";
import d1 from './gb.jpg'
import d2 from './pb.jpg'
import d3 from './sb.jfif'


import {
    Card, CardDeck,Button
   } from 'react-bootstrap';
function Bullet() {
  return (
    <div className="Price">
<h1 style={{textAlign:'center',fontFamily:'monospace',color:'black'}} >Bullets</h1>  
      <div  style = {{marginTop:'20px'}}>
      <CardDeck>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d1} />
  <Card.Body>
    <Card.Title>RS: 50/PIECE</Card.Title>
    <Card.Text>
     COLT kartooz.
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d2} />
  <Card.Body>
    <Card.Title>RS: 110/PIECE </Card.Title>
    <Card.Text>
      COLT PISTOL BULLET (IMPORTED)
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d3} />
  <Card.Body>
    <Card.Title>RS: 300/PIECE</Card.Title>
    <Card.Text>
    COLT SNIPER BULLETS (IMPORTED)
    </Card.Text>
  </Card.Body>
</Card>
</CardDeck>
</div>


    </div>
  );
}

export default Bullet;