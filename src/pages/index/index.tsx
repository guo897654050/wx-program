import { useEffect, useState, FC } from "react";
import { View, Image, Text, ScrollView } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { Icons } from '../../assests/index'
import Native from '../../utils/index'
import * as page from '../../utils/page.const'
import "./index.scss";


const Index: FC = () => {
  const cssGuide = [
    { key: 'heart', name: '心形点赞' },
    { key: 'progress', name: '进度条加载'},
    { key: 'shining', name: '炫光按钮'},
    { key: 'coin', name: '旋转金币'},
    { key: 'popup', name: '弹窗'}
  ]

  const goDetail = (key) => {
    Native.navigateTo(page[key])
  }

  return (
    <View className="wrapper">
      {
        cssGuide.map((item, index) => 
        <View className='item-wrapper' key={String(index)} onClick={() =>goDetail(item.key)}>
            <Text>{item.name}</Text>
            <Image className="item-icon" src={Icons.right} />
        </View>
        )
      }
    </View>
  );
};

export default Index;
