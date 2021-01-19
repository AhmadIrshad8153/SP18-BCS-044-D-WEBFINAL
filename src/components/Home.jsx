import React from "react"
import './App.css';
import {Link} from "react-router-dom" 
import {Carousel} from 'react-bootstrap'
import rif from './riffle.jpg'
import sig from './sigsuar.jpg'
import fel from './felwinter lies.jpg'
import {
 Card, CardDeck
} from 'react-bootstrap';
import d1 from './d1.jpg'
import d2 from './d2.jpg'
import d3 from './d3.jpg'
import d5 from './d5.jpg'
import d6 from './d6.jpg'
import d10 from './d10.jpg'
import poster from './poster.jpg'
import bodyp from './bodyp.jpg'
import callb from './call b.jpg'
import first from './1st service.jpg'
import ios1 from './ios.png'
import and1 from './android.png'
import c1 from './p1.png'
import c2 from './p5.png'
import c3 from './p2.png'
import c4 from './p3.png'
import c5 from './p6.png'
import c6 from './p4.png'
import ios2 from './footer_apple.png'
import and2 from './footer_android.png'
import s1 from './facebook.png'
import s2 from './instagram.png'
import s3 from './youtube.png'
import s4 from './twitter.png'
import last from './barrel-dark-gun.jpg'


function Home(props){

return(
    <div className="Home" >
    <div>
    <Carousel>
      <Carousel.Item>
      <Link to="/shop" style={{color:'black'}}><img
        height = "400px"
          className="d-block w-100"
          src= {rif}
          alt="First slide"
        /></Link>
        <Carousel.Caption>
          <h3><Link to="/shop" style={{color:'white'}}>New Arrival</Link></h3>
          <p><Link to="/shop" style={{color:'white'}}>Snipping Pro</Link></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Link to="/shop" style={{color:'black'}}><img
        height = "400px"
          className="d-block w-100"
          src={sig}
          alt="Third slide"
        /></Link>
    
        <Carousel.Caption>
          <h3>New Arrival</h3>
          <p><Link to="/shop" style={{color:'white'}}>Sig Sauer P250</Link></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Link to="/shop" style={{color:'white'}}><img
        height = "400px"
          className="d-block w-100"
          src={fel}
          alt="Third slide"
        /></Link>
    
        <Carousel.Caption>
          <h3><Link to="/shop" style={{color:'white'}}>New Arrival</Link></h3>
          <p><Link to="/shop" style={{color:'white'}}>Felwinter's Lie</Link></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

<div style = {{paddingLeft:'25px',paddingRight:'25px', listStyle:'none'}}>
<ul  style={{borderBottom: 'solid black 0.1px', paddingLeft:'25px',listStyle:'none'}}>
<li style = {{display:'inline-block', fontSize:'16px', fontWeight:'normal', padding:'25px', margin:'0', marginRight:'100px', marginLeft:'0px'}}><a className='h' style={{color:'black'}} href ="https://www.google.com/search?rlz=1C1CHBD_enPK921PK921&tbs=lf:1,lf_ui:10&tbm=lcl&q=gun+shops+in+pakistan&rflfq=1&num=10&ved=2ahUKEwiR3NKa2afuAhWUqHEKHcYfDW0QtgN6BAgKEAg#rlfi=hd:;si:;mv:[[35.40109997300112,77.80395477161017],[30.877285245705448,67.15827859088984],null,[33.168365267843186,72.48111668125],7]" target="_blank" >📍 Find a Dealer</a></li> 
<li style = {{display:'inline-block', fontSize:'16px', fontWeight:'normal', padding:'25px', margin:'0'}}><Link to="/shop" style={{color:'black'}}>︻┳═一 Stock Availability ︻┳═一</Link></li>
  <li style = {{display:'inline-block', fontSize:'16px', fontWeight:'normal', padding:'25px', margin:'0',  marginLeft:'100px'}}><a className='h' style={{color:'black'}} href ="https://www.youtube.com/watch?v=rnU5NPIrTls" target="_blank" >Comparison</a></li>
</ul>
</div>

<h3 style={{color:'GrayText',fontSize:'40px',fontFamily:'fantasy',margin:'0',padding:'0',textAlign:'center' }}> Hot Selling </h3>
      


 <div style = {{marginTop:'20px'}}>
 <CardDeck>
  <Card>
  <a href ="" ><Card.Img variant="top" src={d1} /></a>
    <Card.Body>
    <a style={{color:'black'}} href ="" ><Card.Title>WAL 5100301 PPQ TAC 22LR 4IN BLK 12RD</Card.Title></a>
      <Card.Text>
        Fully Automatic Single and brust shot handgun 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
  <a href ="" >    <Card.Img variant="top" src={d2} /></a>
  
    <Card.Body>
    <a style={{color:'black'}} href ="" ><Card.Title>WAL 5120338 P22MCA 22 LR MILITARY *CA</Card.Title></a>
      <Card.Text>
        Fully Automatic Single shot HandGun{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card >
  <a href ="" ><Card.Img variant="top" src={d3} /></a>
    <Card.Body>
    <a style={{color:'black'}} href ="" ><Card.Title>SPG XD9802 CA 40 SC 3IN BLK</Card.Title></a>
      <Card.Text>
       The king of Handguns SPG ,Trigger dbaya or khel khalas 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>

 </div>
    
 <div style = {{marginTop:'20px', paddingleft:'5px' }}>
 <CardDeck>
  <Card>
  <a href ="" ><Card.Img variant="top" src={d5}/></a>
    <Card.Body>
    <a style={{color:'black'}} href ="" ><Card.Title> ARS SAM7R 7.62X39 16 MID LENGTH BLK 10RD</Card.Title></a>
      <Card.Text>
     Long Range Semi-Automatic Sniper
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
  <a href ="" >   <Card.Img variant="top" src={d6} /></a>
    <Card.Body>
    <a style={{color:'black'}} href ="" ><Card.Title>ARS SAM7R 7.62X39 16 MID LENGTH BLK 10RD</Card.Title></a>
      <Card.Text>
       Long Range Single shot and brust ,Fully Automatic{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
  <a href ="" ><Card.Img variant="top" src={d10} /></a>
    <Card.Body>
    <a style={{color:'black'}} href ="" ><Card.Title>SAV 19734 116 TH XP 7MMREM W/NIK</Card.Title></a>
      <Card.Text>
        Manual Longest Range Sniper
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
 </div>
 <img style = {{marginTop:'20px',width:'100%',height:'450px'}} src = {poster} />


<h3  style={{color:'GrayText',fontSize:'40px',fontFamily:'fantasy',margin:'0',padding:'0',textAlign:'center',paddingTop:'15px',paddingBottom:'8px' }} >Compaigns</h3>
<div >
<div style ={{paddingtop:'5px',width:'54%',float:'left',paddingLeft:'11px'}}>
<a href ="" ><img  src = {bodyp} style ={{width:'100%',height:'500px'}} /></a>
<p style = {{border:'black solid 2px', borderWidth:'8px',backgroundColor:'black',color:'red',textAlign:'center',fontSize:'20px',fontFamily:'cursive'}}><a style={{color:'red'}} href ="" >Body And Mechanical Parts Compaign</a></p>
  </div>


  <div style ={{paddingtop:'5px',width:'45%',float:'right'}}>
  <a href ="" ><img  src = {first} style ={{width:'100%',height:'210px'}} /></a>
<p style = {{border:'black solid 2px', borderWidth:'8px',backgroundColor:'black',color:'red',textAlign:'center',fontSize:'20px',fontFamily:'cursive'}}><a style={{color:'red'}} href =" ">1st Free Service</a></p>
  </div>
  
  <div style ={{paddingtop:'1px',width:'45%',float:'right'}}>
  <a href ="" ><img  src = {callb} style ={{width:'100%',height:'227px'}}/></a>
<p style = {{border:'black solid 2px', borderWidth:'8px',backgroundColor:'black',color:'red',textAlign:'center',fontSize:'20px',fontFamily:'cursive'}}><a style={{color:'red'}} href ="">Call Back Compaign</a></p>
  </div>

  </div>
  <div className = 'plz' >
<img src={last} style={{opacity:'1.0',paddingLeft:'10px',paddingBottom:'20px',paddingtop:'30px',height:'550px',width:'100%'}} />
<h1 className = 'cent' style={{color:'red',fontFamily:'cursive',fontSize:'30px'}}>Visit Us With Your App</h1>
<a href ="" ><img className = 'ios' src = {ios1} /></a>
<a href ="" ><img className= 'and' src = {and1}   /></a>
<h1 className = 'cent2' style={{color:'red',fontFamily:'cursive',fontSize:'30px'}}>Co-oprative Partners</h1>
<img className = 'p1' src = {c1}   />
<img className = 'p2' src = {c2}   />
<img className = 'p3' src = {c3}   />
<img className = 'p4' src = {c4}   />
<img className = 'p5' src = {c5}   />
<img className = 'p6' src = {c6}   />
<p className = 'x1' style={{display:'inline'}}><a href ="" >About</a></p>
<p className = 'l1' style={{display:'inline'}}>|</p>
<p className = 'x2' style={{display:'inline'}}><a href ="" >Contact Us</a></p>
<p className = 'l2' style={{display:'inline'}}>|</p>
<p className = 'x3' style={{display:'inline'}}><a href ="" >Reviews</a></p>
<p className = 'l3' style={{display:'inline'}}>|</p>
<p className = 'x4' style={{display:'inline'}}><a href ="" >Privacy Policy</a></p>
<p className = 'l4' style={{display:'inline'}}>|</p>
<p className = 'x5' style={{display:'inline'}}><a href ="" >Term of use</a></p>
<p className = 'x6' style={{display:'inline'}}>Download Now:</p>
<a href ="" ><img className='fooa' src = {and2} /></a>
<a href ="" ><img className='fooi' src = {ios2} /></a>
<p className = 'l5' style={{display:'inline'}}>|</p>
<p className = 'x7' style={{display:'inline'}}>Social Media:</p>
<a href ="" ><img className='y1' src = {s1} /></a>
<a href ="" ><img className='y2' src = {s2} /></a>
<a href ="" ><img className='y3' src = {s3} /></a>
<a href ="" ><img className='y4' src = {s4} /></a>

</div>
</div>
);
}

export default Home;