var api = require('./api.js');

function request(url, data, succCb, failCb, completCb) {
  wx.request({
    url,
    header: {
      'Content-Type': 'application/xml'
    },
    method: 'GET',
    data,
    success: function(res) {
      succCb(res.data);
    },
    error: function() {
      failCb();
    },
    complete: function() {
      completCb();
    }
  })
}

function searchBook(data, sucCb, fCb, comCb) {
  request(api.SEARCH_URL, data, sucCb, fCb, comCb);
}

function bookDetail(data, sucCb, fCb, comCb) {
  request(api.DETAIL_URL + data, data, sucCb, fCb, comCb);
}

module.exports = {
  searchBook,
  bookDetail
}