import React from 'react';
import '../src/globalCss/home.css';
import { Link } from 'react-router-dom';
import '../src/globalCss/PhoneDetails.css';


const newItem = [
    {
        id: 306,
        newImage: require('../src/img/Original Samsung Headphone Gear IconX 2018 (Black).png'),
        newPrice: "99,900դր." 
    }
]
const saleItem = [
    {  
        id: 106,
        saleImage:  require('../src/img/Apple iPhone XR 64GB (Red).jpg'),
        salePrice: "359,910դր.",
        firstPrice: "399,000դր"
    },
    {   
        id: 107,
        saleImage: require('../src/img/Samsung Galaxy J2 Core (Gold).jpg'),
        salePrice: "55,900դր.",
        firstPrice:  "47,900դր"  
    }

]

const Home = () => { 
       
    return (
        <div className="home">  
            <div>
                <img  className="homeBigImg" src={require('../src/img/homeImg.jpg')} />
            </div>
            <div className="offer">
                {
                    newItem.map((elem, index)=>
                        <div className="new" key={index}>

                            <div style={{position: "relative", width: "100%"}}>
                                <img className="imgGif" src={require('../src/img/newImg.gif')}/>
                            </div>
                            <Link 
                                to={`/shop/${elem.id}`}>
                                <img className="newImg" src={elem.newImage}/>
                            </Link>
                            <p className="homeNewPrice">{elem.newPrice}</p>
                                
                        </div>
                    )
                }
           
                {
                    saleItem.map((elem, index)=>
                        <div  className="sale" key={index}>
                            <div style={{position: "relative", width: "100%"}}>
                                <img className="imgSale" src={require('../src/img/sale.png')}/>
                            </div>
                            <Link to={`/shop/${elem.id}`}>
                                <img className="homeImg" src={elem.saleImage}/>   
                            </Link>     
                            <div className="homePrice">
                                <p className="homeFirstPrice">Հին գին {elem.firstPrice}</p> 
                                <p className="homeSalePrice">Նոր գին {elem.salePrice}</p>
                            </div>                    
                        </div>
                    )               
                }       
            </div>
        </div>
    );
   
}

export default Home;