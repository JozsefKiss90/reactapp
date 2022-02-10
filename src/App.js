import React from "react";
import { useState } from "react";
import Fade from 'react-reveal/Fade';
import Container from "react-bootstrap/Container"
import Logo from "./images/logo4.png";
import { Navbar, Nav, Row, Col, Collapse} from 'react-bootstrap';
import Image_1_1 from "./images/pollockbag.1.png";
import Image_2 from "./images/pollockbag2.1.png";
import Image_3 from "./images/pollockbag3.1.png";
import Image_4 from "./images/pollockbag4.1.png";
import Visa from "./images/visa-logo.png";
import Amex from "./images/amex.png";
import Master from "./images/mastercard.png";
import Paypal from "./images/paypal.png";
import ReactCountryFlag from "react-country-flag";

const App = () => {

  const [open, setOpen] = useState(false);
  const [zoomed, setZoomed] = useState ({})
  const [fading, setFading] = useState (false)
  const [fading_2, setFading_2] = useState (false)
  const [fading_3, setFading_3] = useState (false)
  const [mouseEffect, setMouseEffect] = useState (false)
  const [mouseEffect_2, setMouseEffect_2] = useState (false)
  const [isVisible, setVisible] = useState(true);
  const [sticky, setSticky] = useState({});
  const [scroll, setScroll] = useState(0);
  const [newNav, setNewNav] = useState (false)

  React.useEffect(() => {
    setZoomed({backgroundSize:550})
  }, [0]);

  React.useEffect(() => {
   setFading(!fading)
  }, [0]);

  React.useEffect(() => {
    setTimeout(function() {
      setFading_2(!fading_2)
  }, 300);
  }, [0]);

  React.useEffect(() => {
    setFading_3(!fading_3)
   }, [0]);

  React.useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', scrollPos);
    return () => window.removeEventListener('scroll', stickNavbar);
   }, []);

   React.useEffect(() => {
    window.addEventListener('scroll', newNavbar);
    return () => window.removeEventListener('scroll', newNavbar);
   }, []);

   

  const classes = fading ? 'btn-rounded' : 'btn-rounded hide'
  const classes_2 = fading_2 ? 'btn-rounded-2' : 'btn-rounded-2 hide'
  const classes_3 = fading ? 'btn-rounded-3' : 'btn-rounded-3 hide'
  const classes_4 = fading_3 ? 'intro-section' : 'intro-section hide'
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 150 ? setSticky({ position: "fixed", top: "0", marginTop:"0", transition: "top 1s"}) : setSticky({});
    }
  };
  const scrollPos = () => {
    if (window !== undefined) {
      let posHeight = window.scrollY;
      posHeight > 112 ? setScroll(posHeight) : setScroll(0)
    }
  };

  const newNavbar = () => {
    if (window !== undefined) {
      let posHeight_2 = window.scrollY;
      posHeight_2 > 112 ? setNewNav(!newNav) : setNewNav(newNav)
    }
  };

  const navClass = newNav ? 'menu-2 show' : 'menu-2'

  const menu = 'menu'

  function handleIn() {
    setMouseEffect(!mouseEffect)
  }

  function handleOut() {
    setMouseEffect(!mouseEffect)
  }

  function handleIn_2() {
    setMouseEffect_2(!mouseEffect_2)
  }

  function handleOut_2() {
    setMouseEffect_2(!mouseEffect_2)
  }

  return (
  <div>
    <Navbar bg="light" className="menu-top" >
      <Container fluid>
        <Row>
          <Nav className="nav-content">
            <Nav.Item className="list-icon" onClick={() => setOpen(!open)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </Nav.Item>
          </Nav>
        </Row>
        <Row >
          <Nav className="nav-content">
            <Navbar.Brand>
                <img src={Logo} alt="wut" className="logo"/>
            </Navbar.Brand>
          </Nav>
        </Row>
        <Row>
          <Nav className="nav-content">
            <Nav.Item className="ms-auto bag-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg>
            </Nav.Item>
          </Nav>
        </Row>
    </Container> 
  </Navbar>
  <Navbar bg="light" fluid className={navClass}>  
      <Container fluid>
      <Row>
          <Nav className="nav-content">
            <Nav.Item className="list-icon" onClick={() => setOpen(!open)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </Nav.Item>
          </Nav>
        </Row>
        <Row >
          <Nav className="nav-content">
            <Navbar.Brand>
                <img src={Logo} alt="wut" className="logo"/>
            </Navbar.Brand>
          </Nav>
        </Row>
        <Row>
          <Nav className="nav-content">
            <Nav.Item className="ms-auto bag-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg>
            </Nav.Item>
          </Nav>
        </Row>
    </Container>
  </Navbar>
  <Collapse in={open} timeout={300}>
      <Container fluid className="dropdown-container" style={{top:`${112+scroll}`+"px"}}>
        <Row className="dropdown">
          <Col className="dropdown-sections"></Col>
          <Col className="dropdown-sections">
            <ul className="text-center dropdown-list">
              <li>
                HOME
              </li>
              <li>
                BEST SELLERS
              </li>
              <li>
                SHOP
              </li>
              <li>
                ABOUT US
              </li>
              <li>
                CONTANT US
              </li>
            </ul>
            
          </Col>
          <Col className="dropdown-sections"></Col>
        </Row>
      </Container>
    </Collapse>
      <Container fluid>
        <Row className=" intro-row justify-content-center">
          <Col style={{fading_3}, zoomed} id="intro-section" className={classes_4}>

          </Col>
        </Row>
        <Row lg={6} className="justify-content-center buttons-row">
          <Col className="buttons">
          <button style={{fading, marginLeft:"5rem"}} type="button" className={mouseEffect ? "btn-rounded-in" : classes} onMouseOver={handleIn} onMouseOut={handleOut}>
                  Shop This
            </button> 
          </Col>
          <Col className="buttons">
            <button style={{fading, marginRight:"5rem"}} type="button" className={mouseEffect_2 ? "btn-rounded-in-2" : classes_2} onMouseOver={handleIn_2} onMouseOut={handleOut_2}>
                  Shop All
            </button> 
          </Col>
        </Row>
      </Container> 
  <Container fluid style={{marginTop:"10px"}}>
    <Row>
     <Col className="example-section">
        <Fade>
        <img src={Image_2}/>
        </Fade>
      </Col>
      <Col className="example-section">
       <Fade>
        <img src={Image_3}/>
        </Fade>
      </Col>
      <Col className="example-section">
        <Fade>
        <img src={Image_4}/>
        </Fade>
      </Col>
    </Row>
  </Container>
  <Container fluid>
    <Row>
      <Col className="example-title">
          <p>
            Autmn Rythm
          </p>
      </Col>
      <Col className="example-title">
          <p>
            Convergence
          </p>
      </Col>
      <Col className="example-title">
          <p>
            Mural
          </p>
      </Col>
    </Row>
    <Row>
      <Col className="example-price">
          <p>
            8.000
          </p>
      </Col>
      <Col className="example-price">
          <p>
          8.000
          </p>
      </Col>
      <Col className="example-price">
          <p>
            8.000 <br/>
          </p>
      </Col>
    </Row>
    <Row>
      <Col className="example-stock">
          <p>
            In Stock
          </p>
      </Col>
      <Col className="example-stock">
          <p>
            In Stock
          </p>
      </Col>
      <Col className="example-stock">
          <p>
            In Stock
          </p>
      </Col>
    </Row>
  </Container>
  <Container fluid className="about">
   <Row>
      <Col className="about-section">
          
      </Col>
      <Col className="about-section">
          <h2>
            About Us
          </h2>
      </Col>
      <Col className="about-section">
         
      </Col>
    </Row>
    <Row >
      <Col lg={3} className="about-section">
          
      </Col>
      <Col lg={6} className="about-section">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
      </Col>
      <Col lg={3} className="about-section">
          
      </Col>
    </Row>
    <Row >
      <Col lg={3} className="about-section">
          
      </Col>
      <Col lg={6} className="about-section">
              <h5 className="story">
                THE WHOLE STORY
              </h5>
              <div style={{border:"0.5px solid lightgrey", maxHeight:"0.5px", width:"151px", position:"relative", bottom:"8px",zIndex:"0"}}>
            
               </div>
      </Col>
      <Col lg={3} className="about-section">
          
      </Col>
    </Row>
  </Container>
  <Container fluid>
    <Row className="images-row">
   <Col lg={4} className="item-desc mt-5 mb-5">
    <Fade>
        <Col> 
          <Row>
            <Col className="image-container">
            <img src={Image_1_1}/>
            </Col>
            <Col className="image-container-1">
            <img src={Image_2}/>
            </Col>
          </Row>
          <Row>
            <Col className="image-container mt-3">
            <img src={Image_3}/>
            </Col>
            <Col className="image-container-1 mt-3">
            <img src={Image_4}/>
            </Col>
          </Row>
        </Col>
      </Fade>
   </Col>
    <Col lg={5} className="item-desc images-text mt-5 mb-5">
      <Row>
        <h3>
          Original artworks
        </h3>
      </Row>
      <Row>
        <p style={{maxWidth:"40rem"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolores illum cum odit debitis quae saepe, sequi similique quod repellendus expedita voluptatum harum, possimus quasi tenetur reiciendis quisquam iste nisi!        </p>
      </Row>
        <button style={{fading,}} type="button" className={mouseEffect ? "btn-rounded-in" : classes} onMouseOver={handleIn} onMouseOut={handleOut}>
                  Shop Now
        </button> 
    </Col>
  </Row>
  </Container>
  <Container fluid>
    <Row className="sticky-row">
        <Col className="sticky-col" lg={6}>
            <div className="sticky-box">
                <h3>
                  Action Painting Style
                </h3>
                <p>
                  Eiusmod tempor incididunt ut labore et dolore magna.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                </p>
            </div>
        </Col>
        <Col className="module">
        <div className="module-inside">
          <div className="sticky-img">

          </div>
        </div>
        </Col>
    </Row>
  </Container>
  <Container fluid>
    <Row className="customer">
      <Col>
      </Col>
      <Col className="customer-row">
        <h3 className=" mt-5">
          Satisfied Customers
        </h3>
      </Col>
      <Col>
      </Col>
    </Row>
    <Row className="customer-2">
      <Col lg={3} className="customer-row-2" style={{marginRight:"1rem"}}>
        <Row>
            <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
              <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
            </svg>
            </p>
          </Row>
          <Row>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </Row>
          <Row>
            <p className="text-center">
              -Gizi
            </p>
          </Row>
      </Col>
      <Col lg={3} className="customer-row-2">
        <Row>
          <p>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
            <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
          </svg>
          </p>
        </Row>
        <Row>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </Row>
        <Row>
          <p className="text-center">
            -Saca
          </p>
        </Row>
      </Col>
      <Col lg={3} className="customer-row-2" style={{marginLeft:"1rem"}}>
        <Row>
            <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
              <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
            </svg>
            </p>
          </Row>
          <Row>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </Row>
          <Row>
          <p className="text-center">
            -Petya
          </p>
        </Row>
      </Col>
    </Row>
  </Container>
  <Container fluid>
    <Row className="footer"> 
      <Col lg={2} className="footer-policies">
        <ul>
          <li style={{fontWeight:"bold", fontSize:"1rem"}} className="mb-2">
            Help
          </li>
          <li>
            Shipping Policy
          </li>
          <li>
            Refund Policy
          </li>
          <li>
            Privacy Policy
          </li>
          <li>
            Terms of Service
          </li>
          <li>
            Track My Order
          </li>
        </ul>
      </Col>
      <Col lg={2} className="footer-policies">
        <ul>
          <li style={{fontWeight:"bold", fontSize:"1rem"}} className="mb-2">
            Explore
          </li>
          <li>
            Home
          </li>
          <li>
            Best Sellers
          </li>
          <li>
            Shop
          </li>
          <li>
            About Us
          </li>
          <li>
            Contact
          </li>
        </ul>
      </Col>
      <Col lg={3} className="footer-join">
        <ul>
            <li style={{fontWeight:"bold", fontSize:"1rem"}} className="mb-2">
            Join To Newsletter
            </li>
            <li style={{lineHeight:"1rem"}}>
             Subscribe to get special offers, free giveaways, <br/> and once-in-a-lifetime deals.
            </li>
            <li style={{padding:"0.5rem 0"}}>
              <div className="footer-input-style">
                <input className="footer-input" placeholder="Enter your email">
                </input>
                <div className={"footer-sub"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                  </svg>
                </div>
              </div>
              <div style={{border:"0.5px solid black", maxHeight:"0.5px", width:"195px", backgroundColor:"black"}}>
            
               </div>
            </li>
            <li>
              <div style={{padding:"0.5rem 0"}}>
                <button style={{fading}} type="button" className={mouseEffect ? "btn-rounded-in-3" : classes_3} onMouseOver={handleIn} onMouseOut={handleOut}>
                  Join
                </button> 
              </div>
            </li>
          </ul>
      </Col>
      <Col lg={5} className="footer-policies">
        <ul>
          <li style={{fontWeight:"bold", fontSize:"1rem"}}>
            Check Us Out
          </li>
          <li>
            Visit us on our social media platforms!
          </li>
          <li>
              <div style={{padding:"0.5rem 0"}} className="footer-icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </div>
            </li>
        </ul>
      </Col>
    </Row>
    <Row className="currency">
      <Col className="currency-pos">
      <ReactCountryFlag
          countryCode="HU"
          svg
          style={{
              width: '2em',
              height: '2em',
          }}
          title="HU"
      />
      <p>
        HUF
      </p>
      </Col>
    </Row>
    <Row>
      <Col lg={3} className="cards">   
          <div className="cards-pos">
            <img src={Visa}/>
            <img src={Amex}/>
            <img src={Master}/>
            <img src={Paypal}/>
          </div> 
      </Col> 
      <Col lg={9} className="footer-copy">
          <div className="footer-icon">
            <i style={{padding:"0 10px"}} class="fa-solid fa-copyright"></i> 
            <p>
              Creative Synthesis
            </p>
          </div>
      </Col>
    </Row>
  </Container>
  <button className="chat-button">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-chat-left-fill" viewBox="0 0 16 16">
     <path d="M2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
    </svg>
    </button>
 </div>
  )

  };
  
export default App;