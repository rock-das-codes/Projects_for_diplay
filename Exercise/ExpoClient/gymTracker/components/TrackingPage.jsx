import { useContext, useState } from "react";
import { ModelViewContext } from "@/global/ModelContext";
import { View, TextInput, Pressable, Text, Keyboard } from "react-native";
import RenderModal from "./Model";

export default function TrackingPage() {
  
  const [text, setText] = useState("");
  
  
  const {timed,setTime, modelVisible,set,setSet, setmodelVisible,exercise,setExercise,currentExercise,setCurrentExercise,isRunning,setIsrunning } = useContext(ModelViewContext);
  return (
    <>
      <View className=" ">
        <View className="w-full mt-4 mx-4 flex-row ">
          <TextInput
            onChangeText={(e) =>{ setText(e);console.log(currentExercise)}}
            className="w-[80%] rounded-3xl text-2xl pl-4 inline h-12 border-2 border-black"
            value={text}
            placeholder="Track new exercise.."
          />
          <Pressable
           disabled={!text}
            onPress={() => {
             
              setText("");
              setExercise([...exercise, {name:text,set:0,rep:0,time:"0:00"}]);
              console.log("exercise:",exercise);

              Keyboard.dismiss();
            }}
            className=" flex-1 justify-center items-center bg-blue-600 rounded-3xl text-white text-center w-[20%]"
          >
            <Text className="text-white text-2xl">Set</Text>
          </Pressable>
        </View>
        {exercise
          ? exercise.map((exercises, index) => {
              return (
                <Pressable
                  key={index}
                  onPress={(e) => {
                    setmodelVisible(!modelVisible);
                    setCurrentExercise(exercises);
                    console.log(isRunning)
                    setSet(prev=>prev+1)
                    setTime(exercises.time)
                    setCurrentExercise((prev)=>({...prev,set:set}))
                    setIsrunning(true);  // Update the state
                    setTimeout(() => {
                        console.log("isRunning after update:", isRunning);  // Log after state update
                    }, 0);
                  }}
                >
                  <View
                    className="bg-red-600 flex-row w-[90%] justify-around ml-4 mr-4 mt-4 rounded-3xl"
                    key={Date.now()}
                  >
                    <Text className="px-4 pb-4 mt-4 w-1/2 capitalize text-white text-2xl text-bold">
                      {exercises.name}
                    </Text>
                    <View className="flex-row  mt-4 rounded-xl w-1/2 items-center">
                     <Text className="text-white text-xl  pr-2 ">time: {exercises.time}</Text>
                      <Text className="text-white text-xl border-l-2 pr-2 border-white pl-2 ">set: {exercises.set}</Text>
                      <Text className="text-white text-xl pr-2 border-l-2 border-white pl-2  ">rep: {exercises.rep}</Text>
                      
                    </View>
                  </View>
                </Pressable>
              );
            })
          : null}
        {/* <StatusBar style="auto" /> */}
      </View>
      {currentExercise && currentExercise.name ?(<RenderModal visibility={modelVisible} text={currentExercise.name} set={currentExercise.set} rep={currentExercise.rep} />):null}
      
    </>
  );
}
