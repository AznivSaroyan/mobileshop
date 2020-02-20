import React, { useState, useEffect, Fragment } from 'react';
import './shop.css';
import { Link } from 'react-router-dom'
import { filter } from 'minimatch';
// import { func } from 'prop-types';
// import { EventEmitter } from 'events';
// import Counter from "react-native-counters";
// import Feather from 'react-native-vector-icons/Feather';


    const shops = [
        {
            id: 101,
            showName:"iPhone 11 Pro Max 256GB Silver",
            showImg: require('../src/img/iPhone 11 Pro Max 256GB Silver.jpg'),
            showPrice: 829000
        },
        {
            id: 102,
            showName: "Phone 11 Pro Max 64GB Gold",
            showImg: require('../src/img/Phone 11 Pro Max 64GB Gold.jpg'),
            showPrice: 739900

        },
        {
            id: 103,
            showName:"Apple iPhone X 256GB (Space Grey).jpg",
            showImg: require('../src/img/Apple iPhone X 256GB (Space Grey).jpg'),
            showPrice: 600000


        },
        {
            id: 104,
            showName: "iPhone 11 256GB (White)",
            showImg: require('../src/img/iPhone 11 256GB (White).jpg'),
            showPrice: 459900
        },
        {
            id: 105,
            showName:"Samsung Galaxy S10e (Prism Black)",
            showImg: require('../src/img/Samsung Galaxy S10e (Prism Black).jpg'),
            showPrice: 300900

        },
        {
            id: 106,
            showName: "Apple iPhone XR 64GB (Red)",
            showImg: require('../src/img/Apple iPhone XR 64GB (Red).jpg'),
            showPrice: 359910
        },
        {
            id: 107,
            showName: "Samsung Galaxy J2 Core (Gold)",
            showImg: require('../src/img/Samsung Galaxy J2 Core (Gold).jpg'),
            showPrice: 55.900
        },
        {
            id: 201,
            showName:"iPad Pro 12.9 Wi-Fi + Cellular 64GB (Space Grey)",
            showImg: require('../src/img/iPad Pro 12.9 Wi-Fi + Cellular 64GB (Space Grey).jpg'),
            showPrice: 699900
        },
        {
            id: 202,
            showName: "iPad Pro 11 Wi-Fi + Cellular 64GB (Silver)",
            showImg: require('../src/img/iPad Pro 11 Wi-Fi + Cellular 64GB (Silver).jpg'),
            showPrice: 559900

        },
        {
            id: 203,
            showName:"Apple iPad Pro 12.9 Wi-Fi 64 GB (Gold)",
            showImg: require('../src/img/Apple iPad Pro 12.9 Wi-Fi 64 GB (Gold).jpg'),
            showPrice: 429900


        },
        {
            id: 204,
            showName: "iPad mini 5 Wi-Fi + Cellular 64GB (Gold)",
            showImg: require('../src/img/iPad mini 5 Wi-Fi + Cellular 64GB (Gold).jpg'),
            showPrice: 337900
        },
        {
            id: 205,
            showName:"Samsung Galaxy Tab A 8.0 (Black)",
            showImg: require('../src/img/Samsung Galaxy Tab A 8.0 (Black).jpg'),
            showPrice: 95900

        },
        {
            id: 206,
            showName: "Prestigio WIZE 3171 3G (Black)",
            showImg: require('../src/img/Prestigio WIZE 3171 3G (Black).jpg'),
            showPrice: 50900
        },
        {
            id: 301,
            showName:"Headphone JBL T600 (Black)",
            showImg: require('../src/img/Headphone JBL T600 (Black).jpg'),
            showPrice: 64900
        },
        {
            id: 302,
            showName: "Headphone JBL T600 (Pink)",
            showImg: require('../src/img/Headphone JBL T600 (Pink).jpg'),
            showPrice: 64900

        },
        {
            id: 303,
            showName:"Headphone JBL T205BT (Black).jpg",
            showImg: require('../src/img/Headphone JBL T205BT (Black).jpg'),
            showPrice: 24900


        },
        {
            id: 304,
            showName: "Headphone JBL LIVE 200BT (Red)",
            showImg: require('../src/img/Headphone JBL LIVE 200BT (Red).jpg'),
            showPrice: 39900
        },
        {
            id: 305,
            showName:"Speaker JBL Boombox Portable Bluetooth speaker (Black)",
            showImg: require('../src/img/Speaker JBL Boombox Portable Bluetooth speaker (Black).jpg'),
            showPrice: 249900

        },
        {
            id: 306,
            showName: "Original Samsung Headphone Gear IconX 2018 (Black)",
            showImg: require('../src/img/Original Samsung Headphone Gear IconX 2018 (Black).png'),
            showPrice: 99900
        },
        {
            id: 307,
            showName: "Celly Case Soft Samsung G965 Matt (Black)",
            showImg: require('../src/img/Celly Case Soft Samsung G965 Matt (Black).jpg'),
            showPrice: 3900
        },
        {
            id: 308,
            showName:"SBS Case Skinny Cover iPhone XS Max -TESKINIP65T Transparent",
            showImg: require('../src/img/SBS Case Skinny Cover iPhone XS Max -TESKINIP65T Transparent.jpg'),
            showPrice: 3500
        },
        {
            id: 309,
            showName: "BS Case Glue iPhone XR -TECOVGLUEIP61R (Red)",
            showImg: require('../src/img/SBS Case Glue iPhone XR -TECOVGLUEIP61R (Red).jpg'),
            showPrice: 5000

        },
        {
            id: 310,
            showName:"SBS Case Polo Cover iPhone XR -TEPOLOIP61B (Blue).jpg",
            showImg: require('../src/img/SBS Case Polo Cover iPhone XR -TEPOLOIP61B (Blue).jpg'),
            showPrice: 5000


        },
        {
            id: 311,
            showName: "Remax Battery bank 'Grenade' 'RPL-28' 5000 mAh Olive",
            showImg: require('../src/img/Remax Battery bank "Grenade" "RPL-28" 5000 mAh Olive.jpg'),
            showPrice: 7000
        },
        {
            id: 312,
            showName:"Acme Charger Car CH101 only car 1A-504827 (Black)",
            showImg: require('../src/img/Acme Charger Car CH101 only car 1A-504827 (Black).jpg'),
            showPrice: 2500

        },
        {
            id: 313,
            showName: "Celly Charger Wireless ABK 1A (Black)",
            showImg: require('../src/img/Celly Charger Wireless ABK 1A (Black).jpg'),
            showPrice: 11900
        }
    ]
    
const Shop = (props) => {
    

    const [inputFields, setInputFields] = useState([
        { firstName: '', lastName: '' }
      ]);
   
   
  function getValue(){
    let number = document.getElementById("a").value;
    // let inputArray = [];
    // inputArray.push(number);
    if(number == ""){
        console.log("aaaaaaaaaaaaa");
    }
}



// const getValue = () => {
//     // const number = [...inputFields.inputValue];
  
// if({inputValue: ""}){
//         console.log("aaaaaaaaaaaaaa");
//     }
// }
    


         
    const [number, setNumber] = useState(1)
    const[product1, setProduct] = useState({})
    const [price, setPrice] = useState(null)

    useEffect(() => {
        const data = shops.find(elem => elem.id === parseInt(props.match.params.id)) 
        setProduct(data)
    }, [])


    const minus = () => {
        if(number>1) {
            setNumber(number - 1)
            setPrice(Math.round(product1.showPrice * (number - 1)))
        }
    }

    const plus = () => {
        setNumber(number + 1) 
        setPrice(Math.round(product1.showPrice * (number + 1)))
    }

    
    return (

        <div className="shopPage">

           
            <div className="basket">
                <div className="baskedTitle"><p>Զամբյուղ</p></div>
                <div className="basketList">
               
                    <div className="basketItem">
                        <img src={product1.showImg}/> 
                       
                        <div className="shopModel">{ product1.showName}</div>
                    </div>
                    <div  className="basky
                    etPrice">
                        <div className="shopPrice"><p>{price ? price : product1.showPrice}</p></div>
                        <div className="plusMinus"> 
                            <p onClick = {() => minus() }>-</p>
                            <p>{number}</p>
                            <p onClick = {() => plus() }>+</p>
                        </div>
                        <div className="delete"><a href="javascript:history.back()"><p>Վերադառնալ</p></a></div>
                    </div>
              
                </div>
            </div>
            <div className="registration">
                <div className="title">Առաքման տվյալներ</div>
                <div className="radiobuttons">
                    <form>
                      
                        <label className="container"><p>Առաքում</p>
                            <input name="radio" type="radio" checked />
                            <span className="checkmark"></span>
                        </label>
                        
                      
                        <label className="container"><p>Կվերցնեմ ինքս</p>
                            <input name="radio" type="radio"  />
                            <span className="checkmark"></span>
                        </label>
                       
                    </form>
        
                </div>

    
    
    


 {inputFields.map((inputField, index) => (
 <Fragment key={`${inputField}~${index}`}>



                <div className="nameSurname">
                    <ul>
                        <li><p>Անուն *</p><input id="a"  className="name" type="text"/></li>
                        <li><p>Ազգանուն *</p><input id="a" className="surname" type="text" /></li>
                    </ul>
                </div>

                <div className="phoneMail">
                    <ul>
                        <li><p>Բջջային հեռախոս *</p><input id="a" value={inputField.inputValue=""} className="phone" type="text"/></li>
                        <li><p>Էլ. փոստ *</p><input value={inputField.inputValue=""} className="mail" type="text"/></li>
                    </ul>
                </div>

                <div className="address">
                    <ul>
                        <li><p>Մարզ *</p><select className="region" type="text">
                            <option className="regionItem"></option>
                            <option className="regionItem">Երևան</option>
                        </select></li>
                        <li><p>Քաղաք/Թաղամաս *</p><select className="district" type="text">                            
                            <option></option>
                            <option className="districtItem">Աջափնյակ</option>
                            <option className="districtItem">Ավան</option>
                            <option className="districtItem">Արաբկիր</option>
                            <option className="districtItem">Դավթաշեն</option>
                            <option className="districtItem">Էրեբունի</option>
                            <option className="districtItem">Կենտրոն</option>
                            <option className="districtItem">Մալաթիա-Սեբաստիա</option>
                            <option className="districtItem">Նոր Նորք</option>
                            <option className="districtItem">Նորք-Մարաշ</option>
                            <option className="districtItem">Նուբարաշեն</option>
                            <option className="districtItem">Շենգավիթ</option>
                            <option className="districtItem">Քանաքեռ-Զեյթուն</option>
                        </select></li>
                    </ul>
                </div>


                <div className="house">
                        <p>Հասցե *</p>
                        <input className="houseItem" type="text" placeholder="Փողոց, տուն/շենք, բն․"></input>
                </div>

                <div className="notes">
                    <p>Նշումներ</p>
                    <textarea  rows="6" cols="94"></textarea >
                </div>
                </Fragment>
          ))}
              
                <div className="shopBotton" onClick={()=>getValue()}>
                    <svg  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" className="svg-inline--fa fa-shopping-cart fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
                    <p>Գնել</p>
                </div>
            </div>  
        </div>
    );
   
}

export default Shop;