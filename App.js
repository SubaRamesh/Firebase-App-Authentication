import React from "react";
import StackNavigator from "./StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from "./hooks/useAuth";

export default function App() {
  return (
    <NavigationContainer>
      {/* higher order component */}
      <AuthProvider>
        {/* passes down auth stuff to children */}
        <StackNavigator/>
      </AuthProvider>
    </NavigationContainer>
    
  );
}

