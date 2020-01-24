import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';


import {
  BrowserRouter as Router, 
  Switch, 
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="header">
         <nav>
          <ul  className="menu">
            <li className="logo">
              <p to="/">Mobile shop</p>
            </li>
            <li>
              <ul className="products">
                <li>
                  <Link to="/home"><p>Home</p></Link>
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
                <li> <Link to="/shop"><img className="a" src="https://c7.uihere.com/icons/609/434/345/cart-commerce-buy-shopping-cart-shopping-01bfc781b88867dd92fa180cd6f17ac9.png"/></Link></li>
                <li> <Link to="/account"><img src="https://sopmed.org/wp-content/uploads/2019/01/account-light-gray.svg"/></Link></li>
              </ul>
            </li>
          </ul>
        </nav>
       </div>
       
     
      
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/phone">
          <Phone />
        </Route>
        <Route path="/tablet">
          <Tablet />
        </Route>
        <Route path="/accessories">
          <Accessories />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
      </Switch>

      <div className="footer">
        <h3>Footer</h3>
     </div>
    </Router>
    
  );


 

      
  
}



function Home() {
  return <h1>Home</h1>;
}
function Phone() {
  const [count, setCount] = useState(0);
  return(
    <div>
    <p>Вы кликнули {count} раз</p>
    <button onClick={() => setCount(count + 1)}>
      Нажми на меня
    </button>
  </div>
   );

}
function Tablet() {
  return <h1>Tablet</h1>;
}
function Accessories() {
  return <h1>Accessories</h1>;
}
function Shop() {
  return <h1>Shop</h1>;
}
function Account() {
  return <h1>Account</h1>;
  return <h1>Login</h1>;

  
}


export default App;
