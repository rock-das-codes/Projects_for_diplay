import React from "react";
import { useState, useEffect, useContext } from "react";
import { Modal, View, Text, Pressable } from "react-native";
import { ModelViewContext } from ".././global/ModelContext";
function RenderModal(props) {
  
  const [rep,setRep] = useState(0)
  const { timed,setTime,modelVisible,set,setSet, setmodelVisible, exercise, setExercise,currentExercise, setCurrentExercise,isRunning,setIsrunning } =
    useContext(ModelViewContext);
  const [closeModel, setCloseModel] = useState(true);
  
  let interval;
  useEffect(() => {
    if (isRunning) {
      interval = setInterval(() => setTime(timed + 1), 1000);

      // console.log(set,rep)
    }
    return () => clearInterval(interval);
  }, [interval, timed, isRunning,exercise]);
  
  return (
    <>
      <Modal
        animationType="fade"
        visible={props.visibility && closeModel}
        transparent={true}
      >
        <View className="h-full  bg-black/50 w-full">
          <View className="absolute rounded-3xl top-[50%] flex items-center bg-white w-full h-1/2 ">
            <Text className="text-4xl bold capitalize mt-4 pt-4 ">{currentExercise.name}</Text>
            <View className="w-[50%] h-[45%] mt-5  flex-row border-2 border-black rounded-full justify-center  items-center">
              <Text className="text-6xl pt-2  text-center  ">
                {Math.floor((timed * 60) / 3600)} :
              </Text>
              <Text className="text-6xl pt-2 pl-2 text-center  border-black ">
                {Math.floor(timed % 60)}
              </Text>
            </View>
            <Pressable
              className="bg-red-500 rounded-lg mt-4 "
              onPress={() => {
                setmodelVisible(!modelVisible);
                setIsrunning(!isRunning);
                setCurrentExercise((prev)=>({...prev, time:((Math.floor((timed * 60) / 3600)).toString()+ ":" + (Math.floor((timed * 60) / 3600)).toString())}))
                console.log(currentExercise)
                console.log(exercise)
                setExercise(prev=>prev.map(exercise=>exercise.name===currentExercise.name?{...exercise, time: ((Math.floor((timed * 60) / 3600))NN + (Math.floor(timed % 60))),rep:currentExercise.rep,set:currentExercise.set }:exercise))
                console.log(exercise)
                
                
                setTime(0)
              }}
            >
              <Text className="text-3xl px-4 py-4 text-white">Stop</Text>
            </Pressable>
            <View className="w-full mt-2 flex-row ">
              <Text className="w-1/2 text-2xl text-center  ">
                Set : {currentExercise.set}
              </Text>
              <View className="flex-row ml-4">
              <Pressable  onPress={()=>{setRep(prev=>prev-1);setCurrentExercise((prev)=>({...prev,rep:rep}))}} ><Text className="border-2 mt-1 bg-red-600 text-xl text-center h-6 w-8">-</Text></Pressable>
              <Text className="   text-center text-2xl">
                Rep : {currentExercise.rep}
              </Text>
              <Pressable onPress={()=>{setRep(prev=>prev+1);setCurrentExercise((prev)=>({...prev,rep:rep}))}} ><Text className="border-2 bg-green-500 mt-1 text-xl text-center pb-2 h-6 w-8">+</Text></Pressable>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default RenderModal;
