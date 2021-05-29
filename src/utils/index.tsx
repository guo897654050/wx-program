import Taro from '@tarojs/taro';

export default class Native {
  static async showToast(msg) {
    return await Taro.showToast({
      title: msg,
      icon: 'none',
      duration: 1000,
    })
  }
}