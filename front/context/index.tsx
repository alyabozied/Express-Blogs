"use client"
import { createContext,useContext, useEffect, useState } from "react";

interface AppState {
    isLoggedIn:boolean
};
const initailState:AppState = {
    isLoggedIn:false
}
const AppContext = createContext<any>(undefined);
export function AppWrapper({children}:{
    children: React.ReactNode;
}){
    let [state , setState] = useState(initailState)
    useEffect(()=>{
        
            fetch("api/checkauth").then(response=>{

                if(response.ok){setState({isLoggedIn:true})}
                else{setState({isLoggedIn:false})}
            }).catch(err=>setState({isLoggedIn:false}))
            
        }
        
    ,[])
    return (
        <AppContext.Provider value={{state,setState}}>
            {children}
        </AppContext.Provider>
    )
}
export function useAppContext(){
    return useContext(AppContext)
}
