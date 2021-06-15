import { useEffect, useState, FC } from "react";
import { View, Image, Text, ScrollView } from "@tarojs/components";
import "./heart.scss";


const Index: FC = () => {

  const [likeArr, setLikeArr] = useState([]);

  const like = () => {
    const temArr = likeArr.concat(['A'])
    setLikeArr(temArr)
    console.log(99999, temArr)
    setTimeout(() => {
      likeArr.shift()
      console.log(likeArr)
      setLikeArr(likeArr)
    }, 8000)

  }


  return (
    <View className="wrapper">
      {
        likeArr.map((item, index) => 
        <View className={`${(index + 1) % 2 === 0 ? 'like' : 'like like--is-second'}`}>
        </View>
        )
      }
      <View className='btn' onClick={like}>
        点赞
      </View>
    </View>
  );
};

export default Index;
