import { useEffect, useState, useRef, FC } from "react";
import { View, Image, Text, ScrollView } from "@tarojs/components";
import "./progress.scss";


const Index: FC = () => {
  const [progressFlag, setProgressFlag] = useState(false);
  const [width, setWidth] = useState(0);
  const requestRef = useRef<number>(0);

  const loading = () => {
    setProgressFlag(true)
  }

  const callback = () => {
 
    const targetWidth = 200;
    setWidth(width => width + 2)
    if (width < targetWidth) {
      requestRef.current = window.requestAnimationFrame(callback);
    }
  }

  // const init = () => {
  //   window.requestAnimationFrame(callback);
  // }

  useEffect(() => {
    if (width < 200) {
      requestRef.current = window.requestAnimationFrame(callback);
    }
  }, [])

  return (
    <View className="page">
      <View className='wrapper'>
        {
          progressFlag && <View className='progress' style={`width: ${width}rpx; `}>
            <Text>加载进度{width}%</Text>
          </View>
        }
        <View className='btn' onClick={loading}>
          加载
        </View>
      </View>
    </View>
  );
};

export default Index;
