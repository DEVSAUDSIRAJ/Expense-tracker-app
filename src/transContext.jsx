import React,{createContext,useReducer} from "react";
import transReducer from './transReducer'

let initialTransaction =  [
    {amount:400,descrp:"cash"},
    {amount:-440,descrp:"book"},
    {amount:-200,descrp:"camera"},
]

export const transContext = createContext(initialTransaction);

// transction provider me humne state dispact ko daldia  or yahi se pass karenege datya
// yahha humprovider k name se component banege jis me hum reducer or context dono ko use karege thora critical hoga lekin smjh ajaega
export const TransactionProvider =({children})=>{
    let [state ,dispatch]= useReducer(transReducer,initialTransaction)
    function addTransaction(transObj){
        dispatch({
            type : "ADD TRANSACTION",
            payload : {
                amount:transObj.amount,
                descrp:transObj.discrp
            }
        })

    }
    return(
        <transContext.Provider value={{
            transaction: state,
            addTransaction
        }}>
            {children}
        </transContext.Provider>
    )
}






// create contecct ki mada se humne object ko global kradia or phr eexport bin kradia'
// or ab yaha hum reducer ko import bi karege or usme inital transction ko pass kardege