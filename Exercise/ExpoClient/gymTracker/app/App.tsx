import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react';

 
import RenderModal from "../components/Model"
import TrackingPage from "./../components/TrackingPage"
import { ModelProvider } from '@/global/ModelContext';
export default function App() {


  return (
<>
   <ModelProvider >
    <TrackingPage/>
     
     </ModelProvider>
     </>
  );
}
