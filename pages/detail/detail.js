// pages/detail/detail.js
var request = require('../../request/request.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    id: null,
    loadingHidden: false,
    bookData: null,
  },
  onLoad: function(option) {
    console.log(option)
    this.setData({
      id: option.id
    });
  },
  onReady: function() {
    var _this = this;
    var id = this.data.id;
    request.bookDetail(
      id,
      (data) =>{
        _this.setData({
          bookData: data
        });
      }, () => {
        wx.navigateBack();
      }, () => {
        _this.setData({
          loadidngHidden: true
        });
      }
    )
  }
})