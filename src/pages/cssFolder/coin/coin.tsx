import { FC } from "react";
import { View, Image, Text, ScrollView } from "@tarojs/components";
import "./coin.scss";


const Index: FC = () => 
  <View className="coin">
    <View className='coin__front'></View>
    <View className='coin__back'></View>
    <View className='coin__edge'>
      {
        Array(100).fill(1).map((item, key) => 
          <View key={key}></View>
        )
      }
      {/* shadow */}
      <div className='coin__shadow'></div>
    </View>
  </View>


export default Index;
