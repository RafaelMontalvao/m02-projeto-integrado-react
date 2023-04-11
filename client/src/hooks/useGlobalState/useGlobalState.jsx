import { createContext, useContext, } from "react";

const GlobalState = createContext([]);

export const GlobalStateProvider = GlobalState.Provider;

export function  useGlobalStateContext(){
    return useContext(GlobalState);
}

export function useGlobalState(value){
    const[globalState] = useGlobalStateContext();
    return globalState
}

export function useSetGlobalState(value){
   const [,setGlobalState] = useGlobalStateContext();
    return setGlobalState;
}