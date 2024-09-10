import React from "react"
import {createContext , useState} from 'react';

export const ModelViewContext = createContext();


export const ModelProvider = ({children})=>{
    const [modelVisible,setmodelVisible]=useState(false) 
    const [exercise, setExercise] = useState([{name:"pushup",set:0,rep:0,time:0}]);
    const [currentExercise, setCurrentExercise] = useState({name:"pushup",set:0,rep:0,time:0});
    const [isRunning, setIsrunning] = useState(false);
   const [set,setSet] = useState(0);

   const [timed, setTime] = useState(0);
   return <ModelViewContext.Provider value={{timed,setTime,modelVisible,set,setSet,setmodelVisible,exercise,setExercise,currentExercise, setCurrentExercise ,isRunning,setIsrunning}}>
      {children}
    </ModelViewContext.Provider>
}


