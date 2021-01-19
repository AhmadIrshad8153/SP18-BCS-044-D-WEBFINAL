import React from "react";
import d1 from './d1.jpg'
import d2 from './d2.jpg'
import d3 from './d3.jpg'
import d5 from './d5.jpg'
import d6 from './d6.jpg'
import d8 from './d8.jfif'
import d9 from './d9.jfif'
import d11 from './d11.jfif'
import d10 from './d10.jpg'

import {
    Card, CardDeck,Button
   } from 'react-bootstrap';
function Price() {
  return (
    <div className="Price">
<h1 style={{textAlign:'center',fontFamily:'monospace',color:'black'}} >Prices</h1>  
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
    WAL 5120338 P22MCA 22 LR MILITARY *CA
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

<div  style = {{marginTop:'20px', paddingleft:'5px' }}>
      <CardDeck>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d5} />
  <Card.Body>
    <Card.Title>RS: 400000</Card.Title>
    <Card.Text>
    ARS SAM7R 7.62X39 16 MID LENGTH BLK 10RD
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d6} />
  <Card.Body>
    <Card.Title>RS: 200000</Card.Title>
    <Card.Text>
    ARS SAM7R 7.62X39 16 MID LENGTH BLK 10RD
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d10} />
  <Card.Body>
    <Card.Title>RS: 370000</Card.Title>
    <Card.Text>
    SAV 19734 116 TH XP 7MMREM W/NIK
    </Card.Text>
  </Card.Body>
</Card>
</CardDeck>
</div>

<div className="price"  style = {{marginTop:'20px', paddingleft:'5px' }}>
   
      <CardDeck>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d8}/>
  <Card.Body>
    <Card.Title>RS: 300000</Card.Title>
    <Card.Text>
    COLT MADE M16
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d9} />
  <Card.Body>
    <Card.Title>RS: 350000</Card.Title>
    <Card.Text>
  Militry G3 RIFFLE
    </Card.Text>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={d11} />
  <Card.Body>
    <Card.Title>RS:200000</Card.Title>
    <Card.Text>
      SHOT DUO
    </Card.Text>
  </Card.Body>
</Card>
</CardDeck>
</div>


    </div>
  );
}

export default Price;