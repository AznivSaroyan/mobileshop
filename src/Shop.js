import React from 'react';
import './shop.css';


 const Shop = () => {
    function goBack() {
        window.history.back(1);
      }

    return ( 

        <div className="shopPage">
            <div className="basket">
                <div className="baskedTitle"><p>Զամբյուղ</p></div>
                <div className="basketList">
                    <div className="basketItem">
                        <img src={require('../src/img/iPad mini 5 Wi-Fi + Cellular 64GB (Gold).jpg')} />
                        <div className="shopModel">iPad mini 5 Wi-Fi + Cellular 64GB (Gold).jpg</div>
                    </div>
                    <div  className="basketPrice">
                        <div className="shopPrice"><p>156․155 դր</p></div>
                        <div className="delete" onclick="goBack()"><a href="goBack()"><p>Հեռացնել</p></a></div>
                    </div>
                </div>
            </div>
            <div className="registration">
                <div className="title">Առաքման տվյալներ</div>
                <div className="radiobuttons">
                    <ul>
                        <li><input type="radio" checked/><p>Առաքում</p></li>
                        <li><input type="radio"/><p>Կվերցնեմ ինքս</p></li>
                    </ul>
                </div>

                <div className="nameSurname">
                    <ul>
                        <li><p>Անուն *</p><input className="name" type="text"/></li>
                        <li><p>Ազգանուն *</p><input className="surname" type="text"/></li>
                    </ul>
                </div>

                <div className="phoneMail">
                    <ul>
                        <li><p>Բջջային հեռախոս *</p><input className="phone" type="text"/></li>
                        <li><p>Էլ. փոստ *</p><input className="mail" type="text"/></li>
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
                <div className="shopBotton">
                    <svg  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" class="svg-inline--fa fa-shopping-cart fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
                    <p>Գնել</p>
                </div>
            </div>
        </div>
    )
   
}

export default Shop;