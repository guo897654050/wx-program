import { FC, useState } from "react";
import { View, Button, Image, Text, ScrollView } from "@tarojs/components";
import "./popup.scss";


const Index: FC = () => {
  const [flag, setFlag] = useState(false)

  const show = () => {
    setFlag(true)
  }

  const hide = () => {
    setFlag(false)
  }

  return (
    <View className="wrapper">
      <Button onClick={show}>唤起弹窗</Button>
      <View className={`popup ${flag ? 'popup--isActive' : ''}`}>我是弹窗
        <View className='popup__close' onClick={hide}>x</View>
      </View>
    </View>
  )
}
 


export default Index;
