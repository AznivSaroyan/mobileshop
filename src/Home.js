import React from 'react'
import '../src/home.css'

const newItem = [
    {
        newPrice: "59,900դր.",
        newImage: require('../src/img/new.jpg')
    }
]
const saleItem = [
    {
        salePrice: "244,900դր.",
        firstPrice: "269,900դր.",
        saleImage: require('../src/img/sale.jpg')

    },
    {
        salePrice: "4,000դր.",
        firstPrice: "5,000դր.",
        saleImage: require('../src/img/cell2.jpg')

    }

]

const Home = () => { 
    return (
        <div className="home">
            
            <div><img  className="homeBigImg" src={require('../src/img/homeImg.jpg')} /></div>
            <div className="offer">
            
                {
                    newItem.map((elem, index)=>
                        <div className="new" key={index}>

                            <div style={{position: "relative", width: "100%"}}>
                                <img className="imgGif" src={require('../src/img/newImg.gif')}/>
                            </div>
                            <img className="newImg" src={elem.newImage}/>
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
                                <img className="homeImg" src={elem.saleImage}/>        
                            
                            <div className="homePrice">
                                <p className="homeFirstPrice">Հին գին {elem.firstPrice} </p> 
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