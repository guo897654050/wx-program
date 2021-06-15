export default {
  pages: [
    'pages/index/index',
    'pages/picture/picture',
    'pages/cssFolder/heart/heart',
    'pages/cssFolder/progress/progress',
    'pages/cssFolder/shining/shining',
    'pages/cssFolder/coin/coin',
    'pages/cssFolder/popup/popup'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#666666',
    selectedColor: '#0087FF',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        // iconPath: 'assets/images/tabbars/private_unselect.png',
        // selectedIconPath: 'assets/images/tabbars/private_select.png',
        text: 'Css',
      },
      {
        pagePath: 'pages/picture/picture',
        // iconPath: 'assets/images/tabbars/private_unselect.png',
        // selectedIconPath: 'assets/images/tabbars/private_select.png',
        text: '图片',
      },
    ]
  }
}
