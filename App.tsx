import React from "react";
import { SafeAreaView, ScrollView, View,Text } from "react-native";
import ChatPersons from "./components/ChatPersons";



function App(){
  return(
    <SafeAreaView>
      <ScrollView>
        <View>
          <ChatPersons/>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
export default App