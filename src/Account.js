import React from 'react'
import './account.css';
import { Link } from 'react-router-dom'

const salesLast=[
    {
        id: 1,
        totalLast: "350.000դ․",
        stateLast: 1
    }
]

const sales = [    
        {
            id: 101,
            total: "11.000դ․",
            state: 11.000
        },
        {
            id: 204,
            total: "380.000դ․",
            state: 380.000

        },
        {
            id: 205,
            total: "5.000դ․",
            state: 25
        },
        {
            id: 105,
            total: "35.000դ․",
            state: 5
        },
    ]


    const Account = () => {
    return(
        <div className="account"> 

                <div className="accountTitle"><p>Last sales</p></div>
                {
                salesLast.map((elem, index) =>
                    
                    <div className="accountItem" key={index}>
                        <ul>
                            <li><p className="elem"><span className="elem">ID:</span>{elem.idLast}</p></li>

                            <li><p className="elem"><span className="elem">Total:</span>{elem.totalLast}</p></li>
                            
                            <li><p className="elem"><span className="elem">State:</span>{elem.stateLast}</p></li>

                            <li id="buttonItemsLeft"><p className="button" >Cancel</p></li>
                            <li id="buttonItemsRight"><p className="button">
                            <Link to={`/phonedetails/${elem.id}`}>View more</Link></p></li>

                        </ul>
                    </div>
                )  
            } 
           
           <div><p className="accountTitle">Canceled Sales</p></div>
           {
                sales.map((elem, index) =>             

                    <div className="accountItem" key={index}>
                        <ul>
                            <li><p className="elem"><span className="elem">ID:</span>{elem.id}</p></li>

                            <li><p className="elem"><span className="elem">Total:</span>{elem.total}</p></li>
                            
                            <li><p className="elem"><span className="elem">State:</span>{elem.state}</p></li>

                            <li id="buttonItemsLeft"><p className="button">Buy again</p></li>

                            <li id="buttonItemsRight"><p className="button">View more</p></li>
                            <Link to={`/phonedetails/${elem.id}`}>View more</Link>

                        </ul>
                    </div>
                )  
            }        
             
        </div>  
                      
    );
   
} 




export default Account;