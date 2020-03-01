import React from 'react';
import '../src/globalCss/home.css';
import { Link } from 'react-router-dom';


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
        id: 105,
        saleImage: require('../src/img/Samsung Galaxy S10e (Prism Black).jpg'),
        salePrice: "300,900դր.",
        firstPrice:  "349,000դր"  
    }
]

const Home = () => { 
       
    return (
        <div className="home">  
            <div>
                <img  className="homeBigImg" src={require('../src/img/homeImg.jpg')} alt=""/>
            </div>
            <div className="offer">
                <div className="new">
                    {
                        newItem.map((elem, index)=>
                            <div key={index}>

                                <div className="newItem">
                                    <img className="imgGif" src={require('../src/img/newImg.gif')} alt=""/>
                                </div>
                                <Link 
                                    to={`/shop/${elem.id}`}>
                                    <img className="newImg" src={elem.newImage} alt=""/>
                                </Link>
                                <div className="homePrice" id="homePrice">
                                    <p className="homeNewPrice">{elem.newPrice}</p>
                                </div>
                
                            </div>
                        )
                    }
                </div>

                <div className="sale" >
                    {
                        saleItem.map((elem, index)=>
                            <div className="saleList" key={index}>
                                <div className="saleItem">
                                    <img className="imgSale" src={require('../src/img/sale.png')} alt=""/>
                                </div>
                                <Link to={`/shop/${elem.id}`}>
                                    <img className="homeImg" src={elem.saleImage} alt=""/>   
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
        </div>
    );
   
}

export default Home;