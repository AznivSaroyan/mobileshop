import React, { useState } from 'react';


import {
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link
} from "react-router-dom"
import {createBrowserHistory} from 'history';


import Home from './Home';
import Phone from './Phone';
import Tablet from './Tablet';
import Accessories from './Accessories';
import Shop from './Shop';
import Account from './Account';
import PhoneDetails from './PhoneDetails';


export const history = createBrowserHistory();



function App() {
  return (
    <Router history = {history}>

   
    <div className="header">
         <nav>
          <ul  className="menu">
            <li className="logo">
              <p to="/">Mobile shop</p>
            </li>
            <li>
              <ul className="products">
                <li>
                  {/* <Link to="/home"><p>Home</p></Link> */}
                  <Link to="/"><p>Home</p></Link>
                </li>
                <li>
                  <Link to="/phone"><p>Phone</p></Link>
                </li>
                <li>
                  <Link to="/tablet"><p>Tablet</p></Link>
                </li>
                <li>
                  <Link to="/accessories"><p>Accessories</p></Link>
                </li>
              </ul>
            </li>
            <li className="headerSvg">
              <ul>
              <li> <Link to="/account">
              <svg id="headerAccount" aria-hidden="true" focusable="false" data-prefix="far" data-icon="user" class="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="#fff" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
              </svg></Link></li>
              <li> <Link to="/shop"><svg id="headerShop" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" class="svg-inline--fa fa-shopping-cart fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="#fff" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path>
                                      </svg></Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    
      <Switch>
        
       <Route  exact path="/" component={Home}/>

        <Route path="/phone"  component={Phone}/>
       
        <Route path="/tablet" component={Tablet}/>
                  
        <Route path="/accessories" component={Accessories}/>
        
        <Route path="/shop" component={Shop}/>
          
        <Route path="/account" component={Account}/>

        <Route path="/phonedetails"  component={PhoneDetails}/>
      </Switch>



      <div className="footer">
        <div class="footerList">
          <div class="footerItem"><svg  height="40px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone-alt" class="svg-inline--fa fa-phone-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                  <path fill="#426799" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
                                  <div>
                                  <pre className="phoneName">099 55 55 55</pre> 
                                  <p className="phoneText"> Աշխատանքային ժամերը ֊ 10:00-21:00 </p></div>
                                  </div>
          <div class="footerItem"><svg height="40px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="truck-moving" class="svg-inline--fa fa-truck-moving fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                 <path fill="#4267b2" d="M621.3 237.3l-58.5-58.5c-12-12-28.3-18.7-45.3-18.7H480V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v336c0 44.2 35.8 80 80 80 26.3 0 49.4-12.9 64-32.4 14.6 19.6 37.7 32.4 64 32.4 44.2 0 80-35.8 80-80 0-5.5-.6-10.8-1.6-16h163.2c-1.1 5.2-1.6 10.5-1.6 16 0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16H624c8.8 0 16-7.2 16-16v-85.5c0-17-6.7-33.2-18.7-45.2zM80 432c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm128 0c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32zm272-224h37.5c4.3 0 8.3 1.7 11.3 4.7l43.3 43.3H480v-48zm48 224c-17.6 0-32-14.4-32-32s14.4-32 32-32 32 14.4 32 32-14.4 32-32 32z"></path></svg>
                                 <p>Առաքումը 1 աշխատանքային օրվա ընթացքում 10:00-20:00</p></div>
          <div class="cardsItem">
            <img className="cardImg" src={require('../src/img/masterCard.png')} />
            <img className="cardImg" src={require('../src/img/arca.jpg')} />
            <img className="cardImg" src={require('../src/img/visa.png')} />
          </div>
        </div>
        <div className="footerList">
          <div className="footerItem" id="footerItem">
            <p id="reserved">© 2020 MobileShop LLC. All Rights Reserved.</p>
          </div>
          <div  id="media">
            <a href="https://www.facebook.com/">
              <img className="fb" src={require('../src/img/fb.png')}/> 
            </a>
            <a href="https://www.instagram.com/?hl=ru">
              <img className="insta" src={require('../src/img/insta.png')}/>
            </a>
          </div>
        </div>
      </div>
    
    </Router>
  )
}


export default App;
