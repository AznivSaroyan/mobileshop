import React from 'react'
import './account.css';


const salesLast=[
    {
        idLast: 1,
        totalLast: "350.000դ․",
        stateLast: 1

    }
]

const sales = [    
        {
            id: 11,
            total: "11.000դ․",
            state: 11.000
        },
        {
            id: 4,
            total: "380.000դ․",
            state: 380.000

        },
        {
            id: 25,
            total: "5.000դ․",
            state: 25
        },
        {
            id: 5,
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

                            <li><p className="button">Cansel</p></li>

                            <li><p className="button">View more</p></li>

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

                            <li><p className="button">Buy again</p></li>

                            <li><p className="button">View more</p></li>
                        </ul>
                    </div>
                )  
            }          
        </div>                
    );
   
} 




export default Account;