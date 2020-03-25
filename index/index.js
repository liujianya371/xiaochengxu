import datas from "../utils/data.js";
const utils = require("../utils/utils.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commentList: []
  },

  handleItemLike(e){
    let comment = e.detail.comment;
    let index = e.detail.parentIndex;
    let json = utils.pathToData([{
      path: `commentList[${index}].liked`,
      value: !this.data.commentList[index].liked
    }])
    console.log("json = ",json)
    this.setData(json);
    console.log("commentList", this.data.commentList);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(datas)
    this.setData({
      commentList: datas.comments
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
