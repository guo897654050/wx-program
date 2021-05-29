import { useEffect, useState, FC } from "react";
import { View, Image, Text, ScrollView } from "@tarojs/components";
import Taro from "@tarojs/taro";
import "./index.scss";
import Native from "../../utils/index";

interface imagePara {
  author: string;
  category: string;
  createdAt: string;
  desc: string;
  images: string[];
  likeCounts: number;
  publishedAt: string;
  stars: number;
  title: string;
  type: string;
  url: string;
  views: number;
  _id: string;
}

const Index: FC = () => {
  const [pageStatus, setPageStatus] = useState("next");
  const [picList, setPicList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [pageIndex, setPageIndex] = useState(1);
  const [loadCount, setLoadCount] = useState(10);

  const getPic = async () => {
    const params = `https://gank.io/api/v2/data/category/Girl/type/Girl/page/${pageIndex}/count/10`;
    const res: any = await Taro.request({
      url: params,
    });
    if (res.data.data) {
      setLoadCount(
        pageStatus === "next"
          ? loadCount + res.data.data.length
          : loadCount - res.data.data.length
      );
    }
    setPicList(res.data.data);
    setTotalCount(res.data.total_counts);
  };

  useEffect(() => {
    getPic();
  }, [pageIndex]);

  const handleNext = () => {
    setPageStatus("next");
    if (loadCount < totalCount) {
      setPageIndex(pageIndex + 1);
    } else {
      Native.showToast("没有更多了！");
    }
  };

  const handlePrev = () => {
    if (pageIndex === 1) {
      Native.showToast("当前是第一页哦！");
    } else {
      setPageStatus("prev");
      setPageIndex(pageIndex - 1);
    }
  };

  const previewImg = (url) => {
    // console.log(111, url)
    Taro.previewImage({
      current:
        "https://ae01.alicdn.com/kf/Uec00959acd9c4d0aa900d5fb8ea481931.jpg", // 当前显示图片的http链接
      urls: [
        "https://ae01.alicdn.com/kf/Uec00959acd9c4d0aa900d5fb8ea481931.jpg",
      ], // 需要预览的图片http链接列表
      complete: (res) => {
        console.log(233333, res);
      },
    });
  };

  return (
    <View className="wrapper">
      {picList.map((item: imagePara) => (
        <View key={item._id}>
          <ScrollView className="image-wrapper">
            <Image
              onClick={() => previewImg(item.url)}
              src={`https://images.weserv.nl/?url=${item.url}`}
              mode="aspectFit"
            />
          </ScrollView>
        </View>
      ))}
      <View className="footer">
        <View className="prev" onClick={handlePrev}>
          上一页
        </View>
        <View className="next" onClick={handleNext}>
          下一页
        </View>
      </View>
    </View>
  );
};

export default Index;
