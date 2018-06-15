//index.js
var request = require('./../../request/request.js');
Page({
  data: {
    searchKey: '',
    pageIndex: 0,
    pageData: [],
    loadingMore: false,//是否正在加载更多
    isInit: true, //是否第一次进入应用
    totalRecord: 0
  },
  onLoad: function() {
    console.log(1)
  },
  searchEvent: function(e) {
    this.setData({
      searchKey: e.detail.value
    });
  },
  searchClick: function() {
    this.setData({
      pageIndex: 0,
      pageData: []
    });
    requestData.call(this);
  },
  toDetailPage: function(e) {
    var bid = e.currentTarget.dataset.bid;
    wx.navigateTo({
      url: '../detail/detail?id=' + bid
    });
  }
});

function requestData() {
  var _this = this;
  var q = this.data.searchKey;
  var start = this.data.pageIndex;

  this.setData({
    loadingMore: true,
    isInit: false
  });
  request.searchBook({
    q,
    start
  }, (data) => {
    if(data.total == 0) {
      _this.setData({
        totalRecord: 0
      });
    } else {
      _this.setData({
        pageData: _this.data.pageData.concat(data.books),
        pageIndex: start + 1,
        totalRecord: data.total
      })
    }
  }, () => {
    _this.setData({ totalRecord: 0 });
  }, () =>{
    _this.setData({ loadingMore: false });
  })
}
