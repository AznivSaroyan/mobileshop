import React from 'react';
import '../src/globalCss/account.css';
import { Link } from 'react-router-dom';


const salesLast=[
    {
        id: 205,
        idLast: 205,
        totalLast: "95.900դ․",
        stateLast: 1
    }
]
const sales = [    
        {
            id: 101,
            total: "829.000դ․",
            state: 11.000
        },
        {
            id: 204,
            total: "337.900դ․",
            state: 380.000

        },
        {
            id: 205,
            total: "59.900դ․",
            state: 25
        },
        {
            id: 105,
            total: "349.000դ․",
            state: 5
        },
    ]


    const Account = () => {
    return(
        <div className="account"> 

                <div className="accountTitle"><p>Վերջին գնումներ</p></div>
                {
                salesLast.map((elem, index) =>
                    
                    <div className="accountItem" key={index}>
                        <ul>
                            <li id="accountId"><p className="elem"><span className="elem">ID:</span>{elem.idLast}</p></li>

                            <li><p className="elem"><span className="elem">Ընդհանուր:</span>{elem.totalLast}</p></li>
                            
                            <li><p className="elem"><span className="elem">Կարգավիճակ:</span>{elem.stateLast}</p></li>

                            <li className="accountButtons">
                                <div id="buttonItemsLeft" >
                                    <a  className="accountLinks" href="javascript:history.back()">
                                        <p className="button" >Չեղարկել</p>
                                    </a>
                                </div>
                                <div id="buttonItemsRight">
                                    <Link className="accountLinks" to={`/phonedetails/${elem.id}`}>
                                        <p className="button">Տեսնել ավելին</p>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                )  
            } 
           
           <div><p className="accountTitle">Չեղարկված ապրանքներ</p></div>
           {
                sales.map((elem, index) =>             

                    <div className="accountItem" key={index}>
                        <ul>
                            <li id="accountId"><p className="elem"><span className="elem">ID:</span>{elem.id}</p></li>

                            <li><p className="elem"><span className="elem">Ընդհանուր:</span>{elem.total}</p></li>
                            
                            <li><p className="elem"><span className="elem">Կարգավիճակ:</span>{elem.state}</p></li>

                            <li className="accountButtons"> 
                                <div id="buttonItemsLeft">
                                    <Link className="accountLinks" to={`/shop/${elem.id}`}>
                                        <p className="button">Գնել  կրկին</p>
                                    </Link>
                                </div>

                                <div id="buttonItemsRight">
                                    <Link className="accountLinks" to={`/phonedetails/${elem.id}`}>
                                        <p className="button">Տեսնել ավելին</p>
                                    </Link>
                                </div> 
                            </li>
                        </ul>
                    </div>
                )  
            }        
        </div>                  
    );  
} 

export default Account;