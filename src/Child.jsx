import React, { createContext,useContext, useState } from "react";
import { transContext } from "./transContext";
import './App.css'


function Child() {
// yaha pehle array of object tha isko humne transcontect me daldia or global craete context ki mada se humne isko tayra kar lia
    let {transaction,addTransaction} = useContext(transContext)
    // phr yaha par add tranasction bhi mangalia
    let[description,setDescription]=useState()
    let[amount,setAmount]=useState()

    const handleEdition=(e)=>{
      e.preventDefault();
      // preventdefault page ko referesh ni hone deta 
      addTransaction({
        amount:Number(amount),
        discrp:description
      })
    }

    const getIncome = ()=>{
      let income = 0;
      for(var i=0; i<transaction.length;i++){
        if(transaction[i].amount >0){
          income = income + transaction[i].amount
        }
        
      }
      return income;
    }

    
    const getExpense = ()=>{
      let expense = 0;
      for(var i=0; i<transaction.length;i++){
        if(transaction[i].amount <0){
          expense = expense+transaction[i].amount
        }
      
      }
      return expense;
    }





  return (
    <div className="container">
        <h1 className="text-center">Expense tracker App</h1>
         <h3>Your Balance <br /> {getIncome()+getExpense()}</h3>


         <div className="expense-container">
         <h3>income <br /> {getIncome()}</h3>
         <h3> Expense <br />{getExpense()}</h3>
  
         </div>

         <h2>History</h2>
         <hr />
         <ul className="tarnsaction-list">
            {transaction.map((val,ind)=>{
                return <li key={ind}>
                <span>{val.descrp}</span>
                <span>{val.amount}</span>
            </li>
            })}




         </ul>

         <h3>New Transaction</h3>
         <hr />

         <form className="transaction-form" onSubmit={handleEdition}>
    <label >
        Enter your description <br />
        <input type="text" onChange={(e)=>{setDescription(e.target.value)}} required />
    </label> <br />
    <label >
        Enter your Amount <br />
        <input type="number" onChange={(e)=>{setAmount(e.target.value)}} required/>
    </label> <br />

    <input type="submit" value="Add transaction" />
         </form>
    </div>
  );
}

export default Child;
